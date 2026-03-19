"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function DeleteMeetingMemberAction(id: number) {
    await prisma.meetingmember.delete({
        where: { MeetingMemberID: id },
    });
    revalidatePath("/meeting-member");
}
