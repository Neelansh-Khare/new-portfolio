"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(() => {
    const firstHash = items.find((i) => !i.external);
    return firstHash ? firstHash.name : items[0].name;
  });
  const [_isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const hashItems = items.filter((i) => !i.external);
    const sections = hashItems.map((item) => item.name);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveTab(hashItems[hashItems.length - 1]?.name ?? activeTab);
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
    // We intentionally omit `activeTab` — this effect wires up the scroll spy
    // and only needs to re-run when the item list changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 md:gap-3 bg-black/50 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = !item.external && activeTab === item.name;
          // For route links, only mark active when the current pathname
          // matches (so on /blog the "Blog" tab is highlighted).
          const isRouteActive =
            !!item.external && pathname?.startsWith(item.url);

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => {
                if (!item.external) setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                (isActive || isRouteActive) && "bg-white/10 text-white",
              )}
              aria-current={isActive || isRouteActive ? "page" : undefined}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {(isActive || isRouteActive) && (
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
