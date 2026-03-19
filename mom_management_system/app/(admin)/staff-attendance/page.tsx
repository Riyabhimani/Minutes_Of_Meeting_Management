'use client';

import React, { useState, useEffect } from 'react';
import { ClipboardCheck, Loader2, Search, TrendingUp, TrendingDown, Users } from 'lucide-react';
import { getStaffAttendanceSummary } from '@/app/actions/StaffAttendanceActions';

interface AttendanceSummary {
  id: number;
  name: string;
  email: string | null;
  totalAssigned: number;
  totalAttended: number;
  attendancePercentage: number;
}

export default function StaffAttendanceSummary() {
  const [data, setData] = useState<AttendanceSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function load() {
      const summary = await getStaffAttendanceSummary();
      setData(summary);
      setLoading(false);
    }
    load();
  }, []);

  const filteredData = data.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 80) return 'text-emerald-500 bg-emerald-50 border-emerald-100';
    if (percentage >= 50) return 'text-amber-500 bg-amber-50 border-amber-100';
    return 'text-rose-500 bg-rose-50 border-rose-100';
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl w-full mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tighter">Staff Attendance</h1>
          <p className="text-slate-500 font-medium mt-1">Analytics and summary of meeting attendance.</p>
        </div>
        
        <div className="relative group w-full md:w-96">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-transform group-focus-within:scale-110 group-focus-within:text-indigo-600 text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-none outline-none ring-1 ring-slate-200 focus:ring-4 focus:ring-indigo-100 transition-all font-medium text-slate-700 bg-white/50 backdrop-blur-sm"
            placeholder="Search staff members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                    <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-slate-500 font-bold text-sm tracking-wider uppercase">Total Staff</h3>
            </div>
            <p className="text-4xl font-black text-slate-800">{data.length}</p>
        </div>
        <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-50 rounded-2xl">
                    <ClipboardCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-slate-500 font-bold text-sm tracking-wider uppercase">Avg Attendance</h3>
            </div>
            <p className="text-4xl font-black text-slate-800">
              {data.length > 0 ? Math.round(data.reduce((acc, curr) => acc + curr.attendancePercentage, 0) / data.length) : 0}%
            </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex items-center justify-center shadow-sm">
            <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                <p className="text-lg font-bold text-slate-800">Operational Overview Active</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-tighter">Engagement Monitoring Protocol</p>
            </div>
        </div>
      </div>

      <div className="glass-card rounded-[2rem] overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-100 bg-slate-50/50">
                <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Staff Member</th>
                <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-center">Assigned Meetings</th>
                <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-center">Attended Meetings</th>
                <th className="py-5 px-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Attendance Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((staff) => (
                <tr key={staff.id} className="hover:bg-indigo-50/20 transition-colors group">
                  <td className="py-5 px-6">
                    <div className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">{staff.name}</div>
                    <div className="text-sm font-medium text-slate-500">{staff.email || 'No email provided'}</div>
                  </td>
                  <td className="py-5 px-6 text-center font-bold text-slate-600">
                     {staff.totalAssigned}
                  </td>
                  <td className="py-5 px-6 text-center font-bold text-slate-600">
                     {staff.totalAttended}
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className={`px-4 py-2 rounded-xl text-sm font-black border ${getPercentageColor(staff.attendancePercentage)}`}>
                      {staff.attendancePercentage}%
                    </span>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">
                    No staff members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
