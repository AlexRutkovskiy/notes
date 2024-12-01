'use client'

import clsx from 'clsx';

interface FormRowProps {
  children?: React.ReactNode
  multiple?: boolean
}

export const FormRow = ({
  children,
  multiple = false,
}: FormRowProps) => {
  return (
    <div className={clsx("mb-6 last-of-type:mb-0", multiple && "flex gap-6 items-start")}>
      {children}
    </div>
  )
}