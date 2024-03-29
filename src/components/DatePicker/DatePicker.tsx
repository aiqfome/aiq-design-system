import React from 'react'

import { Moment } from 'moment'

import { DatePickerRange } from './DatePickerRange'
import { DatePickerSingle } from './DatePickerSingle'

export interface Props {
  variant?: 'single' | 'range'
  value?: Array<Moment>
  name?: string
  errorMessage?: string
  errorForm?: boolean
  placeholder?: string
  onChange?: (startDate, endDate?: any) => void | undefined
}

export const DatePicker: React.FC<Props> = ({
  value,
  onChange,
  errorForm,
  placeholder,
  errorMessage,
  variant = 'single',
  ...props
}) => {
  if (variant === 'range') {
    return (
      <DatePickerRange
        value={value}
        onChange={onChange}
        errorForm={errorForm}
        placeholder={placeholder}
        errorMessage={errorMessage}
        {...props}
      />
    )
  }

  return (
    <DatePickerSingle
      value={value}
      onChange={onChange}
      errorForm={errorForm}
      placeholder={placeholder}
      errorMessage={errorMessage}
      {...props}
    />
  )
}
