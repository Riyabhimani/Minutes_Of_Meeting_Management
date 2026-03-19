'use client';

import React, { useState, useEffect } from 'react';
import { Save, Loader2, User, Palette, RotateCcw, ShieldCheck, Mail, Fingerprint, Camera, ChevronRight, Globe, Bell } from 'lucide-react';
import { getSettings, updateSetting, updateProfile, resetSettings } from '@/app/actions/SettingsActions';
import { getSessionAction } from '@/app/actions/AuthActions';
import { useRouter } from 'next/navigation';

export default function AdminSettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const [dbSettings, session] = await Promise.all([
          getSettings(),
          getSessionAction()
        ]);

        setSettings({
          systemName: dbSettings.systemName || 'MoM.AI',
          notificationsEnabled: dbSettings.notificationsEnabled || 'true',
        });

        if (session) {
          setUser(session);
          setProfile({
            name: session.name || '',
            email: session.email || '',
            password: '',
          });
        }
      } catch (err) {
        console.error('Failed to load settings data', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    setErrorMsg('');

    try {
      if (user) {
        const profileData: any = {};
        if (profile.name && profile.name !== user.name) profileData.name = profile.name;
        if (profile.email && profile.email !== user.email) profileData.email = profile.email;
        if (profile.password) profileData.password = profile.password;

        if (Object.keys(profileData).length > 0) {
          const profileRes = await updateProfile(user.user_id, profileData);
          if (!profileRes.success) throw new Error(profileRes.error || 'Failed to update profile');
          setUser((prev: any) => ({ ...prev, ...profileData }));
        }
      }

      for (const [key, value] of Object.entries(settings)) {
        await updateSetting(key, value);
      }

      setMessage('Configuration synchronized successfully!');
      router.refresh();
    } catch (error: any) {
      console.error('Error saving settings:', error);
      setErrorMsg(error.message || 'An unexpected error occurred while saving.');
    } finally {
      setSaving(false);
      setTimeout(() => { setMessage(''); setErrorMsg(''); }, 5000);
    }
  };

  const handleReset = async () => {
    if (!confirm('Are you sure you want to reset all settings to defaults? This cannot be undone.')) return;
    setSaving(true);
    try {
      const res = await resetSettings();
      if (res.success) {
        setMessage('System settings restored to defaults.');
        window.location.reload();
      } else {
        throw new Error(res.error);
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Failed to reset settings.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl w-full mx-auto space-y-6 pb-20 pt-2 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin Settings</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Profile Management & System Configuration</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-slate-200 hover:bg-black transition-all disabled:opacity-70 group whitespace-nowrap"
        >
          {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3 group-hover:scale-110 transition-transform" />}
          {saving ? 'Syncing...' : 'Save Configuration'}
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Profile Card */}
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-sm">
            {/* Avatar Header */}
            <div className="p-8 pb-0 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-slate-300 relative overflow-hidden transition-transform group-hover:scale-105">
                  <User size={40} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera size={20} />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-8 h-8 rounded-xl border-4 border-white flex items-center justify-center">
                  <ShieldCheck size={14} />
                </div>
              </div>
              <h2 className="mt-6 text-xl font-bold text-slate-900">{profile.name}</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Administrator Registry</p>
            </div>

            {/* Profile Fields */}
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

            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">System Validation Active</span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-200" />)}
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* System Settings */}
          <section className="bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-slate-900 rounded-xl text-white">
                <Globe size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">System</h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Configuration</p>
              </div>
            </div>

            {/* System Name */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center gap-2 px-1">
                <span className="text-slate-400"><Globe size={14} /></span>
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">Portal Branding</label>
              </div>
              <input
                type="text"
                value={settings.systemName || ''}
                onChange={(e) => handleChange('systemName', e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white transition-all font-bold text-slate-900 text-sm"
              />
            </div>

            {/* Notifications Toggle */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell size={14} className="text-slate-400" />
                <div>
                  <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Notifications</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">Alert permissions</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notificationsEnabled === 'true'}
                  onChange={(e) => handleChange('notificationsEnabled', e.target.checked ? 'true' : 'false')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
              </label>
            </div>
          </section>

          {/* Account Status */}
          <section className="bg-slate-50 border border-slate-200/60 rounded-[2rem] p-6 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Account Status</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Admin Verified</span>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-900 transition-all" />
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-1">
                <p className="text-[9px] font-black text-slate-300 uppercase leading-none">Last Sync</p>
                <p className="text-[10px] font-mono font-bold text-slate-500">{new Date().toISOString().slice(0, 16).replace('T', ' ')}</p>
              </div>
            </div>
          </section>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-rose-500 font-black text-[10px] uppercase tracking-widest transition-all px-4 py-3 rounded-2xl hover:bg-rose-50 border border-slate-200/60"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All Settings
          </button>
        </div>
      </div>

      {/* Toast Notifications */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {message && (
          <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
            <ShieldCheck size={18} className="text-emerald-400" />
            <p className="text-[10px] font-black uppercase tracking-widest">{message}</p>
          </div>
        )}
        {errorMsg && (
          <div className="bg-rose-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
            <p className="text-[10px] font-black uppercase tracking-widest">{errorMsg}</p>
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
        <span className="text-slate-400">{icon}</span>
        <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">
          {label}
        </label>
      </div>
      <input
        {...props}
        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm"
      />
    </div>
  );
}
