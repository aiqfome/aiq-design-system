import React from 'react'

import { Select } from './Select'

export default {
  component: Select,
  title: 'atoms/Select'
}

export const basic: React.FC = () => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']
  return <Select label='aiq-design-system' items={itens} />
}
