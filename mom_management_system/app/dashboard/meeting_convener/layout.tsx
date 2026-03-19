import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";
import ConvenerSidebar from "@/app/components/ConvenerSidebar";
import ThemeInitializer from "@/app/components/ThemeInitializer";

export default async function ConvenerLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerSession();

  if (!user) redirect("/login");
  if (user.role !== "meeting_convener") {
     // If they are admin, they might be here exploring, but usually we redirect
     if (user.role === "admin") redirect("/dashboard/admindashboard");
     else redirect("/personnel/dashboard");
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans p-4 lg:p-6 gap-6 overflow-hidden">
      <ThemeInitializer />
      <ConvenerSidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {children}
      </main>
    </div>
  );
}
