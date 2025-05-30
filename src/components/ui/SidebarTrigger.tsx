"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarTriggerProps {
  className?: string
}

export function SidebarTrigger({ className }: SidebarTriggerProps) {
  return (
    <Button variant="ghost" size="icon" className={className}>
      <Menu className="h-5 w-5" />
    </Button>
  )
}
