"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditMeetingTypeAction(id: number, formData: FormData) {
  const MeetingTypeName = formData.get("MeetingTypeName") as string;
  const Remarks = formData.get("Remarks") as string;

  await prisma.meetingtype.update({
    where: { MeetingTypeID: id },
    data: {
      MeetingTypeName,
      Remarks,
      Modified: new Date(),
    },
  });

  revalidatePath("/meeting-type");
  redirect("/meeting-type");
}