"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { getServerSession } from "@/lib/auth-server";

export async function AddMeetingAction(formData: FormData) {
  const MeetingDate = formData.get("MeetingDate") as string;

  const MeetingTypeID = Number(formData.get("MeetingTypeID"));
  const MeetingDescription = formData.get("MeetingDescription") as string | null;

  const file = formData.get("DocumentPath") as File | null;

  let DocumentPath: string | null = null;
  console.log(MeetingDate, MeetingTypeID);
  if (file && file.size > 0) {
    // ... (file handling logic stays same)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), "public/uploads/meeting_docs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, file.name);
    fs.writeFileSync(filePath, buffer);
    DocumentPath = `/uploads/meeting_docs/${file.name}`;
  }

  await prisma.meetings.create({
    data: {
      MeetingDate: new Date(MeetingDate),
      MeetingTypeID,
      MeetingDescription,
      DocumentPath,
      IsCancelled: false,
    },
  });
  const session = await getServerSession();
  
  revalidatePath("/meetings");
  revalidatePath("/dashboard/meeting_convener");

  if (session?.role === "meeting_convener") {
    redirect("/dashboard/meeting_convener");
  } else {
    redirect("/meetings");
  }
}