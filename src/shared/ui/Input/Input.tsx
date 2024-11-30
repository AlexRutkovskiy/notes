'use client'

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export type InputProps = {
  name: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  name,
  id,
  disabled,
  ...rest
}: InputProps) => {
  return (
    <input
      className={clsx(`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-blue-700 min-h-[42px]`,
        disabled && 'text-gray-400 focus:outline-none',
      )}
      disabled={disabled}
      name={name}
      id={id}
      autoComplete='off'
      {...rest}
    />
  )
}