import React from 'react'
import { prisma } from '@/lib/prisma'
import { AddMeetingAction } from '@/app/actions/AddMeetingAction';
import AddMeetingForm from '@/app/components/AddMeetingForm';


export default async function AddMeeting() {
    const meetingTypes = await prisma.meetingtype.findMany();

    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700">
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 shadow-premium w-full max-w-2xl">
                <div className="mb-8 border-b border-white/60 pb-6">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Schedule New Meeting</h2>
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Add to system registry</p>
                </div>
                
                <AddMeetingForm 
                    meetingTypes={meetingTypes} 
                    backLink="/meetings" 
                />
            </div>
        </div>
    )
}
