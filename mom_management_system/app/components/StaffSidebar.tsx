'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LogOut, LayoutDashboard, CalendarDays, 
  Settings2
} from "lucide-react";

export default function StaffSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 glass-card flex flex-col overflow-hidden hidden md:flex shrink-0 relative z-20">
      <div className="p-6 flex items-center gap-3 border-b border-slate-200/50 mb-4">
        <div className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <CalendarDays size={20} className="text-white" />
        </div>
        <span className="text-xl font-black tracking-tight text-slate-900 uppercase">MoM.AI</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-4">Personnel Portal</p>
        <SidebarLink href="/personnel/dashboard" icon={<LayoutDashboard size={18} />} label="Overview" active={pathname === '/personnel/dashboard'} />
        <SidebarLink href="/personnel/meetings" icon={<CalendarDays size={18} />} label="Meetings" active={pathname.startsWith('/personnel/meetings')} />
        <SidebarLink href="/personnel/settings" icon={<Settings2 size={18} />} label="Settings" active={pathname.startsWith('/personnel/settings')} />
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200/50">
        <form action={`http://localhost:3000/auth/logout?redirect=${encodeURIComponent('http://localhost:3000/login')}`} method="GET">
          <button 
            type="submit"
            className="flex items-center justify-center gap-2 text-rose-500 hover:text-white px-5 py-3 w-full rounded-xl transition-all text-sm font-bold hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/25 group overflow-hidden relative"
          >
            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-wide">Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-[13px] font-bold transition-all group relative overflow-hidden ${
        active 
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
