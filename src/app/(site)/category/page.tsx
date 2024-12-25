'use client'

import { CategoryPage } from '@/_pages/category';
import { withInactiveUser } from '@/shared/HOC/withInactiveUser';

export default function Home()  {
  return withInactiveUser(CategoryPage);
}