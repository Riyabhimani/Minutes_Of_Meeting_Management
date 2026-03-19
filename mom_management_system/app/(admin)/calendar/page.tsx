'use client';

import React, { useEffect, useState } from 'react';
import AdminCalendar from '@/app/ui/AdminCalendar';
import { Loader2, Calendar as CalendarIcon } from 'lucide-react';

export default function CalendarPage() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        const res = await fetch("http://localhost:3000/dashboard/all-meetings");
        if (res.ok) {
          const data = await res.json();
          setMeetings(data);
        }
      } catch (error) {
        console.error("Failed to fetch meetings for calendar:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeetings();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6 pb-20 px-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tighter">Strategic Roadmap</h1>
          <p className="text-slate-500 font-medium mt-1 uppercase text-xs tracking-widest font-bold">Comprehensive Session Timeline</p>
        </div>
        <div className="p-4 bg-white/50 rounded-3xl border border-slate-100 flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-xl">
             <CalendarIcon className="w-5 h-5 text-indigo-600" />
          </div>
          <span className="text-xs font-black text-slate-600 uppercase tracking-wider">{meetings.length} Total Sessions</span>
        </div>
      </div>

      <div className="glass-card p-2 rounded-[2.5rem] animate-fade-in-up">
        <AdminCalendar meetings={meetings} />
      </div>
    </div>
  );
}
