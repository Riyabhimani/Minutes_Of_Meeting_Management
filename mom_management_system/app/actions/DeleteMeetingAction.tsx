"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function DeleteMeetingAction(id: number) {
    // Delete related meeting members first
    await prisma.meetingmember.deleteMany({
        where: { MeetingID: id },
    });

    await prisma.meetings.delete({ where: { MeetingID: id } });
    revalidatePath("/meetings");
    redirect("/meetings");
}