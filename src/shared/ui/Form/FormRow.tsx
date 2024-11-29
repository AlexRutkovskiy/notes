'use client'

interface FormRowProps {
  children?: React.ReactNode
}

export const FormRow = ({
  children,
}: FormRowProps) => {
  return (
    <div className="mb-6 last-of-type:mb-0 ">
      {children}
    </div>
  )
}