"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditMeetingMemberAction(id: number, formData: FormData) {
    const MeetingID = parseInt(formData.get("MeetingID") as string);
    const StaffID = parseInt(formData.get("StaffID") as string);
    const IsPresent = formData.get("IsPresent") === "on";
    const Remarks = formData.get("Remarks") as string;

    await prisma.meetingmember.update({
        where: { MeetingMemberID: id },
        data: {
            MeetingID,
            StaffID,
            IsPresent,
            Remarks,
            Modified: new Date(),
        },
    });

    revalidatePath("/meeting-member");
    redirect("/meeting-member");
}
