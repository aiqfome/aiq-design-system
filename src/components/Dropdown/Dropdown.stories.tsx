import React from 'react'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'

import { Dropdown } from './Dropdown'
import { Flex } from '../Flex'

import brazil from '../../assets/flags/brasil.svg'
import chile from '../../assets/flags/chile.svg'
import paraguay from '../../assets/flags/paraguay.svg'
import uruguay from '../../assets/flags/uruguay.svg'

export default {
  component: Dropdown,
  title: 'Dropdown',
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

export const WithImages: React.FC = () => {
  const itens = [
    {
      label: <img width='24px' height='24px' src={brazil} />,
      value: 1
    },
    {
      label: <img src={chile} width='24px' height='24px' />,
      value: 2
    },
    {
      label: <img src={paraguay} width='24px' height='24px' />,
      value: 3
    },
    {
      label: <img src={uruguay} width='24px' height='24px' />,
      value: 4
    }
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
        itens={itens}
        onChange={handleChangeDropdown}
      />
    </Flex>
  )
}
