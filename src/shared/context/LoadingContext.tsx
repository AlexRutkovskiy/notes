'use client'

import { useMemo, useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';

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

  useLayoutEffect(() => {
    if (session.status === 'authenticated' && !user) {
      dispatch(fetchUser(session.data.user as IUserFetchData))
    }
  }, [session, user]);

  const isLoading = useMemo(() => {
    return session.status === 'authenticated' && !user;
  }, [session.status, user])

  return isLoading ? <CircleLoading /> : children
}