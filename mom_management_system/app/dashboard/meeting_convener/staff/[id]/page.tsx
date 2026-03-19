import React from 'react'
import { prisma } from '@/lib/prisma';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { getServerSession } from '@/lib/auth-server';
import { User, Mail, Phone, Calendar, Clock, Edit } from 'lucide-react';

export default async function ViewStaffConvener({ params }: { params: Promise<{ id: string }> }) {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

    const { id } = await params;
    const staffId = parseInt(id);
    const staff = await prisma.staff.findUnique({
        where: { StaffID: staffId },
    });

    if (!staff) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center p-4 animate-in fade-in duration-500 min-h-[calc(100vh-100px)]">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-sm w-full max-w-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <User size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Personnel Profile</h1>
                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Registry #S-{staff.StaffID}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Staff Name</label>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-slate-900 dark:text-white">{staff.StaffName}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight flex items-center gap-1.5 mt-0.5">
                                        <Clock size={10} /> Registered {new Date(staff.Created || new Date()).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Email Address</label>
                                <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                                    <Mail size={14} className="text-slate-400" />
                                    {staff.EmailAddress || "Not Provided"}
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Mobile Number</label>
                                <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                                    <Phone size={14} className="text-slate-400" />
                                    {staff.MobileNo || "Not Provided"}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Remarks & Designation</label>
                            <p className="text-base font-bold text-slate-900 dark:text-white leading-relaxed">{staff.Remarks || 'General Personnel Category'}</p>
                        </div>

                        <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
                            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Registry Metadata</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <MetadataTag label="System ID" value={`S-${staff.StaffID}`} />
                                <MetadataTag label="Last Modified" value={new Date(staff.Modified || new Date()).toLocaleDateString()} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                        <Link 
                            href={`/dashboard/meeting_convener/staff/edit/${staffId}`}
                            className="flex-1 bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-100 transition-all font-bold uppercase tracking-widest text-[9px] text-center shadow-lg shadow-black/5 flex items-center justify-center gap-2"
                        >
                            <Edit size={14} /> Edit Personnel
                        </Link>
                        <Link 
                            href="/dashboard/meeting_convener/staff" 
                            className="flex-1 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold uppercase tracking-widest text-[9px] text-center"
                        >
                            Back to Registry
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MetadataTag({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-100/50 dark:border-slate-800/50">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{label}</span>
            <span className="text-[10px] font-black text-slate-900 dark:text-white tracking-wider font-mono">{value}</span>
        </div>
    );
}
