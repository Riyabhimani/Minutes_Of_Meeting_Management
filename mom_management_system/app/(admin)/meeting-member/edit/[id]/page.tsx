import React from 'react'
import { prisma } from '@/lib/prisma';
import { EditMeetingMemberAction } from '@/app/actions/EditMeetingMemberAction';
import { notFound } from 'next/navigation';
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'

export default async function EditMeetingMember({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const memberId = parseInt(id);

    const member = await prisma.meetingmember.findUnique({
        where: { MeetingMemberID: memberId },
    });

    if (!member) {
        notFound();
    }

    const meetings = await prisma.meetings.findMany({ orderBy: { MeetingDate: 'desc' } });
    const staff = await prisma.staff.findMany({ orderBy: { StaffName: 'asc' } });
    const updateMemberWithId = EditMeetingMemberAction.bind(null, memberId);

    return (
        <div className="max-w-2xl mx-auto w-full space-y-6 pb-20 px-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                   <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Edit Attendance</h1>
                   <p className="text-slate-500 font-medium mt-1">Modify attendance record for #{memberId}.</p>
                </div>
                <Link href="/meeting-member" className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all group">
                    <ArrowLeft size={20} className="text-slate-400 group-hover:text-slate-900" />
                </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <form action={updateMemberWithId} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Selected Meeting</label>
                        <select name="MeetingID" defaultValue={member.MeetingID} required className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:bg-white transition-all font-semibold text-slate-700 appearance-none cursor-pointer">
                            {meetings.map(m => (
                                <option key={m.MeetingID} value={m.MeetingID}>
                                    {new Date(m.MeetingDate).toLocaleDateString()} - {m.MeetingDescription || `Meeting #${m.MeetingID}`}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Selected Staff</label>
                        <select name="StaffID" defaultValue={member.StaffID} required className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:bg-white transition-all font-semibold text-slate-700 appearance-none cursor-pointer">
                            {staff.map(s => (
                                <option key={s.StaffID} value={s.StaffID}>{s.StaffName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-200/60 flex items-center justify-between">
                        <div>
                           <h3 className="font-bold text-slate-700 text-xs uppercase tracking-widest">Presence Verified</h3>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Toggle for current status</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input name="IsPresent" type="checkbox" defaultChecked={member.IsPresent ?? false} className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                        </label>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Staff Remarks</label>
                        <textarea 
                            name="Remarks" 
                            defaultValue={member.Remarks || ''} 
                            className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:bg-white transition-all font-semibold text-slate-700" 
                            rows={3}
                            placeholder="Optional notes or updates..."
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl hover:bg-slate-900 transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm">
                            <Save size={18} />
                            <span>Update Assignment</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
