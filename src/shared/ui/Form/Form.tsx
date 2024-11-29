'use client'

import { useCallback } from 'react';

interface FormProps {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  className?: string
}

export const Form = ({ children, onSubmit, ...rest }: FormProps) => {

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e)
  }, [onSubmit])

  return (
    <form onSubmit={handleSubmit} {...rest}>
      { children }
    </form>
  )
}