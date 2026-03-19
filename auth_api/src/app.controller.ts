import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';

@Controller('dashboard')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  @Get('test')
  test() {
    return { message: 'Dashboard controller is working!' };
  }

  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService
  ) { }

  @Get('stats')
  async getStats() {
    const totalStaff: any = await this.databaseService.query('SELECT COUNT(*) as count FROM Staff', []);
    const totalMeetings: any = await this.databaseService.query('SELECT COUNT(*) as count FROM Meetings', []);
    const pendingMeetings: any = await this.databaseService.query('SELECT COUNT(*) as count FROM Meetings WHERE IsCancelled = 0', []);
    const completedMeetings: any = await this.databaseService.query('SELECT COUNT(*) as count FROM Meetings WHERE IsCancelled = 1', []);

    return {
      totalStaff: totalStaff[0]?.count || 0,
      totalMeetings: totalMeetings[0]?.count || 0,
      pendingMeetings: pendingMeetings[0]?.count || 0,
      completedMeetings: completedMeetings[0]?.count || 0,
    };
  }

  @Get('pending-meetings')
  async getPendingMeetings() {
    const rows: any = await this.databaseService.query(
      'SELECT MeetingID as id, MeetingDescription as title, MeetingDate as date FROM Meetings WHERE IsCancelled = 0 ORDER BY MeetingDate DESC LIMIT 5',
      []
    );
    return rows;
  }

  @Get('all-meetings')
  async getAllMeetings() {
    const rows: any = await this.databaseService.query(
      'SELECT MeetingID as id, MeetingDescription as title, MeetingDate as date, IsCancelled FROM Meetings ORDER BY MeetingDate DESC',
      []
    );
    return rows;
  }

  @Post('mark-complete/:id')
  async markComplete(@Param('id') id: string) {
    console.log('Marking meeting as complete, ID:', id);
    try {
      const result = await this.databaseService.query(
        'UPDATE Meetings SET IsCancelled = 1 WHERE MeetingID = ?',
        [id]
      );
      console.log('Database update result:', result);
      return { success: true };
    } catch (error) {
      console.error('Database update failed:', error);
      throw error;
    }
  }

  // Staff-specific endpoints for effectiveness functionality
  @Get('staff-stats/:email')
  async getStaffStats(@Param('email') email: string) {
    // 1. Get StaffID by email
    const staffRec: any = await this.databaseService.query('SELECT StaffID FROM staff WHERE EmailAddress = ?', [email]);
    if (!staffRec || staffRec.length === 0) {
        return { error: 'Staff not found' };
    }
    const staffId = staffRec[0].StaffID;

    // 2. Query stats based on StaffID and IsPresent
    const totalMeetingsAssigned: any = await this.databaseService.query(
      'SELECT COUNT(*) as count FROM meetingmember WHERE StaffID = ?',
      [staffId]
    );

    const attendedMeetings: any = await this.databaseService.query(
      'SELECT COUNT(*) as count FROM meetingmember WHERE StaffID = ? AND IsPresent = 1',
      [staffId]
    );

    // Calculate effectiveness
    const totalAssigned = totalMeetingsAssigned[0]?.count || 0;
    const attended = attendedMeetings[0]?.count || 0;
    const effectiveness = totalAssigned > 0 ? ((attended / totalAssigned) * 100).toFixed(1) : 0;

    return {
      totalAssigned,
      attended,
      effectiveness,
      missed: totalAssigned - attended
    };
  }

  @Get('staff-meetings/:email')
  async getStaffMeetings(@Param('email') email: string) {
    const staffRec: any = await this.databaseService.query('SELECT StaffID FROM staff WHERE EmailAddress = ?', [email]);
     if (!staffRec || staffRec.length === 0) {
        return { error: 'Staff not found' };
    }
    const staffId = staffRec[0].StaffID;

    const rows: any = await this.databaseService.query(
      `SELECT m.MeetingID as id, m.MeetingDescription as title, m.MeetingDate as date, mm.IsPresent 
       FROM Meetings m 
       JOIN meetingmember mm ON m.MeetingID = mm.MeetingID 
       WHERE mm.StaffID = ? ORDER BY m.MeetingDate DESC LIMIT 10`,
      [staffId]
    );
    return rows;
  }

  @Get('all-staff')
  async getAllStaff() {
    try {
      const rows: any = await this.databaseService.query(
        'SELECT StaffID as id, StaffName as name, EmailAddress as email, MobileNo as phone FROM staff ORDER BY StaffName ASC',
        []
      );
      // Map rows to include mock data for unsupported fields
      return rows.map((r: any) => ({
        ...r,
        department: 'Operations',
        role: 'Staff Member',
        status: 'Active'
      }));
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  @Get('staff-profile/:id')
  async getStaffProfile(@Param('id') id: string) {
    try {
      // 1. Basic Profile
      const staffRec: any = await this.databaseService.query(
        'SELECT StaffID as id, StaffName as name, EmailAddress as email, MobileNo as phone FROM staff WHERE StaffID = ?', 
        [id]
      );
      
      if (!staffRec || staffRec.length === 0) {
        return { error: 'Staff not found' };
      }
      const profile = {
        ...staffRec[0],
        department: 'Operations',
        role: 'Staff Member',
        status: 'Active'
      };

      // 2. Meetings
      const meetingsQuery = `
        SELECT m.MeetingID as id, m.MeetingDescription as title, m.MeetingDate as date, m.IsCancelled as isCancelled, mt.MeetingTypeName as type, mm.IsPresent as isPresent
        FROM meetings m
        JOIN meetingmember mm ON m.MeetingID = mm.MeetingID
        LEFT JOIN meetingtype mt ON m.MeetingTypeID = mt.MeetingTypeID
        WHERE mm.StaffID = ?
        ORDER BY m.MeetingDate DESC
      `;
      const meetings: any = await this.databaseService.query(meetingsQuery, [id]);

      // 3. Stats calculation
      const totalMeetings = meetings.length;
      let attendedMeetings = 0;
      let upcomingMeetings = 0;
      
      const now = new Date();
      meetings.forEach((m: any) => {
        if (m.isPresent) attendedMeetings++;
        const meetingDate = new Date(m.date);
        if (meetingDate > now && !m.isCancelled) upcomingMeetings++;
      });

      // 4. Tasks
      const tasksQuery = `
        SELECT TaskID as id, TaskDescription as description, AssignedBy as assignedBy, Deadline as deadline, Status as status, MeetingID as meetingId
        FROM tasks
        WHERE StaffID = ?
        ORDER BY Deadline ASC
      `;
      const tasks: any = await this.databaseService.query(tasksQuery, [id]);

      let completedTasks = 0;
      let pendingTasks = 0;

      tasks.forEach((t: any) => {
        if (t.status === 'Completed') completedTasks++;
        else pendingTasks++;
      });

      return {
        profile,
        meetings,
        tasks,
        stats: {
          totalMeetingsAttended: attendedMeetings,
          totalMeetingsAssigned: totalMeetings,
          upcomingMeetings,
          completedTasks,
          pendingTasks
        }
      };
    } catch (e) {
      console.error(e);
      return { error: 'Failed to fetch staff profile' };
    }
  }
}
