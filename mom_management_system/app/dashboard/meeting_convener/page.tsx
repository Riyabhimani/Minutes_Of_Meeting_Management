import { prisma } from '@/lib/prisma';
import { getServerSession } from '@/lib/auth-server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
    CalendarDays, CheckCircle2, Clock, ArrowRight,
    User, Mail, Shield, AlertCircle, Plus, Users, FileText
} from 'lucide-react';

export default async function MeetingConvenerDashboard() {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

    // Fetch stats for all meetings since convener oversees them
    const totalMeetings = await prisma.meetings.count();
    const completedMeetings = await prisma.meetings.count({ where: { IsCancelled: true } });
    const pendingMeetings = totalMeetings - completedMeetings;

    // Fetch upcoming meetings
    const upcomingMeetings = await prisma.meetings.findMany({
        where: { MeetingDate: { gte: new Date() } },
        orderBy: { MeetingDate: 'asc' },
        take: 5,
        include: { meetingtype: true }
    });

    // Greeting Logic
    const hour = new Date().getHours();
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    if (hour >= 17) greeting = "Good Evening";

    return (
        <div className="space-y-10 pb-10">
            {/* Modern Header - Glassmorphism */}
            <header className="glass-card px-8 py-6 flex items-center justify-between sticky top-0 z-20 shadow-premium mx-2 border-b border-white/60 mb-2">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Convener Hub</h1>
                    <p className="text-xs font-bold text-indigo-500 mt-1 tracking-widest uppercase">
                        {greeting}, {user.name.split(' ')[0]} — Oversight Dashboard
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/meeting_convener/meetings/add"
                        className="premium-gradient text-white px-8 py-3 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-[11px] font-black tracking-widest uppercase overflow-hidden relative group/btn"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            <Plus size={16} />
                            PLAN MEETING
                        </span>
                    </Link>
                    <div className="flex items-center gap-3 bg-white/60 pl-4 pr-2 py-2 rounded-2xl border border-white/60 shadow-sm">
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] font-black text-slate-900 uppercase leading-none">{user.name}</p>
                            <p className="text-[8px] font-bold text-indigo-500 uppercase tracking-tight mt-0.5">Management Registry</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shadow-sm border border-white/60 drop-shadow-sm">
                            <User size={20} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2">
                <DashboardMetric
                    title="Total Registry"
                    value={totalMeetings}
                    icon={<FileText size={20} />}
                    detail="All Scheduled Sessions"
                    color="text-indigo-600"
                />
                <DashboardMetric
                    title="Active Pipeline"
                    value={pendingMeetings}
                    icon={<Clock size={20} />}
                    detail="Upcoming Engagements"
                    color="text-amber-600"
                />
                <DashboardMetric
                    title="Finalized"
                    value={completedMeetings}
                    icon={<CheckCircle2 size={20} />}
                    detail="Verified Records"
                    color="text-emerald-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mx-2">
                {/* Main Content: Upcoming Meetings */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="glass-card p-8 shadow-premium pb-6">
                        <div className="flex items-center justify-between mb-10 border-b border-white/60 bg-white/40 -mx-8 -mt-8 px-8 py-6 rounded-t-[2.5rem]">
                            <div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">Upcoming Sessions</h2>
                                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Priority Pipeline</p>
                            </div>
                            <Link href="/dashboard/meeting_convener/meetings" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">
                                View Repository →
                            </Link>
                        </div>

                        {upcomingMeetings.length > 0 ? (
                            <div className="space-y-4">
                                {upcomingMeetings.map((m: any) => (
                                    <div
                                        key={m.MeetingID}
                                        className="group flex items-center justify-between p-6 bg-white/60 hover:bg-white/90 border border-white/60 shadow-sm rounded-3xl transition-all hover:shadow-md hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-2xl premium-gradient flex flex-col items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/20">
                                                <span className="text-[9px] font-black uppercase tracking-widest leading-none opacity-80 mt-1">
                                                    {new Date(m.MeetingDate).toLocaleString('default', { month: 'short' })}
                                                </span>
                                                <span className="text-xl font-black leading-none mt-1">
                                                    {new Date(m.MeetingDate).getDate()}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-900">{m.MeetingDescription}</h3>
                                                <div className="flex items-center gap-4 mt-1.5">
                                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                                                        <Clock size={12} /> {new Date(m.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                                                        {m.meetingtype?.MeetingTypeName || 'General Session'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/dashboard/meeting_convener/meetings/${m.MeetingID}`}
                                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all"
                                        >
                                            <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center border-2 border-dashed border-white/60 rounded-[3rem] bg-white/40">
                                <div className="w-16 h-16 bg-white shadow-sm border border-white/60 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <CalendarDays size={32} className="text-slate-400 drop-shadow-sm" />
                                </div>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No Scheduled Engagements</p>
                            </div>
                        )}
                    </section>
                </div>

                {/* Sidebar: Convener Tools */}
                <div className="space-y-6">
                    <div className="premium-gradient text-white rounded-[2.5rem] p-8 shadow-xl shadow-indigo-500/20 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-black mb-3 tracking-tight">Oversight Access</h3>
                            <p className="text-white/80 text-xs font-medium leading-relaxed mb-8">
                                As a Meeting Convener, you have authority to organize sessions, manage participants, and verify minutes.
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                <SidebarActionLink label="Staff Registry" icon={<Users size={16} />} href="/dashboard/meeting_convener/staff" />
                                <SidebarActionLink label="Session Types" icon={<Shield size={16} />} href="/meeting-type" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 shadow-premium">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">System Registry</h4>
                        <div className="space-y-8">
                            <MetadataItem icon={<User size={18} />} label="Registry ID" value={`CONV-${user.user_id}`} />
                            <MetadataItem icon={<Mail size={18} />} label="Channel" value={user.email} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardMetric({ title, value, icon, detail, color = "text-slate-900" }: { title: string, value: string | number, icon: React.ReactNode, detail: string, color?: string }) {
    return (
        <div className="glass-card p-6 shadow-premium hover:shadow-supreme hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-white/80 shadow-sm border border-white/60 ${color} group-hover:scale-110 transition-transform duration-300`}>
                    <span className="drop-shadow-sm">{icon}</span>
                </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-1.5">{value}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{detail}</p>
        </div>
    );
}

function SidebarActionLink({ label, icon, href }: { label: string, icon: React.ReactNode, href: string }) {
    return (
        <Link href={href} className="flex items-center justify-between p-4 bg-white/20 hover:bg-white/30 rounded-2xl transition-all group border border-white/10 shadow-sm">
            <div className="flex items-center gap-3">
                <span className="opacity-90">{icon}</span>
                <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
            </div>
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </Link>
    );
}

function MetadataItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center text-slate-500 shrink-0 border border-white/60 shadow-sm group-hover:scale-105 transition-transform">
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">{label}</p>
                <p className="text-sm font-bold break-all text-slate-900">{value}</p>
            </div>
        </div>
    );
}