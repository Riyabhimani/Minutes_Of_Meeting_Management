import { redirect } from 'next/navigation';

export default function StaffRedirect() {
  redirect('/personnel/dashboard');
}