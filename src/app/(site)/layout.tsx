'use client'

import React from 'react';

import { Title } from '@/shared/ui/Typography';
import { CircleLoading } from '@/shared/ui/CircleLoading'
import { useIsAuth } from '@/shared/hooks'

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function SiteLayout({ children }: AuthLayoutProps) {
  const isAuth = useIsAuth();

  if (!isAuth) return <CircleLoading />;

  return (
    <main className="h-full">
      <header className="flex items-center justify-between h-[60px] border-b-2 border-b-gray-300 px-5 py-2.5">
        <Title tag='h2' >Notes</Title>
      </header>
      <div className="flex h-[calc(100%-60px)] gap-5">
        <aside className="w-[250px] border-r-2 border-r-gray-300 px-5 py-10">
          1
        </aside>
        <div className="flex-1 p-10 relative">
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
