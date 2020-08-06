import React from 'react'

import { Pagination } from './Pagination'

export default {
  component: Pagination,
  title: 'molecules/Pagination'
}

export const Basic: React.FC = () => {
  return <Pagination count={10} />
}
