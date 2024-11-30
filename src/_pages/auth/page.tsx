'use client';

import { useCallback, useState, type ChangeEvent } from 'react';

import { Title } from '@/shared/ui/Typography';
import { Form, FormRow } from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { InputWithLabel } from '@/shared/ui/Input';

import { TAB, FIELD_NAMES, DEFAULT_FORM_STATE } from './model/constans';
import { ToggleFormType } from './ui/ToggleFormType';
import type { TabType, FORM_STATE } from './model/types';
import { CONTENT } from './model/content';


export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TAB.LOGIN)
  const [formState, setFormState ] = useState<FORM_STATE>(DEFAULT_FORM_STATE)

  const toggleForm = useCallback(() => {
    setActiveTab(prev => {
      if (prev === TAB.REGISTER) return TAB.LOGIN;
      return TAB.REGISTER;
    })
    setFormState({...DEFAULT_FORM_STATE})
  }, [])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(() => {}, [])

  return (
    <>
      <Title tag='h1'>
        {
          activeTab === TAB.LOGIN
            ? CONTENT.TITLE.LOGIN
            : CONTENT.TITLE.REGISTER
        }
      </Title>
      <Form onSubmit={handleSubmit} className="mt-6">
        {activeTab === TAB.REGISTER && (
          <FormRow>
            <InputWithLabel
              name={FIELD_NAMES.FULL_NAME}
              label={CONTENT.LABELS.FULL_NAME}
              value={formState[FIELD_NAMES.FULL_NAME]}
              onChange={handleChange}
            />
          </FormRow>
        )}
        <FormRow>
          <InputWithLabel
            name={FIELD_NAMES.EMAIL}
            label={CONTENT.LABELS.EMAIL}
            value={formState[FIELD_NAMES.EMAIL]}
            onChange={handleChange}
            type='email'
          />
        </FormRow>
        <FormRow>
          <InputWithLabel
            name={FIELD_NAMES.PASSWORD}
            label={CONTENT.LABELS.PASSWORD}
            value={formState[FIELD_NAMES.PASSWORD]}
            onChange={handleChange}
            type='password'
          />
        </FormRow>
        <FormRow>
          <Button fullWidth type="submit">
            {CONTENT.LABELS.SUBMIT}
          </Button>
        </FormRow>
        <FormRow>
          <ToggleFormType
            activeTab={activeTab}
            toggleAction={toggleForm}
          />
        </FormRow>
      </Form>
    </>
  )
}