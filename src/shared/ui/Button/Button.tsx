'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode
  outline?: boolean
  danger?: boolean
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  outline,
  danger,
  fullWidth,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(`flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded min-h-[42px] transition`,
        fullWidth && 'w-full',
        outline && 'bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border-2 border-blue-500 hover:border-transparent',
        danger && 'bg-red-600 hover:bg-red-700',
        disabled && 'opacity-50 hover:bg-blue-500',
        disabled && outline && 'opacity-50 hover:bg-transparent hover:text-blue-500 hover:border-blue-500',
        disabled && danger && 'hover:bg-red-600'
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}