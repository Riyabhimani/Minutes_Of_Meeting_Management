import React from 'react'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import DeleteStaff from '@/app/ui/DeleteStaff'

import { FaPlus, FaUser, FaUserTie } from 'react-icons/fa'
import SearchBar from '@/app/ui/SearchBar'

export default async function StaffList({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query || "";

    const data = await prisma.staff.findMany({
        where: {
            OR: [
                { StaffName: { contains: query } },
                { EmailAddress: { contains: query } },
                { Remarks: { contains: query } },
            ],
        },
    })

    return (
        <div className="p-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Staff Management</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage all authorized staff members and their system access.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <SearchBar placeholder="Search staff by name or email..." />
                    <Link
                        href="/staff/add"
                        className="premium-gradient text-white px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-widest font-black hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all shadow-md flex items-center gap-2 shrink-0 group"
                    >
                        <FaPlus size={12} className="group-hover:rotate-90 transition-transform" />+ ADD STAFF
                    </Link>
                </div>
            </div>

            {/* Directory Card */}
            <div className="glass-card border border-white/60 rounded-[2rem] shadow-premium overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/40 border-b border-white/60">
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Reference</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Identity</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">Contact</th>
                                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/40 bg-white/30 backdrop-blur-md">
                            {data.map((s: any) => (
                                <tr key={s.StaffID} className="hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-md transition-all group">
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-lg border border-indigo-100 shadow-sm uppercase tracking-widest">ID: {s.StaffID}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-white/60 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform group-hover:text-indigo-500">
                                                <FaUser size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{s.StaffName}</div>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{s.Remarks || 'No designated role'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700 font-medium">{s.EmailAddress || '-'}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{s.MobileNo || '-'}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/staff/${s.StaffID}`} className="px-4 py-2 bg-white/60 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/60 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">View</Link>
                                            <Link href={`/staff/edit/${s.StaffID}`} className="px-4 py-2 bg-white/60 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-indigo-100/50 hover:bg-indigo-50 hover:shadow-sm transition-all">Edit</Link>
                                            <DeleteStaff id={s.StaffID} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}