"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Dashboard } from "@/components/dashboard"
import { Games } from "@/components/games"
import { Customers } from "@/components/customers"
import { Bookings } from "@/components/bookings"
import { Settings } from "@/components/settings"

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />
      case "games":
        return <Games />
      case "customers":
        return <Customers />
      case "bookings":
        return <Bookings />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  const getPageTitle = () => {
    switch (activeView) {
      case "dashboard":
        return "Dashboard"
      case "games":
        return "Games Management"
      case "customers":
        return "Customer Management"
      case "bookings":
        return "Booking Management"
      case "settings":
        return "Settings"
      default:
        return "Dashboard"
    }
  }

  return (
    <SidebarProvider>
      <AdminSidebar activeView={activeView} setActiveView={setActiveView} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
        </header>
        <main className="flex-1 p-4 md:p-6">{renderContent()}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
