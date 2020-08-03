import React from 'react'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'

import { Dropdown } from './Dropdown'
import { Flex } from '../Flex'

export default {
  component: Dropdown,
  title: 'atoms/Dropdown',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  const itens = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5 },
    { label: 'Item 6', value: 6 }
  ]

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown
        label={text('label', 'Dropdown')}
        disabled={boolean('disabled', false)}
        itens={object('itens', itens)}
        width={240}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}

export const Opened: React.FC = () => {
  const itens = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5 },
    { label: 'Item 6', value: 6 }
  ]
  const label = 'Dropdown'

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown
        label={label}
        opened={true}
        width={240}
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}

export const Disabled: React.FC = () => {
  const itens = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5 },
    { label: 'Item 6', value: 6 }
  ]
  const label = 'Dropdown'

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown
        disabled={true}
        label={label}
        width={240}
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}

export const Selected: React.FC = () => {
  const itens = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 },
    { label: 'Item 4', value: 4 },
    { label: 'Item 5', value: 5 },
    { label: 'Item 6', value: 6 }
  ]
  const label = 'Dropdown'

  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown
        selected={2}
        label={label}
        width={240}
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}
