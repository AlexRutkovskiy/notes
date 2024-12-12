'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

import { Header } from '@/widget/header';
import { AsideMenu } from '@/widget/asideMenu';

import { useAppState, useIsAuth } from '@/shared/hooks';
import { getUser } from '@/shared/store';
import { CircleLoading } from '@/shared/ui/CircleLoading';
import type { IUser } from '@/shared/model/user/types';

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function SiteLayout({ children }: AuthLayoutProps) {
  const isAuth = useIsAuth();
  const user = useAppState(getUser);
  const params = usePathname();

  if (!isAuth) return <CircleLoading />;

  return (
    <main className="h-full">
      <Header user={user as IUser} />
      <div className="flex h-[calc(100%-60px)]">
        <AsideMenu user={user as IUser} />
        <div className="flex-1 p-10 relative bg-white">
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
