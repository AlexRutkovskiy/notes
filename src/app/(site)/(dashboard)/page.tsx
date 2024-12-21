'use client'

import { DashboardPage } from '@/_pages/dashboard';
import { withInactiveUser } from '@/shared/HOC/withInactiveUser';

export default function Home()  {
  return withInactiveUser(DashboardPage);
}