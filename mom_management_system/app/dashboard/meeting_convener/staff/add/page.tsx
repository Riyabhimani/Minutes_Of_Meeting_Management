import React from 'react'
import { AddStaffAction } from '@/app/actions/AddStaffAction'
import Link from 'next/link'
import { getServerSession } from '@/lib/auth-server'
import { redirect } from 'next/navigation'
import { Plus } from 'lucide-react'

export default async function AddStaffConvener() {
    const user = await getServerSession();
    if (!user || user.role !== 'meeting_convener') {
        redirect('/login');
    }

    return (
        <div className="flex items-center justify-center p-4 animate-in fade-in duration-500 min-h-[calc(100vh-100px)]">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-sm w-full max-w-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <Plus size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
                        <div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Add New Personnel</h1>
                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">System Registry Enrollment</p>
                        </div>
                    </div>

                    <form action={AddStaffAction} className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Full Name</label>
                            <input 
                                name="StaffName" 
                                type="text" 
                                required 
                                placeholder="Enter full name of personnel"
                                className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600" 
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Mobile Number</label>
                                <input 
                                    name="MobileNo" 
                                    type="text" 
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600" 
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Email Address</label>
                                <input 
                                    name="EmailAddress" 
                                    type="email" 
                                    placeholder="name@example.com"
                                    className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600" 
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Remarks & Designation</label>
                            <textarea 
                                name="Remarks" 
                                placeholder="Designation, department, or special notes..."
                                className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600" 
                                rows={3}
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                            <button 
                                type="submit" 
                                className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-100 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-black/10 active:scale-[0.98]"
                            >
                                Register Personnel
                            </button>
                            <Link 
                                href="/dashboard/meeting_convener/staff" 
                                className="flex-1 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold uppercase tracking-widest text-[10px] text-center"
                            >
                                Cancel & Return
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
