import { prisma } from '@/lib/prisma';
import React from 'react';
import Link from 'next/link';

export default async function MeetingReport({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const meeting = await prisma.meetings.findFirst({
    where: { MeetingID: Number(id) }
  });

  if (!meeting) {
    return <div className="p-10 text-center text-xl font-bold">Meeting not found</div>;
  }

  const meetingType = await prisma.meetingtype.findFirst({
    where: { MeetingTypeID: meeting.MeetingTypeID }
  });

  const rawMembers = await prisma.meetingmember.findMany({
    where: { MeetingID: Number(id) }
  });

  const allStaff = await prisma.staff.findMany();

  const meetingMembers = rawMembers.map(m => ({
    ...m,
    staff: allStaff.find(s => s.StaffID === m.StaffID) || { StaffName: 'Unknown Staff' }
  }));

  const attendees = meetingMembers.filter(m => m.IsPresent);
  const absentees = meetingMembers.filter(m => !m.IsPresent);

  return (
    <div className="min-h-screen bg-white">
      {/* Print Controls (Hidden when printing) */}
      <div className="print:hidden p-6 bg-slate-50 border-b flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-slate-800">Meeting Report Preview</h2>
          <p className="text-slate-500 text-sm">Review the report below. Background graphics will be rendered based on your print settings.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href={`/meetings/${id}`}
            className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Meeting
          </Link>
          <button 
            id="print-btn"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:-translate-y-1 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0v3.396c0 .162.115.31.272.347a47.2 47.2 0 0 1 9.956 0c.157-.037.272-.185.272-.347V7.387Z" />
            </svg>
            Print/Save Report
          </button>
        </div>
      </div>

      {/* Printable Area */}
      <div className="max-w-4xl mx-auto p-10 print:p-0">
        
        {/* Header */}
        <div className="border-b-4 border-indigo-600 pb-8 mb-8 text-center">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight uppercase">Meeting Report</h1>
          <p className="text-lg font-bold text-slate-500 mt-2">{meetingType?.MeetingTypeName || "General Meeting"}</p>
        </div>

        {/* Meeting Details */}
        <div className="grid grid-cols-2 gap-8 mb-10 text-slate-700">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Date & Time</p>
            <p className="text-lg font-bold">{new Date(meeting.MeetingDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Status</p>
            <p className="text-lg font-bold capitalize">
              {meeting.IsCancelled ? `Cancelled (${meeting.CancellationReason || 'No reason'})` : 'Completed / Scheduled'}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h3 className="text-xl font-black text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Agenda & Description</h3>
          <div className="bg-slate-50 p-6 rounded-2xl font-medium text-slate-700 whitespace-pre-wrap leading-relaxed">
            {meeting.MeetingDescription || "No detailed agenda or description was provided for this meeting."}
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-10 page-break-inside-avoid">
          <h3 className="text-xl font-black text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">Attendance Roster</h3>
          <div className="grid grid-cols-2 gap-8">
            {/* Present */}
            <div>
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Present</span>
                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md">{attendees.length}</span>
              </p>
              <ul className="space-y-2">
                {attendees.length > 0 ? attendees.map(m => (
                  <li key={m.MeetingMemberID} className="bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-xl font-medium text-emerald-900 group">
                    <span className="font-bold">{m.staff.StaffName}</span>
                    {m.Remarks && <span className="block text-xs text-emerald-600 mt-1 italic">Note: {m.Remarks}</span>}
                  </li>
                )) : (
                  <li className="text-slate-400 italic">No attendees recorded.</li>
                )}
              </ul>
            </div>

            {/* Absent */}
            <div>
              <p className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>Absent</span>
                <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-md">{absentees.length}</span>
              </p>
              <ul className="space-y-2">
                {absentees.length > 0 ? absentees.map(m => (
                  <li key={m.MeetingMemberID} className="bg-rose-50 border border-rose-100 px-4 py-3 rounded-xl font-medium text-rose-900 group">
                    <span className="font-bold">{m.staff.StaffName}</span>
                    {m.Remarks && <span className="block text-xs text-rose-600 mt-1 italic">Reason: {m.Remarks}</span>}
                  </li>
                )) : (
                  <li className="text-slate-400 italic">No absentees recorded.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-slate-200 text-center text-sm font-medium text-slate-400 print:fixed print:bottom-10 print:w-[calc(100%-5rem)]">
          <p>Generated by MoM.AI System on {new Date().toLocaleDateString()}</p>
          <p className="max-w-md mx-auto mt-2 text-xs">This is a system generated report. For modifications, please access the digital record via the admin dashboard.</p>
        </div>

      </div>

      {/* Script to handle print from Server Component */}
      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('print-btn')?.addEventListener('click', function() {
          window.print();
        });
      `}} />
    </div>
  );
}
