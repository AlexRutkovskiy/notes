'use client'

import React, { useLayoutEffect } from 'react';
import { useRouter } from "next/navigation";

import { useIsAuth } from '@/shared/hooks';
import { CircleLoading } from '@/shared/ui/CircleLoading';

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const isAuth = useIsAuth();
  const router = useRouter();

  useLayoutEffect(() => {
    if (isAuth) {
      router.push('/')
    }
  }, [isAuth]);

  if (isAuth) return <CircleLoading />;

  return (
    <div className="w-full h-full flex items-center justify-center p-10">
      <div className="p-12 w-full max-w-[600px] bg-white rounded-2xl shadow">
        {children}
      </div>
    </div>
  )
}
