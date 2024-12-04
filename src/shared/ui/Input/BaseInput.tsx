'use client'

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export type InputProps = {
  name: string;
  id?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = ({
  name,
  id,
  disabled,
  error = false,
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        className={clsx(`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
          focus:outline-blue-700 min-h-[42px]`,
          disabled && 'text-gray-400 focus:outline-none',
          error && 'border-red-600',
        )}
        disabled={disabled}
        name={name}
        id={id}
        autoComplete='off'
        {...rest}
      />
    </>
  )
}