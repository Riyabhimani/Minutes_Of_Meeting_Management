import React from 'react'
import { prisma } from '@/lib/prisma'

import Link from 'next/link'
import DeleteMeetingMember from '@/app/ui/DeleteMeetingMember'
import SearchBar from '@/app/ui/SearchBar'
import { FaPlus, FaUsers } from 'react-icons/fa'

async function MeetingMemberList({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query || "";

  const data = await prisma.meetingmember.findMany()
  const meetings = await prisma.meetings.findMany()
  const staff = await prisma.staff.findMany()

  const meetingMap = new Map(meetings.map(m => [m.MeetingID, m.MeetingDescription || `Meeting #${m.MeetingID}`]));
  const staffMap = new Map(staff.map(s => [s.StaffID, s.StaffName]));

  // Filter results based on search query
  const filteredData = data.filter((mm) => {
    if (!query) return true;
    const meetingName = meetingMap.get(mm.MeetingID)?.toLowerCase() || "";
    const staffName = staffMap.get(mm.StaffID)?.toLowerCase() || "";
    const remarks = mm.Remarks?.toLowerCase() || "";
    const q = query.toLowerCase();
    return meetingName.includes(q) || staffName.includes(q) || remarks.includes(q);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Meeting Member</h1>
        <p className="text-slate-500 font-medium mt-1">Manage meeting attendance and personnel presence.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        {/* Header with Add Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Attendance Records
          </h2>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <SearchBar placeholder="Search by meeting, staff or remarks..." />
            <Link
              href="/meeting-member/add"
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              <span>+ Add Meeting Member</span>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest text-left">
                <th className="px-4 py-4 text-center">Reference</th>
                <th className="px-4 py-4">Meeting Description</th>
                <th className="px-4 py-4">Staff</th>
                <th className="px-4 py-4 text-center">Status</th>
                <th className="px-4 py-4">Remarks</th>
                <th className="px-4 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((mmByAny: any) => {
                const mm = mmByAny;
                return (
                  <tr key={mm.MeetingMemberID} className="border-b border-slate-50/50 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-4 py-5 text-center text-slate-400 font-bold text-xs">#{mm.MeetingMemberID}</td>
                    <td className="px-4 py-5">
                      <p className="font-semibold text-slate-700 text-sm">{meetingMap.get(mm.MeetingID)}</p>
                    </td>
                    <td className="px-4 py-5">
                      <p className="font-bold text-slate-900 text-sm">{staffMap.get(mm.StaffID)}</p>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${mm.IsPresent
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-rose-50 text-rose-600 border border-rose-100'
                        }`}>
                        {mm.IsPresent ? 'Verified' : 'Absent'}
                      </span>
                    </td>
                    <td className="px-4 py-5 font-medium text-slate-500 text-xs truncate max-w-[200px]">{mm.Remarks || '-'}</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <Link href={`/meeting-member/${mm.MeetingMemberID}`} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-100 transition">
                          View
                        </Link>
                        <Link href={`/meeting-member/edit/${mm.MeetingMemberID}`} className="px-3 py-1.5 bg-white text-indigo-600 text-xs font-bold rounded-lg border border-indigo-100 hover:bg-indigo-50 transition">
                          Edit
                        </Link>
                        <DeleteMeetingMember id={mm.MeetingMemberID} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                No attendance records found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MeetingMemberList
