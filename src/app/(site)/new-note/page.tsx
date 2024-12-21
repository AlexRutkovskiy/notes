'use client'

import { NewNotePage } from '@/_pages/newNote';
import { withInactiveUser } from '@/shared/HOC/withInactiveUser';

export default function Home()  {
  return withInactiveUser(NewNotePage);
}