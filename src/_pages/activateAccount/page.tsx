'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { Content, Title } from '@/shared/ui/Typography';
import { TRANSLATE } from '@/shared/utils/consts';
import { useIsAuth } from '@/shared/hooks';
import { CircleLoading } from '@/shared/ui/CircleLoading';

export const ActivateAccount = () => {
  const { id } = useParams<{id: string}>();
  const isAuth = useIsAuth();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false)
  
  useEffect(() => {
    const activateUser = async () => {
      try {
        setIsLoading(true);
        setIsSuccess(true);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    
    activateUser()
  }, [])

  if (!isAuth) return <CircleLoading />;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-12 px-10 bg-white w-[450px] rounded-3xl">
        <Title tag="h3" className="text-center !text-blue-500">
          {TRANSLATE.ACTIVATE_ACCOUNT.TITLE}
        </Title>
        <div className="mt-5">
          <Content className="text-center">
            {TRANSLATE.ACTIVATE_ACCOUNT.DESCRIPTION}
          </Content>
        </div>
        {isLoading && (
          <div className="flex items-center justify-center gap-2 py-10">
            <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        )}
        {isError && (
          <div className="mt-5 text-center">
            <Content className="!text-red-500 !font-bold !text-2xl">
              {TRANSLATE.ACTIVATE_ACCOUNT.ERROR}
            </Content>
          </div>
        )}
        {isSuccess && (
          <div className="mt-5 text-center">
            <Link href="/" className="hover:underline text-blue-500">
              {TRANSLATE.ACTIVATE_ACCOUNT.GO_HOME}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}