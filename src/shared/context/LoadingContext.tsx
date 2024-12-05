'use client'

import { useSession } from 'next-auth/react';
import { CircleLoading } from '@/shared/ui/CircleLoading';

interface LoadingContextProps {
  children?: React.ReactNode
}

export const LoadingContext = ({
  children,
}: LoadingContextProps) => {
  const session = useSession()

  return session.status === "loading" ? <CircleLoading /> : children
}