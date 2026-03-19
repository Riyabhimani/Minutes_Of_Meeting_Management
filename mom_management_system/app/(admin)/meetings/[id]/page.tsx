import { prisma } from '@/lib/prisma'
import Link from 'next/link';
import React from 'react'
import MeetingDetailsView from '@/app/components/MeetingDetailsView';

export default async function MeetingDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const meeting = await prisma.meetings.findFirst({
        where: { MeetingID: Number(id) },
        include: { meetingtype: true }
    })

    if (!meeting) return <div className="p-6 text-center text-slate-400 font-bold uppercase tracking-widest py-20">Meeting not found</div>;

    return (
        <MeetingDetailsView 
            meeting={meeting} 
            backLink="/meetings" 
            editLink={`/meetings/edit/${meeting.MeetingID}`}
            reportLink={`/meetings/${meeting.MeetingID}/report`}
        />
    );
}
