import classNames from "classnames";
import type React from "react";
import "@/app/globals.css";
import { fonts } from "@/resources/once-ui.config";

export const metadata = {
  title: "Blog | Neelansh Khare",
  description:
    "Personal blog of Neelansh Khare — weekly updates on research, engineering, and side projects.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        "dark",
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
      data-theme="dark"
    >
      <body
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
