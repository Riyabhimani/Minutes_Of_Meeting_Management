import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function StaffDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const staff = await prisma.staff.findFirst({
        where: { StaffID: Number(id) }
    })

    if (!staff) return <div className="p-6">Staff member not found</div>;

    return (
        <div className="flex justify-center items-center p-6 animate-in fade-in duration-700">
            <div className="glass-card rounded-[2.5rem] shadow-premium p-10 max-w-2xl w-full border border-white/60">
                <div className="flex justify-between items-center mb-8 border-b border-white/60 pb-6">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Personnel Dossier</h1>
                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Detailed System Record</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Full Name</label>
                        <p className="text-xl text-slate-900 font-black tracking-tight">{staff.StaffName}</p>
                    </div>
                    <div className="bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Registry ID</label>
                        <p className="text-lg text-indigo-600 font-black">#{staff.StaffID}</p>
                    </div>
                   
                    <div className="bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Mobile Access</label>
                        <p className="text-lg text-slate-900 font-semibold">{staff.MobileNo || 'N/A'}</p>
                    </div>
                    <div className="bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Address</label>
                        <p className="text-lg text-slate-900 font-semibold break-all">{staff.EmailAddress || 'N/A'}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Sector Alignment / Remarks</label>
                    <p className="text-slate-800 font-medium bg-white/60 border border-white/60 shadow-sm p-5 rounded-2xl mt-1 min-h-[80px]">
                        {staff.Remarks || 'No operational remarks provided for this personnel in the registry.'}
                    </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Link href="/staff" className="flex-1 py-3.5 bg-white/60 text-slate-600 border border-white/60 rounded-xl hover:bg-white hover:text-slate-900 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                        RETURN TO REGISTRY
                    </Link>
                    <Link href={`/staff/edit/${staff.StaffID}`} className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest text-center">
                        EDIT StaffMember
                    </Link>
                </div>
            </div>
        </div>
    )
}