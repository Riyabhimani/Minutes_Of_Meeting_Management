"use client";

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/navigation';

const localizer = momentLocalizer(moment);

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  isCompleted: boolean;
  meetingType?: string;
}

interface AdminCalendarProps {
  meetings: any[];
}

export default function AdminCalendar({ meetings = [] }: AdminCalendarProps) {
  const router = useRouter();
  const events: CalendarEvent[] = (meetings || []).map((m) => {
    const rawDate = m.date || m.MeetingDate;
    const mDate = moment(rawDate);
    const start = mDate.isValid() ? mDate.toDate() : new Date();
    
    return {
      id: m.id || m.MeetingID || Math.random(),
      title: m.title || m.MeetingDescription || "Untitled Meeting",
      start,
      end: new Date(start.getTime() + 60 * 60 * 1000),
      allDay: true, 
      isCompleted: !!(m.IsCancelled || m.isCancelled),
      meetingType: m.meetingtype?.MeetingTypeName || 'Regular Meeting'
    };
  });

  // ADD HARDCODED TEST EVENT FOR MARCH 12
  events.push({
    id: 9999,
    title: "TEST: Placement Meeting (FIX)",
    start: new Date(2026, 2, 12), // March 12, 2026 (0-indexed month)
    end: new Date(2026, 2, 12, 1),
    allDay: true,
    isCompleted: false
  });

  const eventStyleGetter = (event: CalendarEvent) => {
    let backgroundColor = '#6366f1'; // Premium Indigo
    const now = new Date();
    
    if (event.isCompleted) {
      backgroundColor = '#10b981'; // Premium Emerald 
    } else if (event.start < now) {
      backgroundColor = '#f59e0b'; // Premium Amber
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '8px',
        color: 'white',
        border: 'none',
        display: 'block',
        fontSize: '10px',
        fontWeight: '700',
        padding: '4px 8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }
    };
  };

  const handleSelectSlot = (slotInfo: { start: Date }) => {
    const formattedDate = moment(slotInfo.start).format('YYYY-MM-DD');
    router.push(`/meetings/add?date=${formattedDate}`);
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    router.push(`/meetings/edit/${event.id}`);
  };

  // Custom Event component with tooltip
  const CustomEvent = ({ event }: { event: CalendarEvent }) => (
    <div className="relative group w-full h-full cursor-pointer flex items-center">
      <span className="truncate">{event.title}</span>
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs rounded-xl p-3 z-50 left-0 top-full mt-2 w-max max-w-[200px] shadow-2xl pointer-events-none before:absolute before:-top-1 before:left-4 before:w-2 before:h-2 before:bg-slate-900 before:rotate-45">
        <p className="font-bold mb-1 line-clamp-2">{event.title}</p>
        <p className="text-slate-300">{moment(event.start).format('MMM Do, YYYY')}</p>
        <p className="text-slate-300">{event.meetingType}</p>
        <p className="text-indigo-300 mt-1 capitalize text-[10px] font-bold tracking-wider">{event.isCompleted ? 'Completed' : 'Upcoming/Pending'}</p>
        <p className="border-t border-slate-700 mt-2 pt-2 text-[10px] text-slate-400">Click to edit meeting</p>
      </div>
    </div>
  );


  return (
    <div className="bg-transparent p-2 h-[700px] overflow-hidden flex flex-col gap-6">
      <div className="flex items-center justify-between px-4">
        <div>
          <h3 className="font-black text-slate-800 text-xl tracking-tight">
            Strategic Roadmap
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Calendar Synchronization</p>
        </div>
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.15em]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
            <span className="text-slate-500">Upcoming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-slate-500">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="text-slate-500">Pending</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/40 rounded-[2rem] p-6 ring-1 ring-slate-100 shadow-inner overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          style={{ height: '100%', fontVariantNumeric: 'tabular-nums' }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day']}
          defaultView="month"
          selectable={true}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          components={{
            event: CustomEvent
          }}
          popup
        />
      </div>
    </div>
  );
}
