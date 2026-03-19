import React from 'react'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import DeleteMeeting from '@/app/ui/DeleteMeeting'
import SearchBar from '@/app/ui/SearchBar'
import { Calendar, Clock, FileDown, Eye, Edit3, Search, Plus } from 'lucide-react'
import { getServerSession } from '@/lib/auth-server';
import { redirect } from 'next/navigation';

export default async function ConvenerMeetingList({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

    const query = (await searchParams).query || "";

    const data = await prisma.meetings.findMany({
        where: {
            OR: [
                { MeetingDescription: { contains: query } },
                { CancellationReason: { contains: query } },
            ],
        },
        orderBy: { MeetingDate: 'desc' },
        include: { meetingtype: true }
    })

    return (
        <div className="p-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Meeting Management</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage all scheduled meetings and their documentation.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <SearchBar placeholder="Search meetings..." />
                    <Link
                        href="/dashboard/meeting_convener/meetings/add"
                        className="premium-gradient text-white px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-widest font-black hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-2 shrink-0 group"
                    >
                        <Plus size={14} className="group-hover:rotate-90 transition-transform" /> PLAN MEETING
                    </Link>
                </div>
            </div>

            {/* Meeting Registry Card */}
            <div className="glass-card shadow-premium border border-white/60 dark:border-slate-700/50 rounded-[2rem] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/40 dark:bg-slate-800/40 border-b border-white/60 dark:border-slate-700/50">
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Reference</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Session Context</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Category</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Documentation</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/40 dark:divide-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md">
                            {data.map((m) => (
                                <tr key={m.MeetingID} className="hover:bg-white/60 dark:hover:bg-slate-800/60 hover:-translate-y-0.5 hover:shadow-md transition-all group">
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-900/40 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-sm uppercase tracking-widest">#M-{m.MeetingID}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-white/60 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform group-hover:text-indigo-500">
                                                <Calendar size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{m.MeetingDescription || "General Strategic Session"}</div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                                                    <Clock size={10} className="text-indigo-400" />
                                                    {new Date(m.MeetingDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-[10px] font-black text-slate-500 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 px-2 py-1 rounded-md inline-block uppercase tracking-widest shadow-sm">
                                            {m.meetingtype?.MeetingTypeName || "General"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {m.DocumentPath ? (
                                            <a
                                                href={m.DocumentPath}
                                                download={m.DocumentPath.split('/').pop()}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 dark:bg-slate-800 border border-white/60 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-sm transition-all text-[10px] font-black uppercase tracking-widest"
                                            >
                                                <FileDown size={14} />
                                                Download
                                            </a>
                                        ) : (
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50 dark:bg-slate-800/30 px-3 py-1.5 rounded-lg border border-slate-100/50 dark:border-slate-800/50">No artifacts</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/dashboard/meeting_convener/meetings/${m.MeetingID}`} className="px-4 py-2 bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/60 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:text-indigo-600 hover:shadow-sm transition-all">View</Link>
                                            <Link href={`/dashboard/meeting_convener/meetings/edit/${m.MeetingID}`} className="px-4 py-2 bg-white/60 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-indigo-100/50 dark:border-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:shadow-sm transition-all">Edit</Link>
                                            <DeleteMeeting id={m.MeetingID} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {data.length === 0 && (
                        <div className="py-24 text-center">
                            <div className="w-20 h-20 bg-white/50 dark:bg-slate-800/50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300 dark:text-slate-600 ring-1 ring-white dark:ring-slate-700 shadow-inner">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-xl font-black text-slate-400 dark:text-slate-500 tracking-tight">No Meetings Scheduled</h3>
                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-2">Registry is currently empty</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
