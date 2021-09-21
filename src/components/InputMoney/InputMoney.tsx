import React, { InputHTMLAttributes } from 'react'

import { InputNumber } from '../InputNumber'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string | number
  sufix?: any
  prefix?: any
  variant?: 'outlined' | 'default'
  placeholder?: string
  containerProps?: any

  boxProps?: any
  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
  mask?: string
  nativeAutoComplete?: 'on' | 'disabled'

  onChange?: any
}

export const InputMoney: React.FC<Props> = props => {
  const numericOptions = {
    decimalPlaces: 2,
    allowDecimalPadding: true,
    currencySymbol: 'R$ '
  }

  return <InputNumber {...numericOptions} {...props} />
}
