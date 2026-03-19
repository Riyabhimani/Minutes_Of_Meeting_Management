import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function MeetingTypeDetails({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const type = await prisma.meetingtype.findFirst({
        where: { MeetingTypeID: Number(id) }
    })

    if (!type) {
        return <div className="p-6">Meeting Type not found</div>;
    }

    return (
        <div className="flex justify-center items-center p-6 animate-in fade-in duration-700 min-h-[calc(100vh-100px)]">
            <div className="glass-card rounded-[2.5rem] shadow-premium p-10 max-w-lg w-full border border-white/60 dark:border-slate-800 relative overflow-hidden">
                <div className="mb-8 border-b border-white/60 dark:border-slate-800 pb-6">
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Meeting Type Details</h1>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Classification Record #T-{type.MeetingTypeID}</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Type Name</label>
                        <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{type.MeetingTypeName}</p>
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">Remarks</label>
                        <div className="bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-700 shadow-sm p-5 rounded-2xl min-h-[80px]">
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{type.Remarks || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/60 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                    <Link href="/meeting-type" className="flex-1 py-3.5 bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-white/60 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                        BACK TO LIST
                    </Link>
                    <Link href={`/meeting-type/edit/${id}`} className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest text-center">
                        EDIT TYPE
                    </Link>
                </div>
            </div>
        </div>
    )
}
