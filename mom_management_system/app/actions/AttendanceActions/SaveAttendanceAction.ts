"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function SaveAttendanceAction(formData: FormData) {
  const meetingId = Number(formData.get("MeetingID"));
  
  if (!meetingId) {
    throw new Error("Meeting ID is required");
  }

  // Get all entries from formData
  const entries = Array.from(formData.entries());
  
  // Find all staff IDs that were marked as present
  const presentStaffIds = entries
    .filter(([key]) => key.startsWith("staff_"))
    .map(([key]) => Number(key.replace("staff_", "")));

  // We need to update ALL members for this meeting
  // Those in presentStaffIds should be IsPresent: true
  // Those NOT in presentStaffIds should be IsPresent: false
  
  const members = await prisma.meetingmember.findMany({
    where: { MeetingID: meetingId }
  });

  await prisma.$transaction(
    members.map((member) => 
      prisma.meetingmember.update({
        where: { MeetingMemberID: member.MeetingMemberID },
        data: {
          IsPresent: presentStaffIds.includes(member.StaffID),
          Modified: new Date()
        }
      })
    )
  );

  revalidatePath("/attendance");
  revalidatePath(`/attendance/${meetingId}`);
  
  redirect("/attendance");
}
