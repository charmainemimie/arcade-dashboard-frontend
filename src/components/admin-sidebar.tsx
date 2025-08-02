"use client"

import { LayoutDashboard, Gamepad2, Users, Calendar, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    title: "Games",
    icon: Gamepad2,
    id: "games",
  },
  {
    title: "Customers",
    icon: Users,
    id: "customers",
  },
  {
    title: "Bookings",
    icon: Calendar,
    id: "bookings",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
  },
]

interface AdminSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function AdminSidebar({ activeView, setActiveView }: AdminSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold group-data-[collapsible=icon]:hidden">Arcade Admin</h2>
        <div className="hidden group-data-[collapsible=icon]:block text-center">
          <Gamepad2 className="h-6 w-6 mx-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => setActiveView(item.id)}
                isActive={activeView === item.id}
                className="w-full justify-start"
                tooltip={item.title}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
