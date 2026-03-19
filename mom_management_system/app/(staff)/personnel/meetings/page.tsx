import { prisma } from '@/lib/prisma';
import { getServerSession } from '@/lib/auth-server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { 
  CalendarDays, Clock, ArrowRight, Search, 
  CheckCircle2, XCircle, User
} from 'lucide-react';

export default async function StaffMeetingsList() {
  const user = await getServerSession();
  if (!user) {
    redirect('/login');
  }

  const staff = await prisma.staff.findFirst({
    where: { EmailAddress: user.email }
  });

  if (!staff) {
    redirect('/login');
  }

  // Fetch all meetings for this staff
  const memberRecords = await prisma.meetingmember.findMany({
    where: { StaffID: staff.StaffID },
    orderBy: { Created: 'desc' }
  });

  const meetingIds = memberRecords.map(m => m.MeetingID);

  const meetings = await prisma.meetings.findMany({
    where: { MeetingID: { in: meetingIds } },
    orderBy: { MeetingDate: 'desc' }
  });

  const meetingTypes = await prisma.meetingtype.findMany();

  // Combine data manually to avoid Prisma relation type issues
  const consolidatedMeetings = memberRecords.map(record => {
    const meeting = meetings.find(m => m.MeetingID === record.MeetingID);
    const meetingType = meeting ? meetingTypes.find(t => t.MeetingTypeID === meeting.MeetingTypeID) : null;
    return {
      ...record,
      meeting: meeting ? { ...meeting, meetingtype: meetingType } : null
    };
  }).filter(m => m.meeting !== null);

  const totalMeetings = consolidatedMeetings.length;
  const attendedCount = consolidatedMeetings.filter(m => m.IsPresent).length;

  return (
    <div className="space-y-8 pb-10">
      {/* List Header */}
      <header className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] px-8 py-6 flex items-center justify-between sticky top-0 z-20">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Session Archive</h1>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Historical Engagement Registry</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 pl-4 pr-2 py-2 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase leading-none">{staff.StaffName}</p>
            <p className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight mt-0.5">Verified Personnel</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 shadow-sm">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Total Assignments</p>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">{totalMeetings}</h3>
          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-1">Registry Count</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Presence Verified</p>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">{attendedCount}</h3>
          <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tight mt-1">Confirmed Admission</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Absence Recorded</p>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">{totalMeetings - attendedCount}</h3>
          <p className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-tight mt-1">No Presence Detected</p>
        </div>
      </div>

      {/* Meeting Table */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Meeting History</h2>
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Formal Records & Verification</p>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Registry Search..."
              className="pl-10 pr-6 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl outline-none focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 transition-all text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 dark:text-slate-600 border-b border-slate-50 dark:border-slate-800">
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Date & Identity</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Protocol Type</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Verification</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {consolidatedMeetings.map((record) => (
                <tr key={record.MeetingMemberID} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 flex flex-col items-center justify-center text-white shrink-0">
                        <span className="text-[7px] font-black uppercase tracking-widest leading-none opacity-60">
                          {new Date(record.meeting!.MeetingDate).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="text-sm font-black leading-none mt-0.5">
                          {new Date(record.meeting!.MeetingDate).getDate()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{record.meeting?.MeetingDescription}</p>
                        <p className="text-[9px] text-slate-400 dark:text-slate-600 font-bold uppercase tracking-tight mt-0.5">
                          SECURE ID: #{record.MeetingID}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="inline-flex px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                      {record.meeting?.meetingtype?.MeetingTypeName || 'General Session'}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    {record.IsPresent ? (
                      <div className="flex flex-col items-center gap-1">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span className="text-[8px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-tight">Verified</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <XCircle size={16} className="text-rose-500" />
                        <span className="text-[8px] font-black text-rose-600 dark:text-rose-500 uppercase tracking-tight">Absent</span>
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link 
                      href={`/personnel/meetings/${record.MeetingID}`}
                      className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest hover:translate-x-1 transition-transform group"
                    >
                      View Details
                      <ArrowRight size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
