import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'

export default async function MeetingMemberDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const member = await prisma.meetingmember.findUnique({
        where: { MeetingMemberID: Number(id) }
    })

    if (!member) return <div className="p-6 text-center">Record not found</div>;

    const meeting = await prisma.meetings.findUnique({ where: { MeetingID: member.MeetingID } });
    const staff = await prisma.staff.findUnique({ where: { StaffID: member.StaffID } });

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Attendance Record</h1>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase ${member.IsPresent ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {member.IsPresent ? 'Present' : 'Absent'}
                    </span>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Staff Member</label>
                        <p className="text-lg text-gray-900 font-medium">{staff?.StaffName || 'Unknown Staff'}</p>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Meeting</label>
                        <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                            <p className="text-gray-900 font-medium">{meeting?.MeetingDescription || 'Untitled Meeting'}</p>
                            <p className="text-sm text-gray-500">{meeting ? new Date(meeting.MeetingDate).toLocaleDateString() : 'Unknown Date'}</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Remarks</label>
                        <p className="text-gray-700 mt-1 whitespace-pre-wrap">{member.Remarks || 'No remarks provided.'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                        <div>
                            <p>Created: {member.Created ? new Date(member.Created).toLocaleString() : 'N/A'}</p>
                        </div>
                        <div>
                            <p>Modified: {member.Modified ? new Date(member.Modified).toLocaleString() : 'N/A'}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Link href={`/meeting-member/edit/${member.MeetingMemberID}`} className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-slate-900 transition font-bold text-center flex-1">
                        Edit Record
                    </Link>
                    <Link href="/meeting-member" className="px-6 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition font-bold text-center flex-1">
                        Back to List
                    </Link>
                </div>
            </div>
        </div>
    )
}
