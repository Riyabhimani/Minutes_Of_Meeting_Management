'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Users, Settings2, CalendarDays,
  LogOut, Plus, Search, CheckCircle2, Clock, FileText,
  ClipboardCheck, LayoutDashboard,
  CalendarIcon, UserCheck
} from 'lucide-react';

import AdminCalendar from '@/app/ui/AdminCalendar';

interface StatItem {
  label: string;
  value: string;
  color: string;
}

interface DashboardUIProps {
  stats?: StatItem[];
}

export default function DashboardUI({ stats: initialStats }: DashboardUIProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [stats, setStats] = useState<StatItem[]>(initialStats || []);
  const [pendingMeetings, setPendingMeetings] = useState<any[]>([]);
  const [allMeetings, setAllMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(!initialStats);

  const iconMap: Record<string, any> = {
    'Total Meetings': FileText,
    'Pending Approval': Clock,
    'Actions Closed': CheckCircle2,
    'Staff Members': Users,
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsRes = await fetch("http://localhost:3000/dashboard/stats");
        if (statsRes.ok) {
          const data = await statsRes.json();
          setStats([
            {
              label: "Total Meetings", value: data.totalMeetings.toString(), color: "text-blue-600",
            },
            {
              label: "Pending Approval", value: data.pendingMeetings.toString(), color: "text-yellow-600",
            },
            {
              label: "Actions Closed", value: data.completedMeetings.toString(), color: "text-green-600",
            },
            {
              label: "Staff Members", value: data.totalStaff.toString(), color: "text-indigo-600",
            },
          ]);
        }

        const meetingsRes = await fetch("http://localhost:3000/dashboard/pending-meetings");
        if (meetingsRes.ok) {
          const meetingsData = await meetingsRes.json();
          setPendingMeetings(meetingsData);
        }

        const allMeetingsRes = await fetch("http://localhost:3000/dashboard/all-meetings");
        if (allMeetingsRes.ok) {
          const allMeetingsData = await allMeetingsRes.json();
          setAllMeetings(allMeetingsData);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialStats || initialStats.length === 0) {
      fetchDashboardData();
    }
  }, [initialStats]);

  const handleMarkComplete = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/dashboard/mark-complete/${id}`, {
        method: 'POST',
      });
      if (res.ok) {
        // Refresh data
        const statsRes = await fetch("http://localhost:3000/dashboard/stats");
        if (statsRes.ok) {
          const data = await statsRes.json();
          setStats([
            { label: "Total Meetings", value: data.totalMeetings.toString(), color: "text-blue-600" },
            { label: "Pending Approval", value: data.pendingMeetings.toString(), color: "text-yellow-600" },
            { label: "Actions Closed", value: data.completedMeetings.toString(), color: "text-green-600" },
            { label: "Staff Members", value: data.totalStaff.toString(), color: "text-indigo-600" },
          ]);
        }
        const meetingsRes = await fetch("http://localhost:3000/dashboard/pending-meetings");
        if (meetingsRes.ok) {
          const meetingsData = await meetingsRes.json();
          setPendingMeetings(meetingsData);
        }
        const allMeetingsRes = await fetch("http://localhost:3000/dashboard/all-meetings");
        if (allMeetingsRes.ok) {
          const allMeetingsData = await allMeetingsRes.json();
          setAllMeetings(allMeetingsData);
        }
      }
    } catch (error) {
      console.error("Failed to mark meeting as complete:", error);
    }
  };

  const handleLogout = () => {
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
          <span className="text-xl font-black tracking-tight text-slate-900 uppercase">MoM.AI</span>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
          <p className="px-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 mt-4">Intelligence Center</p>
          <SidebarLink href="/dashboard/admindashboard" icon={<LayoutDashboard size={18} />} label="Overview" active={true} />
          <SidebarLink href="/staff" icon={<Users size={18} />} label="Staff" active={pathname === '/staff'} />
          <SidebarLink href="/meeting-type" icon={<Settings2 size={18} />} label="Meeting-type" active={pathname === '/meeting-type'} />
          <SidebarLink href="/meetings" icon={<CalendarDays size={18} />} label="Meetings" active={pathname === '/meetings'} />
          <SidebarLink href="/staff-attendance" icon={<ClipboardCheck size={18} />} label="Attendance" active={pathname.startsWith('/staff-attendance')} />
          <SidebarLink href="/calendar" icon={<CalendarIcon size={18} />} label="Calendar" active={pathname === '/calendar'} />
          <SidebarLink href="/meeting-member" icon={<UserCheck size={18} />} label="Meeting Member" active={pathname === '/meeting-member' || pathname.startsWith('/meeting-member/')} />
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
      <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-6 relative z-10">
        <header className="glass-card px-8 py-6 flex items-center justify-between sticky top-0 z-40 mx-2 shadow-premium border-b border-white/60 mb-2">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Executive Dashboard</h1>
            <p className="text-xs font-bold text-indigo-500 mt-1 tracking-widest uppercase">Operational Overview</p>
          </div>
          <button onClick={() => router.push("/meetings/add")} className="premium-gradient text-white px-8 py-3 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-[11px] font-black tracking-widest uppercase overflow-hidden relative group/btn">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <Plus size={16} />
              DISPATCH MEETING
            </span>
          </button>
        </header>

        <div className="flex flex-col gap-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.label] || FileText;
              return (
                <div key={i} className="glass-card p-6 shadow-premium hover:shadow-supreme hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-white/80 shadow-sm border border-white/60 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} className="drop-shadow-sm" />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-4xl font-black text-slate-900 mt-2 tracking-tight">
                    {loading ? <span className="animate-pulse">...</span> : stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-4 shadow-premium mx-2">
            <AdminCalendar meetings={allMeetings} />
          </div>

          <div className="glass-card overflow-hidden shadow-premium mx-2 mb-6">
            <div className="px-8 py-6 flex items-center justify-between border-b border-white/60 bg-white/40">
              <div>
                <h3 className="font-black text-slate-900 text-lg tracking-tight">Active Operations</h3>
                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Session Registry</p>
              </div>
              <div className="relative group/search">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/search:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Filter records..."
                  className="pl-11 pr-6 py-3 bg-white/60 border border-slate-200/50 rounded-xl text-sm outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all w-64 shadow-sm font-semibold text-slate-800"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-400">
                    <th className="px-6 py-3 text-left font-bold uppercase tracking-widest text-[10px]">Session Title</th>
                    <th className="px-6 py-3 text-left font-bold uppercase tracking-widest text-[10px]">Scheduled</th>
                    <th className="px-6 py-3 text-left font-bold uppercase tracking-widest text-[10px]">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pendingMeetings.length > 0 ? (
                    pendingMeetings.map((meeting: any) => (
                      <tr key={meeting.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-semibold text-slate-700">{meeting.title}</td>
                        <td className="px-6 py-5 text-slate-500 font-medium">{new Date(meeting.date).toLocaleDateString()}</td>
                        <td className="px-6 py-5">
                          <button
                            onClick={() => handleMarkComplete(meeting.id)}
                            className="px-4 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all border border-orange-100"
                          >
                            Pending Review
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-20 text-center">
                        <p className="text-slate-400 font-medium italic">No session backlog detected</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <a
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
    </a>
  );
}