"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";
import fs from "fs";
import path from "path";

export default async function EditMeetingAction(formData: FormData) {
  const id = Number(formData.get("MeetingID"));
  const MeetingDate = formData.get("MeetingDate") as string;
  
  const MeetingTypeID = Number(formData.get("MeetingTypeID"));
  const MeetingDescription = formData.get("MeetingDescription") as string | null;
  
  const file = formData.get("DocumentPath") as File | null;

  let DocumentPath: string | undefined;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads/meeting_docs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uniqueName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, uniqueName);

    fs.writeFileSync(filePath, buffer);
    DocumentPath = `/uploads/meeting_docs/${uniqueName}`;
  }

  await prisma.meetings.update({
    where: { MeetingID: id },
    data: {
      MeetingDate: new Date(MeetingDate),
      
      MeetingTypeID,
      MeetingDescription: MeetingDescription ?? "",
    
      ...(DocumentPath && { DocumentPath }),
    },
  });

  const user = await getServerSession();
  
  revalidatePath("/meetings");
  revalidatePath("/dashboard/meeting_convener");
  revalidatePath("/dashboard/meeting_convener/meetings");

  if (user?.role === 'meeting_convener') {
    redirect("/dashboard/meeting_convener/meetings");
  } else {
    redirect("/meetings");
  }
}
