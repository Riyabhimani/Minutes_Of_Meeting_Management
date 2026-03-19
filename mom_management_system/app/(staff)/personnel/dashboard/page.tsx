import { prisma } from '@/lib/prisma';
import { getServerSession } from '@/lib/auth-server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  CalendarDays, CheckCircle2, Clock, ArrowRight,
  MapPin, User, Mail, Shield, AlertCircle
} from 'lucide-react';

export default async function StaffDashboard() {
  const user = await getServerSession();
  if (!user) {
    redirect('/login');
  }

  const staff = await prisma.staff.findFirst({
    where: { EmailAddress: user.email }
  });

  if (!staff) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
        <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center max-w-md shadow-sm">
          <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={32} className="text-rose-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Staff Not Found</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Your account ({user.email}) is not linked to any profile in our registry.</p>
        </div>
      </div>
    );
  }

  // Fetch Attendance Records
  const rawMembers = await prisma.meetingmember.findMany({
    where: { StaffID: staff.StaffID }
  });

  const meetingIds = rawMembers.map(m => m.MeetingID);

  const meetings = await prisma.meetings.findMany({
    where: { MeetingID: { in: meetingIds } },
    orderBy: { MeetingDate: 'desc' }
  });

  const meetingTypes = await prisma.meetingtype.findMany();

  const meetingMembers = rawMembers.map(m => {
    const meeting = meetings.find(mtg => mtg.MeetingID === m.MeetingID);
    const meetingType = meeting ? meetingTypes.find(t => t.MeetingTypeID === meeting.MeetingTypeID) : null;
    return {
      ...m,
      meetings: meeting ? { ...meeting, meetingtype: meetingType } : null
    };
  }).filter(m => m.meetings !== null);

  // Stats Logic
  const totalMeetings = meetingMembers.length;
  const attendedCount = meetingMembers.filter(m => m.IsPresent).length;
  const attendanceRate = totalMeetings > 0 ? Math.round((attendedCount / totalMeetings) * 100) : 0;

  // Greeting Logic
  const hour = new Date().getHours();
  let greeting = "Good Morning";
  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  if (hour >= 17) greeting = "Good Evening";

  // Split Meetings
  const now = new Date();
  const upcomingMeetings = meetingMembers.filter(m => {
    if (!m.meetings) return false;
    return new Date(m.meetings.MeetingDate) >= now;
  });
  const pastMeetings = meetingMembers.filter(m => {
    if (!m.meetings) return false;
    return new Date(m.meetings.MeetingDate) < now;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Modern Header - Glassmorphism */}
      <header className="glass-card px-8 py-6 flex items-center justify-between sticky top-0 z-20 shadow-premium mx-2 border-b border-white/60 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Staff Dashboard</h1>
          <p className="text-xs font-bold text-indigo-500 mt-1 tracking-widest uppercase">
            {greeting}, {staff.StaffName.split(' ')[0]} — Assigned Portfolio
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/60 pl-4 pr-2 py-2 rounded-2xl border border-white/60 shadow-sm">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black text-slate-900 uppercase leading-none">{staff.StaffName}</p>
            <p className="text-[8px] font-bold text-indigo-500 uppercase tracking-tight mt-0.5">Staff Registry</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shadow-sm border border-white/60 drop-shadow-sm">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="space-y-8 pb-10 mx-2">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DashboardMetric title="Assignments" value={totalMeetings} icon={<CalendarDays size={18} />} detail="Total Registry" color="text-blue-600" />
          <DashboardMetric title="Attendance" value={attendedCount} icon={<CheckCircle2 size={18} />} detail="Verified Presence" color="text-green-600" />
          <DashboardMetric title="Compliance" value={`${attendanceRate}%`} icon={<Shield size={18} />} detail="Performance Index" color="text-indigo-600" />
          <DashboardMetric title="Clearance" value={attendanceRate >= 75 ? "Active" : "Standard"} icon={<Clock size={18} />} detail="System Status" color="text-orange-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Meetings */}
          <div className="lg:col-span-2 space-y-8">
            <section className="glass-card p-8 shadow-premium pb-6">
              <div className="flex items-center justify-between mb-8 border-b border-white/60 bg-white/40 -mx-8 -mt-8 px-8 py-6 rounded-t-[2.5rem]">
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Scheduled Sessions</h2>
                  <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-0.5">Upcoming Engagements</p>
                </div>
              </div>

              {upcomingMeetings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMeetings.map(m => (
                    <Link
                      key={m.MeetingMemberID}
                      href={`/personnel/meetings/${m.MeetingID}`}
                      className="group flex items-center justify-between p-5 bg-white/60 hover:bg-white/90 border border-white/60 shadow-sm rounded-2xl transition-all block hover:shadow-md hover:-translate-y-1 mt-2"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl premium-gradient flex flex-col items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/20">
                          <span className="text-[8px] font-black uppercase tracking-widest leading-none opacity-80 mt-1">
                            {new Date(m.meetings!.MeetingDate).toLocaleString('default', { month: 'short' })}
                          </span>
                          <span className="text-lg font-black leading-none mt-0.5">
                            {new Date(m.meetings!.MeetingDate).getDate()}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{m.meetings?.MeetingDescription}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                              <Clock size={10} /> {new Date(m.meetings!.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                              {m.meetings?.meetingtype?.MeetingTypeName || 'General Session'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center border-2 border-dashed border-white/60 rounded-3xl bg-white/40">
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No upcoming sessions detected</p>
                </div>
              )}
            </section>

            <section className="glass-card shadow-premium overflow-hidden border-none pb-0">
              <div className="px-8 py-6 flex items-center justify-between border-b border-white/60 bg-white/40">
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Activity History</h2>
                  <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-0.5">Verified Records</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white/30 backdrop-blur-md">
                  <thead>
                    <tr className="text-slate-500 border-b border-white/60">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Target Session</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Timestamp</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Verification Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/40">
                    {pastMeetings.map((m) => (
                      <tr key={m.MeetingMemberID} className="hover:bg-white/60 transition-colors group">
                        <td className="px-6 py-5">
                          <Link href={`/personnel/meetings/${m.MeetingID}`} className="block group">
                            <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{m.meetings?.MeetingDescription}</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight mt-0.5">REF: #{m.MeetingID}</p>
                          </Link>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <p className="font-mono text-[11px] text-slate-500 font-bold uppercase">
                            {new Date(m.meetings!.MeetingDate).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}
                          </p>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className={`inline-flex px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-tight ${m.IsPresent
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm'
                            : 'bg-rose-50 text-rose-600 border border-rose-200 shadow-sm'
                            }`}>
                            {m.IsPresent ? 'Verified Presence' : 'Marked Absent'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Info Cards */}
          <div className="space-y-6">
            <div className="premium-gradient text-white rounded-[2.5rem] p-8 shadow-xl shadow-indigo-500/20 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-white/20 rounded-2xl mb-6 shadow-inner border border-white/10">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">Compliance Status</h3>
                  <p className="text-white/80 text-xs font-medium leading-relaxed mb-6">
                    Maintain your presence index above 75% for quarterly clearance procedures.
                  </p>
                  <div className="space-y-4">
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-white rounded-full shadow-glow" style={{ width: `${attendanceRate}%` }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-white/80">Current Level</span>
                      <span>{attendanceRate}%</span>
                    </div>
                  </div>
                </div>
            </div>

            <div className="glass-card p-8 shadow-premium">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Staff Metadata</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shrink-0 border border-white/60 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Email Address</p>
                    <p className="text-xs font-bold text-slate-900 break-all">{staff.EmailAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-500 shrink-0 border border-white/60 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">Remarks</p>
                    <p className="text-xs font-bold text-slate-900">{staff.Remarks || 'Operational Standard'}</p>
                  </div>
                </div>
              </div>
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
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{detail}</p>
    </div>
  );
}