"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function DeleteMeetingTypeAction(id: number) {
    // 1. Get all meetings of this type
    const relatedMeetings = await prisma.meetings.findMany({
        where: { MeetingTypeID: id },
        select: { MeetingID: true },
    });

    const meetingIds = relatedMeetings.map((m) => m.MeetingID);

    // 2. Delete all meeting members for these meetings
    await prisma.meetingmember.deleteMany({
        where: {
            MeetingID: { in: meetingIds },
        },
    });

    // 3. Delete the meetings
    await prisma.meetings.deleteMany({
        where: { MeetingTypeID: id },
    });

    // 4. Finally delete the meeting type
    await prisma.meetingtype.delete({ where: { MeetingTypeID: id } });

    revalidatePath("/meeting-type");
    redirect("/meeting-type");
}
export { DeleteMeetingTypeAction };