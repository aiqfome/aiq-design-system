import React from 'react'

import { Props as BoxProps } from '../Box'

import { SelectFetchable } from './SelectFetchable'
import { SelectStatic } from './SelectStatic'

export type Props = BoxProps & {
  label?: string
  items?: Array<string | { id: any; name: any; select?: any }>
  isOpen?: boolean
  variant?: 'outlined'
  prefix?: any
  placeholder?: string
  handleSelectedItemChange?: (item: any) => void
  onChangeTextInput?: (text: string) => void
  selectedItem?: any
  autoComplete?: boolean
  sufix?: any
  isLoading?: boolean
  errorMessage?: string
  errorForm?: boolean
  isFetchable?: boolean
  inputProps?: any
  loadingMessage?: string
  emptyMessage?: string
  defaultValue?: any
  clearOnSelect?: boolean
  isDependent?: boolean
  disabled?: boolean
  dependentMessage?: string
}

export const Select = React.forwardRef<HTMLDivElement, Props>(
  ({ isFetchable, ...props }, ref) => {
    if (isFetchable) {
      return <SelectFetchable {...props} ref={ref} />
    }

    return <SelectStatic {...props} ref={ref} />
  }
)
