"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
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
  const [activeTab, setActiveTab] = useState<string>(
    () => hashItems[0]?.name ?? items[0].name,
  );

  // Sync active tab to the URL hash on initial load (so `/#projects` lands
  // with "Projects" already highlighted before the observer catches up).
  useEffect(() => {
    if (!isHome) return;
    const hash = window.location.hash;
    if (!hash) return;
    const match = hashItems.find((i) => i.url === hash);
    if (match) setActiveTab(match.name);
  }, [isHome, hashItems]);

  // Scroll-spy via IntersectionObserver. rootMargin biases the "active" band
  // toward roughly the top-third of the viewport, which matches how the fixed
  // nav (top on sm+, bottom on mobile) frames the content the user is reading.
  useEffect(() => {
    if (!isHome || typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    const sections = hashItems
      .map((item) => document.getElementById(item.name.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length === 0) return;
        const nextId = visible[0].target.id;
        const nextName = hashItems.find(
          (i) => i.name.toLowerCase() === nextId,
        )?.name;
        if (nextName) setActiveTab(nextName);
      },
      {
        // Trigger while the section occupies the top ~40% of the viewport.
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));

    // Pin the last section as active when the page is scrolled to the very
    // bottom — the observer's rootMargin can miss short trailing sections.
    const handleBottom = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        setActiveTab(hashItems[hashItems.length - 1].name);
      }
    };
    window.addEventListener("scroll", handleBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleBottom);
    };
  }, [isHome, hashItems]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
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
          const isRouteActive =
            !!item.external && pathname?.startsWith(item.url);
          const highlighted = isActive || isRouteActive;

          return (
            <Link
              key={item.name}
              href={href}
              aria-label={item.name}
              aria-current={highlighted ? "page" : undefined}
              onClick={() => {
                if (!item.external && isHome) setActiveTab(item.name);
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
