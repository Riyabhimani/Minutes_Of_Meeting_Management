import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/auth-server';

export default async function DashboardPage() {
  const user = await getServerSession();

  if (!user) {
    redirect('/login');
  }

  if (user.role === 'admin') {
    redirect('/dashboard/admindashboard');
  } else if (user.role === 'meeting_convener') {
    redirect('/dashboard/meeting_convener');
  } else {
    redirect('/personnel/dashboard');
  }
}