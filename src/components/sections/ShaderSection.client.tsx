"use client";

import dynamic from "next/dynamic";

export const ShaderSectionClient = dynamic(
  () =>
    import("@/components/sections/ShaderSection").then(
      (mod) => mod.ShaderSection,
    ),
  {
    ssr: false,
    loading: () => (
      <div aria-hidden="true" className="w-full h-screen bg-black" />
    ),
  },
);
