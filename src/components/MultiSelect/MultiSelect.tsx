import React from 'react'
import PropTypes from 'prop-types'

import { MultiSelectFetchable } from './MultiSelectFetchable'
import { MultiSelectStatic } from './MultiSelectStatic'

type Item = {
  id: any
  name: string
}

export interface Props {
  maxWidth?: number | string
  filters?: {
    name: string
    allItems?: boolean
    clear?: boolean
    items?: number[]
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

MultiSelect.propTypes = {
  isFetchable: PropTypes.bool
}
