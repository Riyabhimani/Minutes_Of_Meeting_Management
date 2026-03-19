"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  // --- UI State ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [pwVisible, setPwVisible] = useState(false);

  // --- API Fetch Logic ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Invalid credentials. Access denied.");
      }

      const data = await res.json();
      setIsSuccess(true);

      setTimeout(() => {
        const userRole = data.user.role?.toLowerCase();
        if (userRole === "admin") {
          router.push("/dashboard/admindashboard");
        } else if (userRole === "meeting_convener") {
          router.push("/dashboard/meeting_convener");
        } else {
          router.push("/personnel/dashboard");
        }
      }, 1500);
    } catch (err: any) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent font-sans antialiased text-slate-900 overflow-hidden relative">
      {/* Animated background blobs for the login page specifically */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/20 blur-[120px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-[440px] z-10 animate-fade-in-up">
        {!isSuccess ? (
          <div className="glass-card p-10 lg:p-12 relative overflow-hidden group">
            {/* Subtle glow border inside the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-inherit"></div>
            {/* Branding */}
            <div className="mb-10 text-center relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="premium-gradient p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-tight text-slate-900 uppercase">MOM.Pulse</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Sign in to your organizational workspace</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    className="w-full h-14 pl-12 pr-4 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white font-semibold text-sm text-slate-800 shadow-sm"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                </div>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    className="w-full h-14 pl-12 pr-12 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white font-semibold text-sm text-slate-800 shadow-sm"
                    type={pwVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
                    onClick={() => setPwVisible(!pwVisible)}
                  >
                    {pwVisible ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                className="w-full h-14 premium-gradient text-white font-black uppercase tracking-widest text-[11px] rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none disabled:shadow-none relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                type="submit"
                disabled={isSubmitting}
              >
                {/* Button highlight hover effect */}
                <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                New here? <a href="/register" className="text-slate-900 hover:underline inline-block ml-1">Create Account</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-500 glass-card p-12">
            <div className="w-20 h-20 premium-gradient rounded-3xl flex items-center justify-center mx-auto shadow-glow animate-bounce">
              <CheckCircle2 size={32} color="white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Authorized</h2>
              <p className="text-indigo-500 font-black uppercase tracking-widest text-[10px]">Entering Workspace...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
