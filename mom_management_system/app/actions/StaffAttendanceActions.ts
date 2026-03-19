'use server';

import { prisma } from '@/lib/prisma';

export async function getStaffAttendanceSummary() {
  try {
    const staffMembers = await prisma.staff.findMany();
    const allMeetingMembers = await prisma.meetingmember.findMany();

    return staffMembers.map(staff => {
      const staffMeetings = allMeetingMembers.filter(m => m.StaffID === staff.StaffID);
      const totalAssigned = staffMeetings.length;
      const totalAttended = staffMeetings.filter(m => m.IsPresent).length;
      const attendancePercentage = totalAssigned > 0 
        ? Math.round((totalAttended / totalAssigned) * 100) 
        : 0;


      return {
        id: staff.StaffID,
        name: staff.StaffName,
        email: staff.EmailAddress,
        totalAssigned,
        totalAttended,
        attendancePercentage,
      };
    }).sort((a, b) => b.attendancePercentage - a.attendancePercentage);
  } catch (error) {
    console.error("Failed to fetch staff attendance summary:", error);
    return [];
  }
}
