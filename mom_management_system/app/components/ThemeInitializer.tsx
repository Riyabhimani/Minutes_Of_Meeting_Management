'use client';

import { useEffect } from 'react';
import { getSettings } from '@/app/actions/SettingsActions';

export default function ThemeInitializer() {
  useEffect(() => {
    async function applyTheme() {
      const dbSettings = await getSettings();
      if (dbSettings.theme) {
        const theme = dbSettings.theme;
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
          document.documentElement.classList.remove('dark');
        } else if (theme === 'system') {
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.classList.toggle('dark', isDark);
        }
      }
    }
    applyTheme();
  }, []);

  return null;
}
