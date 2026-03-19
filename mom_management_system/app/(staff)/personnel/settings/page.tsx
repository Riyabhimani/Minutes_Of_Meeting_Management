'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, User, Palette, Moon, Sun, Smartphone, RotateCcw, ShieldCheck, Mail, Fingerprint, Camera, ChevronRight } from 'lucide-react';
import { getSettings, updateSetting, updateProfile } from '@/app/actions/SettingsActions';
import { getSessionAction } from '@/app/actions/AuthActions';
import { useRouter } from 'next/navigation';

export default function PersonnelSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [errorHeader, setErrorHeader] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const [dbSettings, session] = await Promise.all([
          getSettings(),
          getSessionAction()
        ]);
        
        setSettings({
          theme: dbSettings.theme || 'light',
        });

        if (session) {
          setUser(session);
          setProfile({
            name: session.name || '',
            email: session.email || '',
            password: '' // Keep password empty for security
          });
        }
      } catch (err) {
        console.error("Failed to load session data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    
    // Immediate Theme Application
    if (key === 'theme') {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (value === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (value === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isDark);
      }
    }
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    setErrorHeader('');
    
    try {
      if (user) {
        const profileData: any = {};
        if (profile.name && profile.name !== user.name) profileData.name = profile.name;
        if (profile.email && profile.email !== user.email) profileData.email = profile.email;
        if (profile.password) profileData.password = profile.password;

        if (Object.keys(profileData).length > 0) {
          const profileRes = await updateProfile(user.user_id, profileData);
          if (!profileRes.success) throw new Error(profileRes.error || "Failed to update profile");
          setUser((prev: any) => ({ ...prev, ...profileData }));
        }
      }

      // Save theme setting
      if (settings.theme) {
        await updateSetting('theme', settings.theme);
      }
      
      setMessage('Configuration synchronized successfully!');
      router.refresh();

    } catch (error: any) {
      console.error("Error saving settings:", error);
      setErrorHeader(error.message || "An unexpected error occurred while saving.");
    } finally {
      setSaving(false);
      setTimeout(() => { setMessage(''); setErrorHeader(''); }, 5000);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="w-8 h-8 text-slate-900 dark:text-white animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl w-full mx-auto space-y-6 pb-20 pt-2 px-4">
      {/* Header - Compact & Elegant */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Personnel Settings</h1>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Profile Management & Interface</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-slate-200 dark:shadow-none hover:bg-black dark:hover:bg-slate-100 transition-all disabled:opacity-70 group whitespace-nowrap"
        >
          {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3 group-hover:scale-110 transition-transform" />}
          {saving ? 'Syncing...' : 'Save Configuration'}
        </button>
      </div>

      {/* Profile & Main Settings Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Main Card: Profile Identity */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-sm">
            {/* Identity Header */}
            <div className="p-8 pb-0 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-24 h-24 bg-slate-900 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-slate-300 dark:shadow-none relative overflow-hidden transition-transform group-hover:scale-105">
                  <User size={40} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera size={20} />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-8 h-8 rounded-xl border-4 border-white dark:border-slate-900 flex items-center justify-center">
                  <ShieldCheck size={14} />
                </div>
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h2>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Verified Personnel Registry</p>
            </div>

            <div className="p-8 pt-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SettingsField 
                  label="Display Identity"
                  value={profile.name}
                  onChange={(e: any) => handleProfileChange('name', e.target.value)}
                  icon={<User size={14} />}
                />
                <SettingsField 
                  label="Verified Email"
                  value={profile.email}
                  type="email"
                  onChange={(e: any) => handleProfileChange('email', e.target.value)}
                  icon={<Mail size={14} />}
                />
              </div>
              <SettingsField 
                label="Access Credential"
                value={profile.password}
                type="password"
                placeholder="Secure with new password (optional)"
                onChange={(e: any) => handleProfileChange('password', e.target.value)}
                icon={<Fingerprint size={14} />}
              />
            </div>
            
            <div className="px-8 py-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">System Validation Active</span>
              <div className="flex gap-1.5">
                {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />)}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Preferences */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-slate-900 dark:bg-slate-800 rounded-xl text-white">
                <Palette size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Interface</h3>
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Environment</p>
              </div>
            </div>

            <div className="space-y-2">
              <CompactToggle 
                active={settings.theme === 'light'} 
                onClick={() => handleChange('theme', 'light')} 
                icon={<Sun size={14} />} 
                label="Standard Light" 
              />
              <CompactToggle 
                active={settings.theme === 'dark'} 
                onClick={() => handleChange('theme', 'dark')} 
                icon={<Moon size={14} />} 
                label="Midnight Slate" 
              />
              <CompactToggle 
                active={settings.theme === 'system'} 
                onClick={() => handleChange('theme', 'system')} 
                icon={<Smartphone size={14} />} 
                label="System Adaptive" 
              />
            </div>
          </section>

          {/* Feedback Section */}
          <section className="bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2rem] p-6 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Account Status</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Presence Verified</span>
                </div>
                <ChevronRight size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-all" />
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                 <p className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase leading-none">Last Sync</p>
                 <p className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">2026-03-15 21:45</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Toast Notification Style Status */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {message && (
          <div className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
            <ShieldCheck size={18} className="text-emerald-400" />
            <p className="text-[10px] font-black uppercase tracking-widest">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SettingsField({ label, icon, ...props }: any) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 px-1">
        <span className="text-slate-400 dark:text-slate-500">{icon}</span>
        <label className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em]">
          {label}
        </label>
      </div>
      <input
        {...props}
        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-4 rounded-xl outline-none focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-white/5 focus:bg-white dark:focus:bg-slate-800 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 text-sm"
      />
    </div>
  );
}

function CompactToggle({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all ${
        active 
        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg shadow-slate-200 dark:shadow-none' 
        : 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
      }`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${active ? 'bg-white/10 dark:bg-slate-900/10' : 'bg-white dark:bg-slate-800 shadow-sm'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />}
    </button>
  );
}
