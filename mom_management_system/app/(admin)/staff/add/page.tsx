import React from 'react'
import { AddStaffAction } from '@/app/actions/AddStaffAction'

export default function AddStaff() {
    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700">
            <div className="glass-card p-10 rounded-[2.5rem] shadow-premium w-full max-w-xl border border-white/60">
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Add Personnel</h2>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Register new system user</p>
                </div>
                <form action={AddStaffAction} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Full Name</label>
                        <input name="StaffName" type="text" required placeholder="Full Name" className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Mobile Access</label>
                            <input name="MobileNo" type="text" placeholder="+1..." className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Email Address</label>
                            <input name="EmailAddress" type="email" placeholder="name@domain.com" className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 pl-1">Remarks</label>
                        <textarea name="Remarks" placeholder="Operational remarks..." className="w-full px-5 py-3.5 bg-white/60 border border-white/60 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/40 shadow-sm transition-all resize-none" rows={3}></textarea>
                    </div>

                    <button type="submit" className="w-full premium-gradient text-white py-4 rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all text-xs font-black uppercase tracking-widest mt-4">
                        REGISTER PERSONNEL
                    </button>
                    <div className="mt-4 text-center">
                         <a href="/staff" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors">Return to Registry</a>
                    </div>
                </form>
            </div>
        </div>
    )
}