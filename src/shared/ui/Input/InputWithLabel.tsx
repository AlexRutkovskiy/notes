'use client'

import { Input, type InputProps } from './Input';

type InputWithLabelProps = InputProps & {
  label: string,
}

export const InputWithLabel = ({
  label,
  name,
  ...rest
}: InputWithLabelProps) => {
  return (
    <label>
      <span className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </span>
      <Input name={name} {...rest} />
    </label>
  )
}
