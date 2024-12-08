'use client';

import { useCallback, useState } from 'react';

import { Title } from '@/shared/ui/Typography';
import { ToggleFormType } from '@/_pages/auth/ui/ToggleFormType';
import { TAB } from '@/shared/model/auth/constans';
import type { TabType } from '@/shared/model/auth/types';

import { AuthForm } from "./ui/AuthForm"
import { CONTENT } from './model/content';

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TAB.LOGIN)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleForm = useCallback(() => {
    if (isLoading) return;

    setActiveTab(prev => {
      if (prev === TAB.REGISTER) return TAB.LOGIN;
      return TAB.REGISTER;
    })
  }, [])

  return (
    <>
      <Title tag='h1'>
        {activeTab === TAB.LOGIN ? CONTENT.TITLE.LOGIN : CONTENT.TITLE.REGISTER}
      </Title>

      <AuthForm
        isRegister={activeTab === TAB.REGISTER}
        onLoading={setIsLoading}
      >
        <ToggleFormType
          activeTab={activeTab}
          toggleAction={toggleForm}
        />
      </AuthForm>
    </>
  )
}