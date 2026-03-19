'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Users, Settings2, CalendarDays, LogOut, LayoutDashboard, ClipboardCheck, Calendar as CalendarIcon, UserCheck
} from 'lucide-react';
import { getSettings } from '../actions/SettingsActions';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [systemName, setSystemName] = useState('MoM.AI');

  useEffect(() => {
    async function load() {
      const dbSettings = await getSettings();
      if (dbSettings.systemName) {
        setSystemName(dbSettings.systemName);
      }
      // Always force light mode — dark mode removed
      document.documentElement.classList.remove('dark');
    }
    load();
  }, []);

  const handleLogout = () => {
    // A direct GET via window.location is the most reliable way to clear 
    // cross-origin cookies on localhost.
    const logoutUrl = `http://localhost:3000/auth/logout?redirect=${encodeURIComponent(window.location.origin + '/login')}`;
    window.location.href = logoutUrl;
  };

  return (
    <div className="flex h-screen bg-transparent text-slate-900 font-sans p-4 lg:p-6 gap-6 overflow-hidden">
      {/* Sidebar - Floating Glass Design */}
      <aside className="w-72 glass-card flex flex-col overflow-hidden hidden md:flex shrink-0 relative z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <CalendarDays className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 uppercase">{systemName}</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-4">Navigation</p>
          <SidebarLink href="/dashboard/admindashboard" icon={<LayoutDashboard size={18} />} label="Overview" active={pathname === '/dashboard/admindashboard'} />
          <SidebarLink href="/staff" icon={<Users size={18} />} label="Staff" active={pathname === '/staff' || pathname.startsWith('/staff/')} />
          <SidebarLink href="/staff-attendance" icon={<ClipboardCheck size={18} />} label="Attendance" active={pathname.startsWith('/staff-attendance')} />
          <SidebarLink href="/meeting-type" icon={<Settings2 size={18} />} label="Meeting-Type" active={pathname.startsWith('/meeting-type')} />
          <SidebarLink href="/meetings" icon={<CalendarDays size={18} />} label="Meeting" active={pathname.startsWith('/meetings')} />
          <SidebarLink href="/calendar" icon={<CalendarIcon size={18} />} label="Calendar" active={pathname === '/calendar'} />
          <SidebarLink href="/meeting-member" icon={<UserCheck size={18} />} label="Meeting member" active={pathname === '/meeting-member' || pathname.startsWith('/meeting-member/')} />
          <SidebarLink href="/settings" icon={<Settings2 size={18} />} label="Settings" active={pathname.startsWith('/settings')} />
        </nav>

        <div className="p-4 mt-auto border-t border-slate-200/50">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 text-rose-500 hover:text-white px-5 py-3 w-full rounded-xl transition-all text-sm font-bold hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/25 group overflow-hidden relative"
          >
            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-wide">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-6">
        {children}
      </main>
    </div>
  );
}

// SidebarLink Helper using Next.js Link
function SidebarLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-[13px] font-bold transition-all group relative overflow-hidden ${active
        ? 'text-white shadow-lg shadow-indigo-500/25 premium-gradient'
        : 'text-slate-500 hover:bg-white/60 hover:text-slate-900 hover:shadow-sm'
        }`}
    >
      <span className={`${active ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100 group-hover:scale-110'} transition-all`}>
        {icon}
      </span>
      <span className="tracking-wide">{label}</span>
      {active && <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white opacity-80 shadow-glow"></span>}
    </Link>
  );
}