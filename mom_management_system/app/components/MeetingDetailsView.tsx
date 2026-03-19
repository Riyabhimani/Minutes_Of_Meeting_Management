import React from 'react';
import Link from 'next/link';
import { Clock, FileText, ArrowLeft, Edit, Download, Calendar } from 'lucide-react';

interface Meeting {
    MeetingID: number;
    MeetingDate: Date;
    MeetingDescription: string | null;
    DocumentPath: string | null;
    meetingtype?: {
        MeetingTypeName: string;
    } | null;
}

interface MeetingDetailsViewProps {
    meeting: Meeting;
    backLink: string;
    editLink?: string;
    reportLink?: string;
}

export default function MeetingDetailsView({ meeting, backLink, editLink, reportLink }: MeetingDetailsViewProps) {
    return (
        <div className="flex items-center justify-center p-6 animate-in fade-in duration-700 min-h-[calc(100vh-100px)]">
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800 shadow-premium w-full max-w-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <Calendar size={120} />
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-white/60 dark:border-slate-800 pb-6">
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Meeting Dossier</h1>
                            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Registry Record #M-{meeting.MeetingID}</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm flex items-center gap-4">
                            <div className="p-3 bg-white/60 dark:bg-slate-800 rounded-xl text-indigo-500 dark:text-indigo-400 border border-white/60 dark:border-slate-700 shadow-sm">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Meeting Date & Time</label>
                                <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                                    {new Date(meeting.MeetingDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                                    <Clock size={10} className="text-indigo-400" /> {new Date(meeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-white/60 dark:border-slate-700/50 shadow-sm">
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Meeting Category</label>
                            <p className="text-base font-black text-slate-900 dark:text-white leading-relaxed">{meeting.meetingtype?.MeetingTypeName || "General Strategic Session"}</p>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">Meeting Objectives / Description</label>
                            <div className="bg-white/60 dark:bg-slate-800/50 border border-white/60 dark:border-slate-700 shadow-sm p-5 rounded-2xl min-h-[80px]">
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{meeting.MeetingDescription || 'No operational description provided for this session.'}</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 px-1">Attached Document</label>
                            {meeting.DocumentPath ? (
                                <a
                                    href={meeting.DocumentPath}
                                    download={meeting.DocumentPath.split('/').pop()}
                                    className="inline-flex items-center gap-3 px-6 py-3.5 premium-gradient text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all text-[11px] font-black uppercase tracking-widest"
                                >
                                    <Download size={14} />
                                    Download Artifact
                                </a>
                            ) : (
                                <p className="text-slate-500 italic text-[11px] font-bold uppercase tracking-widest bg-white/40 dark:bg-slate-800/40 p-4 rounded-xl border border-white/60 dark:border-slate-700 shadow-sm inline-block">No session artifacts attached to this record.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/60 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                        <Link href={backLink} className="flex-1 py-3.5 bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-white/60 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all font-black text-[11px] uppercase tracking-widest text-center shadow-sm">
                            RETURN TO REGISTRY
                        </Link>
                        {editLink && (
                            <Link href={editLink} className="flex-1 py-3.5 premium-gradient text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-black text-[11px] uppercase tracking-widest text-center">
                                EDIT DOSSIER
                            </Link>
                        )}
                        {reportLink && (
                            <Link href={reportLink} className="flex items-center justify-center gap-2 py-3.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl hover:bg-emerald-500/20 transition-all font-black text-[11px] uppercase tracking-widest shadow-sm">
                                <FileText size={14} />
                                GENERATE REPORT
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetadataTag({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{label}</span>
            <span className="text-[11px] font-black text-slate-900 dark:text-white tracking-widest uppercase">{value}</span>
        </div>
    );
}
