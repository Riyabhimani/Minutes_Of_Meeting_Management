"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Shield, ArrowRight } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (!role) {
            setError("Please select a sector");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Registry error occurred");
                setLoading(false);
                return;
            }

            router.push("/login?registered=true");
        } catch (err) {
            setError("Synchronization failed. Try again.");
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-transparent font-sans antialiased text-slate-900 overflow-hidden relative">
            {/* Animated background blobs */}
            <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-emerald-500/20 blur-[130px] mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[130px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="w-full max-w-[480px] z-10 animate-fade-in-up">
                <div className="glass-card p-10 lg:p-12 relative overflow-hidden group">
                    {/* Subtle glow border inside the card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-inherit"></div>
                    {/* Branding */}
                    <div className="mb-10 text-center relative z-10">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="premium-gradient p-2.5 rounded-xl shadow-lg shadow-emerald-500/30">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14,2 14,8 20,8" />
                                </svg>
                            </div>
                            <span className="text-xl font-black tracking-tight text-slate-900 uppercase">MoM.AI</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Account</h1>
                        <p className="text-sm text-slate-500 font-medium mt-1">Initialize your personnel profile</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 animate-shake">
                                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                </div>
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-5">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-emerald-500 transition-colors">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full h-14 pl-12 pr-4 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 focus:bg-white font-semibold text-sm text-slate-800 shadow-sm"
                                        placeholder="James Carter"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-emerald-500 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-14 pl-12 pr-4 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 focus:bg-white font-semibold text-sm text-slate-800 shadow-sm"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-emerald-500 transition-colors">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-14 pl-12 pr-4 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 focus:bg-white font-semibold text-sm text-slate-800 shadow-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            {/* Role */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Governance Sector</label>
                                <div className="relative group/input">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within/input:text-emerald-500 transition-colors">
                                        <Shield size={18} />
                                    </div>
                                    <select
                                        required
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full h-14 pl-12 pr-10 bg-white/50 border border-slate-200/60 rounded-xl outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500/50 focus:bg-white font-semibold text-sm text-slate-800 appearance-none cursor-pointer shadow-sm"
                                    >
                                        <option value="" disabled>Select Role</option>
                                        <option value="admin">Administration</option>
                                        <option value="meeting_convener">Meeting Convener</option>
                                        <option value="staff">Staff Operations</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 premium-gradient text-white font-black uppercase tracking-widest text-[11px] rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none disabled:shadow-none mt-4 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
                        >
                            {/* Button highlight hover effect */}
                            <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 flex items-center gap-3">
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Register Profile</span>
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </span>
                        </button>

                        <div className="text-center mt-8">
                            <a href="/login" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all border-b border-transparent hover:border-slate-900 pb-1">
                                Already Registered? Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}