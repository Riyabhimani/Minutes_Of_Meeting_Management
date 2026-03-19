import React from 'react'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import DeleteMeeting from '@/app/ui/DeleteMeeting'

import { FaPlus, FaCalendarAlt, FaFileDownload, FaClock } from 'react-icons/fa'
import SearchBar from '@/app/ui/SearchBar'

async function MeetingList({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query || "";

  const data = await prisma.meetings.findMany({
    where: {
      OR: [
        { MeetingDescription: { contains: query } },
        { CancellationReason: { contains: query } },
      ],
    },
    orderBy: { MeetingDate: 'desc' }
  })

    return (
        <div className="p-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Meeting Management</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage all scheduled meetings and their documentation.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <SearchBar placeholder="Search meetings..." />
                    <Link
                        href="/meetings/add"
                        className="premium-gradient text-white px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-widest font-black hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-2 shrink-0 group"
                    >
                        <FaPlus size={12} className="group-hover:rotate-90 transition-transform" />+ ADD MEETING
                    </Link>
                </div>
            </div>

            {/* Meeting Registry Card */}
            <div className="glass-card border border-white/60 rounded-[2rem] shadow-premium overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/40 border-b border-white/60">
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Reference</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Session Context</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Documentation</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/40 bg-white/30 backdrop-blur-md">
                            {data.map((m: any) => (
                                <tr key={m.MeetingID} className="hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-md transition-all group">
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-lg border border-indigo-100 shadow-sm uppercase tracking-widest">#M-{m.MeetingID}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-white/60 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform group-hover:text-indigo-500">
                                                <FaCalendarAlt size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{m.MeetingDescription || "General Strategic Session"}</div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                                                    <FaClock size={10} className="text-indigo-400" />
                                                    {new Date(m.MeetingDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {m.DocumentPath ? (
                                            <a
                                                href={m.DocumentPath}
                                                download
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 border border-white/60 text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all text-[10px] font-black uppercase tracking-widest"
                                            >
                                                <FaFileDownload size={14} />
                                                Download
                                            </a>
                                        ) : (
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-100/50">No artifacts</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/meetings/${m.MeetingID}`} className="px-4 py-2 bg-white/60 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/60 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">View</Link>
                                            <Link href={`/meetings/edit/${m.MeetingID}`} className="px-4 py-2 bg-white/60 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-indigo-100/50 hover:bg-indigo-50 hover:shadow-sm transition-all">Edit</Link>
                                            <DeleteMeeting id={m.MeetingID} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {data.length === 0 && (
                        <div className="py-24 text-center">
                            <div className="w-20 h-20 bg-white/50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300 ring-1 ring-white shadow-inner">
                                <FaCalendarAlt size={32} />
                            </div>
                            <h3 className="text-xl font-black text-slate-400 tracking-tight">No Meetings Scheduled</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Initialize scheduler to begin</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default MeetingList
