"use client";

import React from 'react';
import { Clock, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import moment from 'moment';

interface UpcomingSummaryProps {
  meetings: any[];
}

export default function UpcomingSummary({ meetings }: UpcomingSummaryProps) {
  const tomorrow = moment().add(1, 'days').startOf('day');
  const endOfTomorrow = moment().add(1, 'days').endOf('day');

  const upcomingMeetings = meetings.filter((m) => {
    const meetingDate = moment(m.date);
    return !m.IsCancelled && meetingDate.isBetween(tomorrow, endOfTomorrow, undefined, '[]');
  }).sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf());

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
            Tomorrow's Schedule
            <span className="bg-indigo-50 text-indigo-600 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">
              {upcomingMeetings.length} Sessions
            </span>
          </h3>
          <p className="text-xs text-slate-500">Overview of upcoming placements and meetings.</p>
        </div>
        <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
            <CalendarIcon size={20} />
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {upcomingMeetings.length > 0 ? (
          upcomingMeetings.map((m) => (
            <div key={m.id} className="group p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-indigo-100 hover:shadow-sm transition-all cursor-default">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {m.title || "Untitled Meeting"}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-slate-500 italic">
                    <Clock size={12} className="not-italic" />
                    {moment(m.date).format('hh:mm A')}
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-white border border-slate-100 text-slate-400 group-hover:text-indigo-500 group-hover:border-indigo-100 transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-300">
              <Clock size={20} />
            </div>
            <p className="text-sm font-medium text-slate-400">No sessions scheduled for tomorrow.</p>
            <p className="text-[10px] text-slate-300 mt-1 uppercase tracking-widest font-bold">Stay Updated!</p>
          </div>
        )}
      </div>

      {upcomingMeetings.length > 0 && (
          <button className="mt-6 w-full py-2.5 text-xs font-bold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl border border-transparent hover:border-indigo-100 transition-all uppercase tracking-widest">
              View Detailed Itinerary
          </button>
      )}
    </div>
  );
}
