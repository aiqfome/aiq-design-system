import { object, text } from '@storybook/addon-knobs'
import React, { useState } from 'react'
import { Flex } from '../Flex'
import { Select } from './Select'

import { MdSearch } from 'react-icons/md'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'label',
  'items',
  'isOpen',
  'variant',
  'prefix',
  'placeholder',
  'handleSelectedItemChange',
  'onChangeTextInput',
  'selectedItem',
  'autoComplete',
  'sufix',
  'isLoading',
  'errorMessage',
  'errorForm',
  'isFetchable',
  'inputProps',
  'loadingMessage',
  'emptyMessage',
  'defaultValue',
  'clearOnSelect',
  'isDependent',
  'dependentMessage'
]

export default createPageExport(Select, 'Select', aiqProps, {
  argTypes: {
    label: { control: 'text' },
    items: { control: 'object' },
    isOpen: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['outlined']
    },
    placeholder: { control: 'text' },
    autoComplete: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    errorMessage: { control: 'text' },
    errorForm: { control: 'boolean' },
    loadingMessage: { control: 'text' },
    emptyMessage: { control: 'text' },
    clearOnSelect: { control: 'boolean' },
    isDependent: { control: 'boolean' },
    dependentMessage: { control: 'text' }
  },
  args: {
    label: 'aiq-design-system'
  }
})

export const Basic = args => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  function handleClickItemSelect(item) {
    console.log(item)
  }

  return (
    <Select
      handleSelectedItemChange={handleClickItemSelect}
      items={object('items', itens)}
      {...args}
    />
  )
}

export const Outlined = args => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  return <Select items={object('items', itens)} {...args} />
}
Outlined.args = {
  variant: 'outlined'
}

export const AutocompleteFalse = args => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select mr='32px' items={object('items', itens)} {...args} />
      <Select
        selectedItem={selectedItem}
        autoComplete={false}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        items={object('items', itens)}
        label={text('label', 'aiq-design-system')}
      />
    </Flex>
  )
}
AutocompleteFalse.args = {
  variant: 'outlined',
  autoComplete: false
}

export const WithSufix = args => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        items={object('items', itens)}
        sufix={<MdSearch />}
        {...args}
      />
      <Select
        selectedItem={selectedItem}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        label={text('label', 'aiq-design-system')}
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
    </Flex>
  )
}
WithSufix.args = {
  variant: 'outlined'
}

export const Loading = args => {
  const itens = [
    { name: 'React', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'PHP', id: 3 },
    { name: 'HTML', id: 4 }
  ]
  const [selectedItem, setSelectedItem] = useState(itens[0])
  return (
    <Flex variant='fullCentralized'>
      <Select
        mr='32px'
        items={object('items', itens)}
        sufix={<MdSearch />}
        {...args}
      />
      <Select
        selectedItem={selectedItem}
        isLoading={true}
        handleSelectedItemChange={({ selectedItem }) =>
          setSelectedItem(selectedItem)
        }
        items={object('items', itens)}
        sufix={<MdSearch />}
      />
    </Flex>
  )
}
Loading.args = {
  variant: 'outlined',
  isLoading: true
}

export const Disabled = args => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  function handleClickItemSelect(item) {
    console.log(item)
  }

  return (
    <Select
      disabled={true}
      handleSelectedItemChange={handleClickItemSelect}
      items={object('items', itens)}
      variant='outlined'
      label={text('label', 'aiq-design-system')}
      {...args}
    />
  )
}
export const DisabledFetchable = args => {
  const itens = ['React', 'CSS', 'PHP', 'HTML']

  function handleClickItemSelect(item) {
    console.log(item)
  }

  return (
    <Select
      isFetchable
      disabled={true}
      handleSelectedItemChange={handleClickItemSelect}
      items={object('items', itens)}
      variant='outlined'
      label={text('label', 'aiq-design-system')}
      {...args}
    />
  )
}
