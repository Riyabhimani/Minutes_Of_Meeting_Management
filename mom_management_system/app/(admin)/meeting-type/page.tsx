import React from 'react'
import { prisma } from '@/lib/prisma'

import Link from 'next/link'
import DeleteMeetingType from '@/app/ui/DeleteMeetingType'
import { FaPlus, FaLayerGroup } from 'react-icons/fa'
import SearchBar from '@/app/ui/SearchBar'

async function MeetingTypeList({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query || "";

    const data = await prisma.meetingtype.findMany({
        where: {
            OR: [
                { MeetingTypeName: { contains: query } },
                { Remarks: { contains: query } },
            ],
        },
    })

    return (
        <div className="p-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Meeting Classifications</h1>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Manage meeting categories and their procedural standards.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <SearchBar placeholder="Search classifications..." />
                    <Link
                        href="/meeting-type/add"
                        className="flex items-center gap-2 premium-gradient text-white px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all shadow-sm shrink-0"
                    >
                        <FaPlus size={12} />+ Add Meeting Type
                    </Link>
                </div>
            </div>

            {/* Classification Registry Card */}
            <div className="glass-card border border-white/60 dark:border-slate-800 rounded-3xl shadow-premium overflow-hidden relative">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/40 dark:bg-slate-800/40 border-b border-white/60 dark:border-slate-800 backdrop-blur-md">
                                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Reference</th>
                                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Classification</th>
                                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Procedural Context</th>
                                <th className="px-6 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/40 dark:divide-slate-800/50">
                            {data.map((m: any) => (
                                <tr key={m.MeetingTypeID} className="bg-white/20 dark:bg-slate-900/20 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors group backdrop-blur-sm">
                                    <td className="px-6 py-5">
                                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-500/20 shadow-sm">#T-{m.MeetingTypeID}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                                                <FaLayerGroup size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{m.MeetingTypeName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">
                                            {m.Remarks || 'Standard organizational procedural structure.'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/meeting-type/${m.MeetingTypeID}`} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all hover:-translate-y-0.5">View</Link>
                                            <Link href={`/meeting-type/edit/${m.MeetingTypeID}`} className="px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-indigo-100 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 shadow-sm transition-all hover:-translate-y-0.5">Edit</Link>
                                            <DeleteMeetingType id={m.MeetingTypeID} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {data.length === 0 && (
                    <div className="py-24 text-center bg-white/20 dark:bg-slate-900/20 backdrop-blur-md">
                        <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-indigo-200 dark:text-indigo-900/50 shadow-inner border border-white/60 dark:border-slate-700">
                            <FaLayerGroup size={32} />
                        </div>
                        <h3 className="text-xl font-black text-slate-400 dark:text-slate-500 tracking-tight">No Classifications Found</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Initialize system registry to begin</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default MeetingTypeList
