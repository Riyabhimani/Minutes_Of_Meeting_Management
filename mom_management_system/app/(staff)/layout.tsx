import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";
import StaffSidebar from "@/app/components/StaffSidebar";
import ThemeInitializer from "@/app/components/ThemeInitializer";

export default async function StaffLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerSession();

  if (!user) redirect("/login");
  if (user.role === "admin") redirect("/dashboard/admindashboard");

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans p-4 lg:p-6 gap-6 overflow-hidden">
      <ThemeInitializer />
      <StaffSidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {children}
      </main>
    </div>
  );
}