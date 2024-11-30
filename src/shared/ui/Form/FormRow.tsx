'use client'

import clsx from 'clsx';

interface FormRowProps {
  children?: React.ReactNode
  double?: boolean
}

export const FormRow = ({
  children,
  double = false,
}: FormRowProps) => {
  return (
    <div className={clsx("mb-6 last-of-type:mb-0",
        double && "flex gap-6 items-start"
      )}
    >
      {children}
    </div>
  )
}