"use client";
import {
  Briefcase,
  Cpu,
  FileCode,
  GraduationCap,
  Mail,
  NotebookText,
  User,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navigation() {
  const navItems = [
    { name: "About", url: "#about", icon: User },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Education", url: "#education", icon: GraduationCap },
    { name: "Projects", url: "#projects", icon: FileCode },
    { name: "Skills", url: "#skills", icon: Cpu },
    { name: "Blog", url: "/blog", icon: NotebookText, external: true },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
