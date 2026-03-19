"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AddMeetingMemberAction(formData: FormData) {
    const MeetingID = parseInt(formData.get("MeetingID") as string);
    const StaffID = parseInt(formData.get("StaffID") as string);
    const IsPresent = formData.get("IsPresent") === "on";
    const Remarks = formData.get("Remarks") as string;

    await prisma.meetingmember.create({
        data: {
            MeetingID,
            StaffID,
            IsPresent,
            Remarks,
            Created: new Date(),
            Modified: new Date(),
        },
    });

    revalidatePath("/meeting-member");
    redirect("/meeting-member");
}
