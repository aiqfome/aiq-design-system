import React from 'react'
import { Dropdown } from './Dropdown'
import { Flex } from '../Flex'

import brazil from '../../assets/flags/brazil.svg'
import chile from '../../assets/flags/chile.svg'
import paraguay from '../../assets/flags/paraguay.svg'
import uruguay from '../../assets/flags/uruguay.svg'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'label',
  'itens',
  'opened',
  'onChange',
  'disabled',
  'selected'
]

const itens = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 6 }
]

export default createPageExport(Dropdown, 'Dropdown', aiqProps, {
  argTypes: {
    label: { control: 'text' },
    itens: { control: 'object' },
    opened: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Dropdown',
    itens,
    width: 240
  }
})

export const Basic = args => {
  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown onChange={handleChangeDropdown} {...args} />
    </Flex>
  )
}

export const Opened = args => {
  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown onChange={handleChangeDropdown} {...args} />
    </Flex>
  )
}
Opened.args = {
  opened: true
}

export const Disabled = args => {
  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown onChange={handleChangeDropdown} {...args} />
    </Flex>
  )
}
Disabled.args = {
  disabled: true
}

export const Selected = args => {
  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown {...args} onChange={handleChangeDropdown} />
    </Flex>
  )
}
Selected.args = {
  selected: 2
}

export const WithImages = args => {
  function handleChangeDropdown(item: any) {
    console.log(item)
  }

  return (
    <Flex variant='fullCentralized'>
      <Dropdown {...args} onChange={handleChangeDropdown} />
    </Flex>
  )
}
WithImages.args = {
  itens: [
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
  ],
  selected: 2
}
