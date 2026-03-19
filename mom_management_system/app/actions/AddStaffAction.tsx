"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";

export async function AddStaffAction(formData: FormData) {
    const session = await getServerSession();
    const isConvener = session?.role === 'meeting_convener';

    const StaffName = formData.get("StaffName") as string;
    const MobileNo = formData.get("MobileNo") as string;
    const EmailAddress = formData.get("EmailAddress") as string;
    const Remarks = formData.get("Remarks") as string;

    await prisma.staff.create({
        data: {
            StaffName,
            MobileNo,
            EmailAddress,
            Remarks,
            Created: new Date(),
            Modified: new Date(),
        },
    });

    if (isConvener) {
        revalidatePath("/dashboard/meeting_convener/staff");
        redirect("/dashboard/meeting_convener/staff");
    } else {
        revalidatePath("/staff");
        redirect("/staff");
    }
}
