import React from 'react'

import { TimePickerAll } from './TimePickerAll'
import { TimePickerMinSec } from './TimePickerMinSec'

export interface Props {
  value?: any
  sufix?: any
  name?: string
  label?: string
  errorForm?: boolean
  hasSeconds?: boolean
  placeholder?: string
  errorMessage?: string
  type?: 'minSec' | 'all'
  maxWidth?: string | number
  onChange?: (e: any) => void
  variant?: 'outlined' | 'default'
  onChangeInput?: (e: any) => void
  getValue?: (input: any) => string
}

export const TimePicker: React.FC<Props> = ({ type = 'all', ...props }) => {
  if (type === 'minSec') {
    return <TimePickerMinSec {...props} />
  }

  return <TimePickerAll {...props} />
}

TimePicker.displayName = 'TimePicker'
