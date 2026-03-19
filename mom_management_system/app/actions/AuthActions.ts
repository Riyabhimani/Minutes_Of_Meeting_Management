'use server';

import { getServerSession } from "@/lib/auth-server";

export async function getSessionAction() {
  return await getServerSession();
}
