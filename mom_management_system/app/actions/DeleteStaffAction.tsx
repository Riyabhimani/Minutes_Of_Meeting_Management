"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "@/lib/auth-server";

export async function DeleteStaffAction(id: number) {
    const session = await getServerSession();
    const isConvener = session?.role === 'meeting_convener';

    // Delete related meeting members first
    await prisma.meetingmember.deleteMany({
        where: { StaffID: id },
    });

    await prisma.staff.delete({
        where: { StaffID: id },
    });

    if (isConvener) {
        revalidatePath("/dashboard/meeting_convener/staff");
    } else {
        revalidatePath("/staff");
    }
}
