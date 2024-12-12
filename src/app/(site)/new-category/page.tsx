'use client'

import { NewCategoryPage } from '@/_pages/newCategory';
import { withInactiveUser } from '@/shared/HOC/withInactiveUser';

export default function Home()  {
  return withInactiveUser(NewCategoryPage);
}