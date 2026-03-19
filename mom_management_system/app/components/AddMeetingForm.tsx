'use client';

import React from 'react';
import { AddMeetingAction } from '@/app/actions/AddMeetingAction';

interface MeetingType {
    MeetingTypeID: number;
    MeetingTypeName: string;
}

interface AddMeetingFormProps {
    meetingTypes: MeetingType[];
    backLink: string;
}

export default function AddMeetingForm({ meetingTypes, backLink }: AddMeetingFormProps) {
    return (
        <form action={AddMeetingAction} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Meeting Date</label>
                    <input 
                        name="MeetingDate" 
                        type="date" 
                        required 
                        className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white" 
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Meeting Type</label>
                    <div className="relative">
                        <select 
                            name="MeetingTypeID" 
                            required 
                            className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white appearance-none"
                        >
                            <option value="">Select Category</option>
                            {meetingTypes.map(t => (
                                <option key={t.MeetingTypeID} value={t.MeetingTypeID}>{t.MeetingTypeName}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Meeting Description</label>
                <input 
                    name="MeetingDescription" 
                    type="text" 
                    placeholder="Brief objective of this session..."
                    className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-sm text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600" 
                />
            </div>

            <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1.5">Session Artifact (Optional)</label>
                <div className="relative group">
                    <input 
                        name="DocumentPath" 
                        type="file" 
                        className="w-full px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 transition-all font-bold text-xs text-slate-400 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-black file:text-white dark:file:bg-white dark:file:text-black hover:file:opacity-80 cursor-pointer" 
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button 
                    type="submit" 
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-100 transition-all font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-black/10 active:scale-[0.98]"
                >
                    Initialize Meeting
                </button>
                <a 
                    href={backLink} 
                    className="flex-1 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold uppercase tracking-widest text-[10px] text-center"
                >
                    Cancel & Return
                </a>
            </div>
        </form>
    );
}
