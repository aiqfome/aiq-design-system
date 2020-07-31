import React from 'react'

import { Dropdown } from './Dropdown'
import { Flex } from '../Flex'

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
    <Flex variant='fullCentralized'>
      <Dropdown
        label={label}
        width={240}
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}

export const Opened: React.FC = () => {
  const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  const label = 'Dropdown'

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown
        label={label}
        opened={true}
        maxWidth={240}
        width={'100%'}
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}
