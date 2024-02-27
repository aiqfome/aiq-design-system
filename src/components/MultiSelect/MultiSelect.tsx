import React from 'react'

import { MultiSelectFetchable } from './MultiSelectFetchable'
import { MultiSelectStatic } from './MultiSelectStatic'

type Item = {
  id: any
  name: string
  color?: string
}

export interface Props {
  maxWidth?: number | string
  filters?: {
    name: string
    allItems?: boolean
    clear?: boolean
    items?: number[]
    onClick?: any
  }[]
  onChange?: any
  value?: Item[]
  items: Item[]
  isLoading?: boolean
  isFetchable?: boolean
  placeholder?: string
  loadingMessage?: string
  emptyMessage?: string
  errorMessage?: string
  errorForm?: boolean
  isDependent?: boolean
  dependentMessage?: string
  disabled?: boolean
  removable?: boolean
}

export const MultiSelect: React.FC<Props> = ({
  isFetchable = false,
  ...props
}) => {
  if (isFetchable) {
    return <MultiSelectFetchable {...props} />
  }

  return <MultiSelectStatic {...props} />
}
