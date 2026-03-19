"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaCalendarAlt,
    FaUsers,
    FaClipboardList,
    FaHome,
    FaSignOutAlt
} from "react-icons/fa";

const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { name: "Meetings", href: "/meetings", icon: <FaCalendarAlt /> },
    { name: "Staff", href: "/staff", icon: <FaUsers /> },
    { name: "Categories", href: "/meeting-type", icon: <FaClipboardList /> },
];

export default function AdminNavbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/dashboard" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <span className="text-lg font-black tracking-tighter uppercase dark:text-white">MeetingDesk</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname?.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${isActive
                                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                                            : "text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* User Profile / Logout */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                // Logout logic would go here
                                window.location.href = "/login";
                            }}
                            className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
                        >
                            <FaSignOutAlt />
                        </button>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-0.5">
                            <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=Admin&backgroundColor=0f172a&fontSize=40`}
                                alt="Avatar"
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}
