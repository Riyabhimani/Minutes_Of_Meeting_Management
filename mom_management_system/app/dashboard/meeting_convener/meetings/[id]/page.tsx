import { prisma } from '@/lib/prisma';
import MeetingDetailsView from '@/app/components/MeetingDetailsView';
import { notFound } from 'next/navigation';

export default async function MeetingDetailsConvener({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const meeting = await prisma.meetings.findFirst({
        where: { MeetingID: Number(id) },
        include: { meetingtype: true }
    });

    if (!meeting) notFound();

    return (
        <MeetingDetailsView 
            meeting={meeting} 
            backLink="/dashboard/meeting_convener"
            reportLink={`/dashboard/meeting_convener/meetings/${id}/report`}
        />
    );
}
