"use client";

import dynamic from "next/dynamic";

/**
 * Client-only loader for the Spline 3D hero.
 * Splitting the dynamic() call out of page.tsx lets the page stay a
 * Server Component while this heavy 3D scene stays browser-only.
 */
export const SplineHeroClient = dynamic(
  () => import("@/components/sections/SplineHero").then((mod) => mod.SplineHero),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="w-full h-[600px] bg-black animate-pulse"
      />
    ),
  },
);
