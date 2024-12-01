'use client';

import { useCallback, useState, type ChangeEvent } from 'react';

import { Title } from '@/shared/ui/Typography';
import { Form, FormRow } from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { TAB, FIELD_NAMES, DEFAULT_FORM_STATE } from '@/shared/model/auth/constans';
import { validateAuthForm } from '@/shared/model/auth/validation';
import type { TabType, FORM_STATE, FORM_ERROR } from '@/shared/model/auth/types';

import { ToggleFormType } from './ui/ToggleFormType';
import { CONTENT } from './model/content';


export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TAB.LOGIN)
  const [formState, setFormState ] = useState<FORM_STATE>(DEFAULT_FORM_STATE)
  const [errors, setErrors] = useState<FORM_ERROR>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleForm = useCallback(() => {
    if (isLoading) return;

    setActiveTab(prev => {
      if (prev === TAB.REGISTER) return TAB.LOGIN;
      return TAB.REGISTER;
    })
    setFormState({...DEFAULT_FORM_STATE})
    setErrors({})
  }, [])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(() => {
    setErrors(() => ({}))

    const error = validateAuthForm(formState, activeTab)
    if (error) {
      setErrors(() => ({...error}))
      return;
    }

    setIsLoading(true)
  }, [activeTab])

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
            <Input
              name={FIELD_NAMES.FULL_NAME}
              label={CONTENT.LABELS.FULL_NAME}
              value={formState[FIELD_NAMES.FULL_NAME]}
              onChange={handleChange}
              errors={errors[FIELD_NAMES.FULL_NAME]}
              disabled={isLoading}
            />
          </FormRow>
        )}
        <FormRow>
          <Input
            name={FIELD_NAMES.EMAIL}
            label={CONTENT.LABELS.EMAIL}
            value={formState[FIELD_NAMES.EMAIL]}
            onChange={handleChange}
            errors={errors[FIELD_NAMES.EMAIL]}
            disabled={isLoading}
            type='email'
          />
        </FormRow>
        <FormRow>
          <Input
            name={FIELD_NAMES.PASSWORD}
            label={CONTENT.LABELS.PASSWORD}
            value={formState[FIELD_NAMES.PASSWORD]}
            onChange={handleChange}
            errors={errors[FIELD_NAMES.PASSWORD]}
            disabled={isLoading}
            type='password'
          />
        </FormRow>
        <FormRow>
          <Button fullWidth type="submit" disabled={isLoading}>
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