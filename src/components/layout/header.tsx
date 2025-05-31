"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Bell, Search} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar} from "@/components/ui/avatar"
import { SidebarTrigger } from "../ui/SidebarTrigger"
export function DashboardHeader() {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", searchQuery)
    }

    return (
        <header className="border-b bg-background ">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <SidebarTrigger className="md:hidden" />
                                        <Link href="/" className="flex items-center">

                    <header className="flex items-center gap-2 px-6 py-4">
                                   <GraduationCap className="h-8 w-8 text-blue-600" />
                                   <h1 className="text-2xl font-bold text-gray-900">Edmento</h1>
                               </header>
                               </Link>
                </div>

                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search courses..."
                            className="w-full pl-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </form>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="relative gap-2">
                                <Avatar className="h-8 w-8">
                                    <img src="/avatharr.webp" alt="" />                                </Avatar>
                                <span className="hidden md:inline-block">Alex Johnson</span>
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </div>
            </div>

            <form onSubmit={handleSearch} className="md:hidden p-2 border-t">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search courses..."
                        className="w-full pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>
        </header>
    )
}
