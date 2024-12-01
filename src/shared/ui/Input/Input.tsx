'use client'

import { BaseInput, type InputProps } from './BaseInput';

type InputWithLabelProps = InputProps & {
  label: string,
  errors?: undefined | string[];
}

export const Input = ({
  label,
  name,
  errors,
  ...rest
}: InputWithLabelProps) => {
  return (
    <label>
      <span className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </span>
      <BaseInput name={name} error={!!errors} {...rest} />
      {errors?.map(error => {
        return (
          <span className='block text-red-600 text-xs mt-1' key={error}>
            {error}
          </span>
        );
      })}
    </label>
  )
}
