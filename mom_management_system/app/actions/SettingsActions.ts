'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';

export async function getSettings() {
  try {
    const settingsList = await prisma.settings.findMany();
    const settingsMap: Record<string, string> = {};
    settingsList.forEach((s: { settingKey: string | number; settingValue: string; }) => {
      settingsMap[s.settingKey] = s.settingValue;
    });
    return settingsMap;
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return {};
  }
}

export async function updateSetting(key: string, value: string) {
  try {
    const setting = await prisma.settings.upsert({
      where: { settingKey: key },
      update: { settingValue: value, Modified: new Date() },
      create: { settingKey: key, settingValue: value }
    });
    revalidatePath('/settings');
    revalidatePath('/dashboard');
    revalidatePath('/personnel/settings');
    revalidatePath('/personnel/dashboard');
    return { success: true, setting };
  } catch (error) {
    console.error("Failed to update setting:", error);
    return { success: false, error: "Failed to update setting" };
  }
}

export async function updateProfile(userId: number, data: { name?: string, email?: string, password?: string }) {
  try {
    const updateData: any = {};
    if (data.name) updateData.name = data.name;
    if (data.email) updateData.email = data.email;
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    // Get current user to check for email changes and role
    const currentUser = await prisma.users.findUnique({
      where: { user_id: userId }
    });

    if (!currentUser) throw new Error("User not found");

    const user = await prisma.users.update({
      where: { user_id: userId },
      data: updateData
    });

    // If it's a staff member, synchronize the 'staff' table
    if (currentUser.role !== 'admin') {
      await prisma.staff.updateMany({
        where: { EmailAddress: currentUser.email || undefined },
        data: {
          StaffName: data.name || undefined,
          EmailAddress: data.email || undefined,
          Modified: new Date()
        }
      });
    }

    revalidatePath('/settings');
    revalidatePath('/personnel/settings');
    revalidatePath('/personnel/dashboard');
    return { success: true, user };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}
export async function resetSettings() {
  try {
    await prisma.settings.deleteMany();
    revalidatePath('/settings');
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error("Failed to reset settings:", error);
    return { success: false, error: "Failed to reset settings" };
  }
}
