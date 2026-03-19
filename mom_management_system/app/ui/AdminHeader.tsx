"use client";

import React from 'react';
import { Plus, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
    const pathname = usePathname();

    // Determine title based on pathname
    const getTitle = () => {
        if (pathname === '/dashboard') return 'Admin Dashboard';
        if (pathname.includes('/staff')) return 'Staff Management';
        if (pathname.includes('/meeting-type')) return 'Meeting Types';
        if (pathname.includes('/meetings')) return 'Meetings List';
        return 'Admin Panel';
    };

    const getSubtitle = () => {
        if (pathname === '/dashboard') return 'Real-time system statistics and overview.';
        if (pathname.includes('/staff')) return 'Manage authorized personnel and access.';
        if (pathname.includes('/meeting-type')) return 'Classify and organize meeting categories.';
        if (pathname.includes('/meetings')) return 'Access and manage all meeting records.';
        return 'MoM Management System';
    };

    return (
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold text-slate-800">{getTitle()}</h1>
                <p className="text-xs text-slate-500">{getSubtitle()}</p>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-black text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-slate-900 transition flex items-center gap-2 text-sm font-bold">
                    <Plus size={18} />
                    New Meeting
                </button>
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 p-0.5 overflow-hidden">
                    <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=Admin&backgroundColor=0f172a&fontSize=40`}
                        alt="Avatar"
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </div>
        </header>
    );
}
