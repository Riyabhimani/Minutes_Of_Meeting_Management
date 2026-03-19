import React from 'react'
import { prisma } from '@/lib/prisma';
import { EditMeetingTypeAction } from '@/app/actions/EditMeetingTypeAction';
import { notFound } from 'next/navigation';

export default async function EditMeetingType({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const typeId = parseInt(id);
    const meetingType = await prisma.meetingtype.findUnique({
        where: { MeetingTypeID: typeId },
    });

    if (!meetingType) {
        notFound();
    }

    const updateMeetingTypeWithId = EditMeetingTypeAction.bind(null, typeId);

    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700 min-h-[calc(100vh-100px)]">
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-premium w-full max-w-md relative overflow-hidden">
                <div className="mb-8 border-b border-white/60 dark:border-slate-800 pb-6">
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Edit Meeting Type</h2>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Classification Record #T-{typeId}</p>
                </div>
                <form action={updateMeetingTypeWithId} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Type Name</label>
                        <input name="MeetingTypeName" type="text" defaultValue={meetingType.MeetingTypeName} required className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Remarks</label>
                        <textarea name="Remarks" defaultValue={meetingType.Remarks || ''} className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all resize-none" rows={4}></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href="/meeting-type" className="flex-1 py-3.5 bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-white/60 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                            CANCEL EDIT
                        </a>
                        <button type="submit" className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest text-center">
                            UPDATE TYPE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
