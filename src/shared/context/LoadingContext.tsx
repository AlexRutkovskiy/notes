'use client'

import { useMemo, useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation'

import { CircleLoading } from '@/shared/ui/CircleLoading';
import { useAppState, useAppDispatch } from '@/shared/hooks';
import { getUserData, fetchUser } from '@/shared/store';
import type { IUserFetchData } from '@/shared/model/user/types';

interface LoadingContextProps {
  children?: React.ReactNode
}

export const LoadingContext = ({
  children,
}: LoadingContextProps) => {
  const session = useSession()
  const { user } = useAppState(getUserData)
  const dispatch = useAppDispatch()
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (session.status === 'authenticated' && !user) {
      dispatch(fetchUser(session.data.user as IUserFetchData))
    }
  }, [session, user]);

  const isLoading = useMemo(() => {
    return session.status === 'authenticated' && !user && !pathname.includes('activate');
  }, [session.status, user])

  return isLoading ? <CircleLoading /> : children
}