'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

type MeetingType = { MeetingTypeID: number; MeetingTypeName: string } | null | undefined;

type MeetingRecord = {
  MeetingMemberID: number;
  MeetingID: number;
  IsPresent: boolean;
  meeting: {
    MeetingID: number;
    MeetingDate: string; // serialized ISO string
    MeetingDescription: string | null;
    meetingtype?: MeetingType;
  } | null;
};

export default function MeetingsTable({ meetings }: { meetings: MeetingRecord[] }) {
  const [query, setQuery] = useState('');

  const filtered = meetings.filter(record => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    const desc = (record.meeting?.MeetingDescription || '').toLowerCase();
    const type = (record.meeting?.meetingtype?.MeetingTypeName || '').toLowerCase();
    const id = String(record.MeetingID);
    return desc.includes(q) || type.includes(q) || id.includes(q);
  });

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
      {/* Header with live search */}
      <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Meeting History</h2>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Formal Records &amp; Verification</p>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Registry Search..."
            className="pl-10 pr-6 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl outline-none focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 transition-all text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 dark:text-slate-600 border-b border-slate-50 dark:border-slate-800">
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Date &amp; Identity</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Protocol Type</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Verification</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {filtered.length > 0 ? filtered.map(record => (
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
            )) : (
              <tr>
                <td colSpan={4} className="px-8 py-16 text-center">
                  <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                    No records match &quot;{query}&quot;
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
