import React from 'react'
import { prisma } from '@/lib/prisma'
import EditMeetingAction from '@/app/actions/EditMeetingAction'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { getServerSession } from '@/lib/auth-server'
import { Calendar, Clock, Edit } from 'lucide-react'

export default async function ConvenerEditMeeting({ params }: { params: Promise<{ id: string }> }) {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

    const { id } = await params;
    const meetingId = parseInt(id);

    const meeting = await prisma.meetings.findUnique({
        where: { MeetingID: meetingId },
    });

    if (!meeting) {
        notFound();
    }

    const meetingTypes = await prisma.meetingtype.findMany();
    const meetingDate = new Date(meeting.MeetingDate).toISOString().split('T')[0];
   
    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700 min-h-[calc(100vh-100px)]">
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-premium w-full max-w-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <Edit size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-white/60 dark:border-slate-800 pb-6">
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Edit Meeting</h1>
                            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Registry Update #M-{meeting.MeetingID}</p>
                        </div>
                    </div>

                    <form action={EditMeetingAction} className="space-y-6">
                        <input type="hidden" name="MeetingID" value={meetingId} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 pl-1">Meeting Date</label>
                                <input 
                                    name="MeetingDate" 
                                    type="date" 
                                    defaultValue={meetingDate} 
                                    required 
                                    className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" 
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 pl-1">Meeting Type</label>
                                <select 
                                    name="MeetingTypeID" 
                                    defaultValue={meeting.MeetingTypeID} 
                                    required 
                                    className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all appearance-none cursor-pointer"
                                >
                                    <option value="">Select Type</option>
                                    {meetingTypes.map(t => (
                                        <option key={t.MeetingTypeID} value={t.MeetingTypeID}>{t.MeetingTypeName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 pl-1">Meeting Description</label>
                            <textarea 
                                name="MeetingDescription" 
                                defaultValue={meeting.MeetingDescription ?? ""} 
                                className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all resize-none" 
                                rows={3}
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 pl-1">Attached Document</label>
                            <div className="relative group">
                                <input 
                                    name="DocumentPath" 
                                    type="file" 
                                    className="w-full px-5 py-3 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all cursor-pointer" 
                                />
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 mt-2 ml-1">Leave empty to keep existing artifact.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link 
                                href="/dashboard/meeting_convener/meetings" 
                                className="flex-1 py-3.5 bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-white/60 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm"
                            >
                                CANCEL & RETURN
                            </Link>
                            <button 
                                type="submit" 
                                className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest text-center"
                            >
                                UPDATE REGISTRY
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
