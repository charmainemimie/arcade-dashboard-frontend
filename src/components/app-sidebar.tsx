"use client"

import type React from "react"

import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Gamepad2,
  Users,
  DollarSign,
  Wrench,
  BarChart3,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Alex Johnson",
    email: "alex@arcadecentral.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  teams: [
    {
      name: "Arcade Central",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Retro Games Inc",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Fun Zone",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Games",
      url: "/games",
      icon: Gamepad2,
    },
    {
      title: "Revenue",
      url: "#",
      icon: DollarSign,
      items: [
        {
          title: "Daily Reports",
          url: "#",
        },
        {
          title: "Monthly Summary",
          url: "#",
        },
        {
          title: "Game Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Player Profiles",
          url: "#",
        },
        {
          title: "Membership Cards",
          url: "#",
        },
        {
          title: "Loyalty Program",
          url: "#",
        },
      ],
    },
    {
      title: "Maintenance",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Service Requests",
          url: "#",
        },
        {
          title: "Scheduled Maintenance",
          url: "#",
        },
        {
          title: "Equipment Status",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "Performance Metrics",
          url: "#",
        },
        {
          title: "Customer Insights",
          url: "#",
        },
        {
          title: "Peak Hours",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Pricing",
          url: "#",
        },
        {
          title: "Staff Management",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Main Floor",
      url: "#",
      icon: Frame,
    },
    {
      name: "VR Zone",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Prize Counter",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
