import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { getSettings } from "./actions/SettingsActions";

export async function generateMetadata(): Promise<Metadata> {
  let systemName = "MOM Archive";
  try {
    const settings = await getSettings();
    if (settings.systemName) {
      systemName = settings.systemName;
    }
  } catch (error) {
    console.error("Failed to load settings for metadata");
  }

  return {
    title: `${systemName} | Professional Minutes of Meeting Management`,
    description: "A premium, secure system for managing minutes of meetings and action items for professional organizations.",
  };
}
import { getServerSession } from "@/lib/auth-server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getServerSession();

return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen text-slate-900 selection:bg-indigo-500/30 selection:text-white relative">
        <div className="mesh-gradient-light"></div>
        <div className="fixed inset-0 bg-pattern z-[-1] opacity-60"></div>
        {children}
      </body>
    </html>
  );
}

