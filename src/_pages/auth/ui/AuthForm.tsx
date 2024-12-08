'use client'

import { type ChangeEvent, useCallback, useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

import { Form, FormRow } from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';
import { DEFAULT_FORM_STATE, FIELD_NAMES } from '@/shared/model/auth/constans';
import { CONTENT } from '@/_pages/auth/model/content';
import { Button } from '@/shared/ui/Button';
import type { FORM_ERROR, FORM_STATE } from '@/shared/model/auth/types';
import { validateAuthForm } from '@/shared/model/auth/validation';
import { fetchApi } from '@/shared/api';
import { API_URLS } from '@/_pages/auth/model/constans';
import { getErrorMessage } from '@/shared/utils/helpers';

interface IAuthForm {
  isRegister?: boolean;
  onLoading?: (isLoading: boolean) => void;
  children?: React.ReactNode;
}

export const AuthForm = ({
  isRegister = false,
  onLoading,
  children,
}: IAuthForm) => {
  const [formState, setFormState ] = useState<FORM_STATE>(DEFAULT_FORM_STATE)
  const [errors, setErrors] = useState<FORM_ERROR>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setFormState({...DEFAULT_FORM_STATE})
    setErrors({})
  }, [isRegister])

  useEffect(() => {
    onLoading && onLoading(isLoading)
  }, [isLoading]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }))

    if(errors && errors[name]) {
      setErrors(prev => ({...prev, [name]: null}))
    }
  }, [errors])

  const handleSubmit = useCallback(async () => {
    const error = validateAuthForm(formState, isRegister)
    if (error) {
      setErrors(() => ({...error}))
      return;
    }

    try {
      setIsLoading(true)

      if (isRegister) {
        await fetchApi(API_URLS.REGISTER, {
          method: 'POST',
          body: JSON.stringify(formState)
        });

        setFormState(() => ({...DEFAULT_FORM_STATE}))
        toast.success(CONTENT.NOTIFICATION.CREATED_USER)
      } else {
        await signIn('credentials', {...formState, redirect: false})
      }
    } catch (e) {
      toast.error(getErrorMessage(e))
    } finally {
      setIsLoading(false)
    }
  }, [isRegister, formState])

  return (
    <Form onSubmit={handleSubmit} className="mt-6">
      {isRegister && (
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
      {children && <FormRow>{children}</FormRow>}
    </Form>
  )
}