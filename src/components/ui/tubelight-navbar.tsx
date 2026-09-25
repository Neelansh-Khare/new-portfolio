"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  /** Either an in-page hash (e.g. `#about`) or an app route (e.g. `/blog`). */
  url: string;
  icon: LucideIcon;
  /**
   * When true, `url` is a route (not a hash) and should be rendered as a
   * regular navigation link that leaves the current page. Scroll-spy is
   * skipped for external items.
   */
  external?: boolean;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

/**
 * Route treated as the "home" page containing the hash-linked sections.
 * When we're on any other route (e.g. `/blog`) the hash items link back to
 * this route (`/#about`) instead of the current one (`/blog#about`).
 */
const HOME_ROUTE = "/";

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  const isHome = pathname === HOME_ROUTE;

  const hashItems = useMemo(() => items.filter((i) => !i.external), [items]);
  const [activeTab, setActiveTab] = useState<string>(() => hashItems[0]?.name ?? items[0].name);

  // While a nav click is smooth-scrolling to its target, the scroll-spy would
  // otherwise highlight every section passed on the way, making the lamp
  // bounce between tabs. Suppress it until the scroll settles.
  const scrollLockRef = useRef(false);
  const unlockTimerRef = useRef<number | undefined>(undefined);
  const releaseLockRef = useRef<(() => void) | null>(null);
  const updateActiveRef = useRef<() => void>(() => {});

  const scrollToSection = (item: NavItem) => {
    const target = document.getElementById(item.url.slice(1));
    if (!target) return false;

    releaseLockRef.current?.();
    scrollLockRef.current = true;
    const arrived = () => {
      const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop);
      return (
        Math.abs(target.getBoundingClientRect().top - (margin || 0)) < 2 ||
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      );
    };
    const onScroll = () => {
      window.clearTimeout(unlockTimerRef.current);
      if (arrived()) {
        release();
        return;
      }
      unlockTimerRef.current = window.setTimeout(release, 500);
    };
    const release = () => {
      scrollLockRef.current = false;
      releaseLockRef.current = null;
      window.clearTimeout(unlockTimerRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", release);
      updateActiveRef.current();
    };
    releaseLockRef.current = release;
    // Release on `scrollend`, on reaching the target, or once scrolling has
    // been idle for a while (browsers without `scrollend`, or the user
    // interrupting); the initial timeout covers "already there".
    unlockTimerRef.current = window.setTimeout(release, 1000);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", release);

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", item.url);
    return true;
  };

  useEffect(() => () => releaseLockRef.current?.(), []);

  // Sync active tab to the URL hash on initial load (so `/#projects` lands
  // with "Projects" already highlighted before the scroll-spy catches up).
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash;
    if (!hash) return;
    const match = hashItems.find((i) => i.url === hash);
    if (match) setActiveTab(match.name);
  }, [isHome, hashItems]);

  // Scroll-spy: the active section is the last one whose top has passed the
  // top ~30% of the viewport, which matches how the fixed nav (top on sm+,
  // bottom on mobile) frames the content the user is reading. Computed from
  // positions on every scroll so the result never depends on event order.
  useEffect(() => {
    if (!isHome || typeof window === "undefined") return;

    const update = () => {
      const sections = hashItems
        .map((item) => ({
          name: item.name,
          el: document.getElementById(item.url.slice(1)),
        }))
        .filter((s): s is { name: string; el: HTMLElement } => s.el !== null);
      if (sections.length === 0) return;

      // Pin the last section when scrolled to the very bottom, since short
      // trailing sections may never reach the activation line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiveTab(sections[sections.length - 1].name);
        return;
      }

      const line = window.innerHeight * 0.3;
      let current = sections[0].name;
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= line) current = s.name;
      }
      setActiveTab(current);
    };
    updateActiveRef.current = update;

    let frame = 0;
    const onScroll = () => {
      if (scrollLockRef.current || frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!scrollLockRef.current) update();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      updateActiveRef.current = () => {};
    };
  }, [isHome, hashItems]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        "pb-[env(safe-area-inset-bottom)] sm:pb-0",
        className,
      )}
    >
      <div className="flex items-center gap-1 md:gap-3 bg-black/50 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isHash = item.url.startsWith("#");
          // Hash links must point back to home when we're on another route,
          // otherwise `<Link href="#about">` on /blog would resolve to
          // `/blog#about` (which has no target).
          const href = isHash && !isHome ? `${HOME_ROUTE}${item.url}` : item.url;

          const isActive = !item.external && isHome && activeTab === item.name;
          const isRouteActive = !!item.external && pathname?.startsWith(item.url);
          const highlighted = isActive || isRouteActive;

          return (
            <Link
              key={item.name}
              href={href}
              aria-label={item.name}
              aria-current={highlighted ? "page" : undefined}
              onClick={(e) => {
                if (!item.external && isHome) {
                  setActiveTab(item.name);
                  // Scroll directly rather than via the router so the scroll
                  // starts immediately and the scroll-spy lock covers it.
                  if (scrollToSection(item)) e.preventDefault();
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                highlighted && "bg-white/10 text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden" aria-hidden="true">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {highlighted && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
