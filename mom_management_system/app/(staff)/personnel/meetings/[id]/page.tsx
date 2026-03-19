import { prisma } from '@/lib/prisma';
import { getServerSession } from '@/lib/auth-server';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CalendarDays, Clock, MapPin,
  ChevronLeft, FileText, Info,
  CheckCircle2, AlertCircle, User,
  Users, ListTodo, ClipboardCheck,
  Download, ExternalLink, ArrowRight
} from 'lucide-react';

export default async function StaffMeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getServerSession();
  if (!user) redirect('/login');

  const meetingId = parseInt(id);
  if (isNaN(meetingId)) notFound();

  const staff = await prisma.staff.findFirst({
    where: { EmailAddress: user.email }
  });

  if (!staff) redirect('/login');

  // Fetch meeting details with type
  const meeting = await prisma.meetings.findUnique({
    where: { MeetingID: meetingId }
  });

  if (!meeting) notFound();

  const meetingType = await prisma.meetingtype.findUnique({
    where: { MeetingTypeID: meeting.MeetingTypeID }
  });

  // Fetch all participants with staff details
  const allMembers = await prisma.meetingmember.findMany({
    where: { MeetingID: meetingId }
  });

  const staffIds = allMembers.map(m => m.StaffID);
  const participantStaff = await prisma.staff.findMany({
    where: { StaffID: { in: staffIds } }
  });

  const participants = allMembers.map(m => ({
    ...m,
    staff: participantStaff.find(s => s.StaffID === m.StaffID)
  })).filter(p => p.staff !== null);

  // Fetch related tasks
  const tasks = await prisma.tasks.findMany({
    where: { MeetingID: meetingId },
    orderBy: { Deadline: 'asc' }
  });

  const taskStaffIds = tasks.map(t => t.StaffID);
  const taskStaff = await prisma.staff.findMany({
    where: { StaffID: { in: taskStaffIds } }
  });

  const enrichedTasks = tasks.map(t => ({
    ...t,
    assignee: taskStaff.find(s => s.StaffID === t.StaffID)
  }));

  // Find current user's membership
  const membership = allMembers.find(m => m.StaffID === staff.StaffID);
  if (!membership) redirect('/personnel/dashboard');

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8 pb-20">
      {/* Enhanced Detail Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
        <Link
          href="/personnel/dashboard"
          className="flex items-center gap-2 text-[10px] font-black text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white uppercase tracking-[0.2em] transition-colors group"
        >
          <div className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:scale-110 transition-transform">
            <ChevronLeft size={14} />
          </div>
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-2xl border ${meeting.IsCancelled
            ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/10 text-rose-600 dark:text-rose-400'
            : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/10 text-emerald-600 dark:text-emerald-400'
            } text-[10px] font-black uppercase tracking-widest`}>
            {meeting.IsCancelled ? 'Cancelled' : 'Active Registry'}
          </div>
          <div className="px-4 py-2 rounded-2xl border bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
            ID: #{meeting.MeetingID}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Core Info & Participants */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Content Card */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white shrink-0 shadow-lg shadow-slate-200 dark:shadow-none">
                  <FileText size={32} />
                </div>
                <div>
                  <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">{meeting.MeetingDescription}</h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-2 py-1 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-100 dark:border-indigo-900/20">
                      {meetingType?.MeetingTypeName || 'Briefing'}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800 hidden md:block"></span>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Users size={12} /> {participants.length} Participants Invited
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pt-10 border-t border-slate-50 dark:border-slate-800">
                <InfoBlock icon={<CalendarDays size={18} />} title="Session Date" value={new Date(meeting.MeetingDate).toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} />
                <InfoBlock icon={<Clock size={18} />} title="Registry Time" value={new Date(meeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
              </div>

              {meeting.IsCancelled && (
                <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/10 p-6 rounded-3xl flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-rose-500 shrink-0 shadow-sm">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">Cancellation Record</h3>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1 ">{meeting.CancellationReason || 'No reason specified.'}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mt-2">
                      Timestamp: {meeting.CancellationDateTime ? new Date(meeting.CancellationDateTime).toLocaleString() : 'N/A'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Participants Section */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="px-8 py-6 border-b border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Participant Registry</h2>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Assigned Metadata</p>
              </div>
              <Users size={18} className="text-slate-400" />
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {participants.map(p => (
                <div key={p.MeetingMemberID} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{p.staff?.StaffName}</p>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight mt-1">{p.staff?.Role || 'Personnel'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {p.Remarks && (
                      <div className="hidden lg:block text-right">
                        <p className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">Remark</p>
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 italic">"{p.Remarks}"</p>
                      </div>
                    )}
                    <span className={`inline-flex px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tight border ${p.IsPresent
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/10'
                        : 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/10'
                      }`}>
                      {p.IsPresent ? 'Verified' : 'Absent'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Actions, Tasks, Docs */}
        <div className="lg:col-span-4 space-y-6">
          {/* Your Status Card */}
          <section className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] p-8 shadow-xl shadow-slate-200 dark:shadow-none relative overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-10">
              <ClipboardCheck size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold tracking-tight mb-1">Your Registry Status</h3>
              <p className="text-[10px] font-black text-white/40 dark:text-slate-500 uppercase tracking-widest mb-6">Internal Verification</p>

              <div className={`p-6 rounded-2xl flex flex-col items-center gap-3 ${membership.IsPresent
                  ? 'bg-white/10 dark:bg-slate-900/5 border border-white/10 dark:border-slate-900/10'
                  : 'bg-rose-500/10 border border-rose-500/20'
                }`}>
                {membership.IsPresent ? (
                  <CheckCircle2 size={32} className="text-emerald-400 dark:text-emerald-600" />
                ) : (
                  <AlertCircle size={32} className="text-rose-400" />
                )}
                <span className={`text-xl font-black uppercase tracking-tighter ${membership.IsPresent ? 'text-emerald-400 dark:text-emerald-600' : 'text-rose-400'
                  }`}>
                  {membership.IsPresent ? 'Verified' : 'Absent'}
                </span>
              </div>

              {membership.Remarks && (
                <div className="mt-6 pt-6 border-t border-white/5 dark:border-slate-100">
                  <p className="text-[9px] font-black text-white/30 dark:text-slate-400 uppercase tracking-widest mb-2">Personnel Remarks</p>
                  <p className="text-xs font-bold italic opacity-80 leading-relaxed">"{membership.Remarks}"</p>
                </div>
              )}
            </div>
          </section>

          {/* Tasks Section */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Assigned Tasks</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Session Action Items</p>
              </div>
              <ListTodo size={18} className="text-slate-400" />
            </div>

            <div className="space-y-4">
              {enrichedTasks.length > 0 ? enrichedTasks.map(t => (
                <div key={t.TaskID} className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-slate-900/10 dark:hover:border-white/10 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${t.Status === 'Completed'
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                        : 'bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400'
                      }`}>
                      {t.Status}
                    </span>
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1 uppercase">
                      <Clock size={8} /> {t.Deadline ? new Date(t.Deadline).toLocaleDateString() : 'No Date'}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mb-4 leading-relaxed">{t.TaskDescription}</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-800">
                      <User size={12} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 truncate tracking-tight">{t.assignee?.StaffName || 'Unassigned'}</p>
                  </div>
                </div>
              )) : (
                <div className="py-10 text-center border-2 border-dashed border-slate-50 dark:border-slate-800 rounded-3xl">
                  <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">No tasks documented</p>
                </div>
              )}
            </div>
          </section>

          {/* Documents Section */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-6">Resources</h3>
            {meeting.DocumentPath ? (
              <div className="space-y-3">
                <a
                  href={meeting.DocumentPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl hover:bg-black dark:hover:bg-slate-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Download size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Formal Minutes</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[8px] font-bold text-slate-400 dark:text-slate-500 break-all px-2 uppercase tracking-tighter opacity-60">
                  Path: {meeting.DocumentPath}
                </p>
              </div>
            ) : (
              <div className="py-8 text-center border-2 border-dashed border-slate-50 dark:border-slate-800 rounded-[1.5rem] bg-slate-50/20 dark:bg-slate-800/20">
                <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest leading-none">Registry empty</p>
                <p className="text-[7px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-1">No documents attached</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-start gap-5 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 group hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 leading-none">{title}</p>
        <p className="text-sm font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
