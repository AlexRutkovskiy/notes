'use client';

import { useCallback, useState } from 'react';

import { Title } from '@/shared/ui/Typography';
import { Form, FormRow } from '@/shared/ui/Form';

import { TAB } from './model/constans';
import { CONTENT } from './model/content';
import type { TabType } from './model/types';

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TAB.LOGIN)

  const toggleForm = useCallback(() => {
    setActiveTab(prev => {
      if (prev === TAB.REGISTER) return TAB.LOGIN;
      return TAB.REGISTER;
    })
  }, [])

  const handleSubmit = useCallback(() => {}, [])

  return (
    <div>
      <Title tag='h1'>{CONTENT.TITLE.LOGIN}</Title>
      <Form onSubmit={handleSubmit} className="mt-6">
        {activeTab === TAB.REGISTER && (
          <FormRow>Register form</FormRow>
        )}
        <FormRow>Login form</FormRow>
        <FormRow>Login form</FormRow>
        <FormRow>Submit</FormRow>
        <FormRow>
          Have account
        </FormRow>
      </Form>
    </div>
  )
}