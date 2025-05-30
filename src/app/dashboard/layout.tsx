import type React from "react"


import { DashboardHeader } from "@/components/layout/header"
import { DashboardSidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
