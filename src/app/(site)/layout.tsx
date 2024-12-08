'use client'

import React from 'react';
import { signOut } from 'next-auth/react'
import { HiMiniArrowLeftEndOnRectangle } from 'react-icons/hi2'

import { useAppState, useIsAuth } from '@/shared/hooks';
import { getUser } from '@/shared/store';
import { Title } from '@/shared/ui/Typography';
import { CircleLoading } from '@/shared/ui/CircleLoading'
import { Button } from '@/shared/ui/Button'
import { Content } from '@/shared/ui/Typography'
import { Routes } from '@/shared/routes/Routes';
import clsx from 'clsx';

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function SiteLayout({ children }: AuthLayoutProps) {
  const isAuth = useIsAuth();
  const user = useAppState(getUser)

  if (!isAuth) return <CircleLoading />;

  return (
    <main className="h-full">
      <header className="flex items-center justify-between h-[60px] border-b-2 border-b-gray-300 px-5 py-2.5">
        <Title tag='h2' >Notes</Title>
        <div className="flex items-center gap-3">
          <div className={clsx(`block w-4 h-4 rounded-[50%] border border-gray-400 shadow`,
            user?.isActive && 'bg-green-500 border-green-600')}
          ></div>
          <div className="w-40">
            <Content className="truncate ...">{user?.fullName}</Content>
          </div>
        </div>
      </header>
      <div className="flex h-[calc(100%-60px)]">
        <aside className="flex flex-col justify-between w-[250px] border-r-2 border-r-gray-300 px-5 py-10">
          <Routes />
          <Button fullWidth onClick={()=> signOut()}>
            <HiMiniArrowLeftEndOnRectangle className="w-6 h-6 mr-2 block" />
            <Content>Log Out</Content>
          </Button>
        </aside>
        <div className="flex-1 p-10 relative bg-white">
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
