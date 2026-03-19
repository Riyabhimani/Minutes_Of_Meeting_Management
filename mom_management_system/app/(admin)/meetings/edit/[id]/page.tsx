import React from 'react'
import { prisma } from '@/lib/prisma'
import EditMeetingAction from '@/app/actions/EditMeetingAction'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function EditMeeting({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const meetingId = parseInt(id);

    const meeting = await prisma.meetings.findUnique({
        where: { MeetingID: meetingId },
    });

    if (!meeting) {
        notFound();
    }

    const meetingTypes = await prisma.meetingtype.findMany();

    // Format date and times for input defaults
    const meetingDate = new Date(meeting.MeetingDate).toISOString().split('T')[0];
   
    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700 min-h-[calc(100vh-100px)]">
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 shadow-premium w-full max-w-2xl">
                <div className="mb-8 border-b border-white/60 pb-6">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Edit Meeting Details</h2>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Registry Update #M-{meetingId}</p>
                </div>
                <form action={EditMeetingAction} className="space-y-6">
                    <input type="hidden" name="MeetingID" value={meetingId} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Meeting Date</label>
                            <input name="MeetingDate" type="date" defaultValue={meetingDate} required className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Meeting Type</label>
                            <select name="MeetingTypeID" defaultValue={meeting.MeetingTypeID} required className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all appearance-none cursor-pointer">
                                <option value="">Select Type</option>
                                {meetingTypes.map(t => (
                                    <option key={t.MeetingTypeID} value={t.MeetingTypeID}>{t.MeetingTypeName}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Meeting Description</label>
                        <textarea name="MeetingDescription" defaultValue={meeting.MeetingDescription ?? ""} className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all resize-none" rows={3} />
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Attached Document (Optional)</label>
                        <input name="DocumentPath" type="file" className="w-full px-5 py-3 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all cursor-pointer" />
                        <p className="text-[10px] font-bold text-slate-400 mt-2 ml-1">Leave empty to keep existing artifact.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="/meetings" className="flex-1 py-3.5 bg-white/60 text-slate-600 border border-white/60 rounded-xl hover:bg-white hover:text-slate-900 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                            CANCEL EDIT
                        </Link>
                        <button type="submit" className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest">
                            UPDATE REGISTRY
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
