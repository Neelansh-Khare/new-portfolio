"use client"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { User, Briefcase, FileCode, Cpu, Mail, GraduationCap } from 'lucide-react'

export function Navigation() {
  const navItems = [
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileCode },
    { name: 'Skills', url: '#skills', icon: Cpu },
    { name: 'Contact', url: '#contact', icon: Mail },
  ]

  return <NavBar items={navItems} />
}

