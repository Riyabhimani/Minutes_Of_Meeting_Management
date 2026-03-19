import Link from 'next/link';

export default function NotAuthorized() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto">
          <span className="text-3xl">🔒</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Access Restricted</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">You do not have the required permissions to view this resource.</p>
        <Link href="/dashboard" className="inline-block mt-4 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}