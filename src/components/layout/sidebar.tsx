"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, GraduationCap, LayoutDashboard, Settings, User,} from "lucide-react"
import React from "react"

interface SidebarProps {
}

export function DashboardSidebar(props: SidebarProps) {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(path + "/")
    }

    return (
        <aside className="flex flex-col  w-64 bg-white border-r border-gray-200 ">
            <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1 mt-5">
                <SidebarLink href="/dashboard" icon={<LayoutDashboard />} active={isActive("/dashboard")}>
                    Dashboard
                </SidebarLink>
                <SidebarLink href="/courses" icon={<BookOpen />} active={isActive("/courses")}>
                    My Courses
                </SidebarLink>
                <SidebarLink href="/profile" icon={<User />} active={isActive("/profile")}>
                    Profile
                </SidebarLink>
                <SidebarLink href="/settings" icon={<Settings />} active={isActive("/settings")}>
                    Settings
                </SidebarLink>
            </nav>

            {/* Footer */}
            <footer className="flex items-center justify-between px-6 py-4 border-t">
               <div className="flex items-center gap-3">
          <img
            src="/avatharr.webp"
            alt="User Avatar"
            className="h-10 w-10 rounded-full object-cover border"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>

                {/* Mode toggle placeholder */}
                <button
                    aria-label="Toggle Theme"
                    className="rounded p-2 hover:bg-gray-100"
                    onClick={() => {
                        // Add your dark mode toggle logic here
                        alert("Toggle theme clicked!")
                    }}
                >
                    🌙
                </button>
            </footer>
        </aside>
    )
}

function SidebarLink({
    href,
    icon,
    active,
    children,
}: {
    href: string
    icon: React.ReactNode
    active: boolean
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium
        ${active
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
      `}
        >
            <span className="h-5 w-5">{icon}</span>
            {children}
        </Link>
    )
}
