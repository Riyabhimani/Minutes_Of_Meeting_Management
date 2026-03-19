import React from 'react'
import { prisma } from '@/lib/prisma';
import { EditStaffAction } from '@/app/actions/EditStaffAction';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditStaff({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const staffId = parseInt(id);
    const staff = await prisma.staff.findUnique({
        where: { StaffID: staffId },
    });

    if (!staff) {
        notFound();
    }

    const updateStaffWithId = EditStaffAction.bind(null, staffId);

    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700">
            <div className="glass-card p-10 rounded-[2.5rem] shadow-premium w-full max-w-xl border border-white/60">
                <div className="mb-8 border-b border-white/60 pb-6">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Edit Personnel Dossier</h2>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Update system record #{staff.StaffID}</p>
                </div>
                <form action={updateStaffWithId} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Full Name</label>
                        <input name="StaffName" type="text" defaultValue={staff.StaffName} required className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Mobile Access</label>
                            <input name="MobileNo" type="text" defaultValue={staff.MobileNo || ''} className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Email Address</label>
                            <input name="EmailAddress" type="email" defaultValue={staff.EmailAddress || ''} className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Remarks</label>
                        <textarea name="Remarks" defaultValue={staff.Remarks || ''} className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all resize-none" rows={3}></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="/staff" className="flex-1 py-3.5 bg-white/60 text-slate-600 border border-white/60 rounded-xl hover:bg-white hover:text-slate-900 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                            CANCEL EDIT
                        </Link>
                        <button type="submit" className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest">
                            UPDATE StaffMember
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}