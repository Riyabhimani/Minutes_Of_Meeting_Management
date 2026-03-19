import React from 'react'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import DeleteStaff from '@/app/ui/DeleteStaff'
import { User, Plus, Search, Mail, Phone, ChevronRight } from 'lucide-react'
import SearchBar from '@/app/ui/SearchBar'
import { getServerSession } from '@/lib/auth-server'
import { redirect } from 'next/navigation'

export default async function ConvenerStaffList({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

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
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Staff Registry</h1>
                    <p className="text-sm text-slate-500 mt-1">Directory of all authorized personnel and system users.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <SearchBar placeholder="Search registry..." />
                    <Link
                        href="/dashboard/meeting_convener/staff/add"
                        className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 transition-all shadow-sm shrink-0"
                    >
                        <Plus size={14} /> Add Personnel
                    </Link>
                </div>
            </div>

            {/* Directory Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Ref ID</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Personnel Identity</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contact Channels</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Registry Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {data.map((s) => (
                                <tr key={s.StaffID} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">#S-{s.StaffID}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                                <User size={14} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-slate-900 dark:text-white">{s.StaffName}</div>
                                                <div className="text-xs text-slate-500">{s.Remarks || 'General Personnel'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                                                <Mail size={12} className="text-slate-400" />
                                                {s.EmailAddress || '-'}
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                                <Phone size={10} />
                                                {s.MobileNo || '-'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/dashboard/meeting_convener/staff/${s.StaffID}`} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition">View</Link>
                                            <Link href={`/dashboard/meeting_convener/staff/edit/${s.StaffID}`} className="px-3 py-1.5 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-lg border border-blue-100 dark:border-blue-900/40 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">Edit</Link>
                                            <DeleteStaff id={s.StaffID} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {data.length === 0 && (
                        <div className="py-24 text-center">
                            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 text-slate-300 dark:text-slate-700 ring-1 ring-slate-100 dark:ring-slate-800">
                                <Search size={24} />
                            </div>
                            <h3 className="text-lg font-black text-slate-300 dark:text-slate-700 italic uppercase">No Personnel Found</h3>
                            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-2">Registry is currently empty</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
