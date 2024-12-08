import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

import { useAppState } from '@/shared/hooks';
import { getUser } from '@/shared/store';

export const useIsAuth = () => {
  const session = useSession()
  const user = useAppState(getUser)

  return useMemo(() => user && session.status === 'authenticated', [session.status, user])
}