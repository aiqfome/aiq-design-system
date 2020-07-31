import React from 'react'

import { Dropdown } from './Dropdown'

export default {
  component: Dropdown,
  title: 'atoms/Dropdown'
}

export const Basic: React.FC = () => {
  const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  const label = 'Dropdown'

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Dropdown
      label={label}
      maxWidth={240}
      itens={itens}
      onChange={handleChangeDropdown}
    />
  )
}
