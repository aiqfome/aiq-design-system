import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'

import { MultiSelect } from './MultiSelect'

import { createPageExport } from '../../utils/storybook'

import { IoIosArrowDown } from 'react-icons/io'

const aiqProps = [
  'maxWidth',
  'filters',
  'onChange',
  'value',
  'items',
  'selectedItemsLimit',
  'isLoading',
  'isFetchable',
  'placeholder',
  'loadingMessage',
  'emptyMessage',
  'errorMessage',
  'errorForm',
  'isDependent',
  'dependentMessage',
  'disabled',
  'removable'
]

export default createPageExport(MultiSelect, 'MultiSelect', aiqProps, {
  argTypes: {
    maxWidth: { control: 'text' },
    filters: { control: 'object' },
    value: { control: 'object' },
    items: { control: 'object' },
    selectedItemsLimit: { control: 'number' },
    isLoading: { control: 'boolean' },
    isFetchable: { control: 'number' },
    placeholder: { control: 'text' },
    loadingMessage: { control: 'text' },
    emptyMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    dependentMessage: { control: 'text' },
    errorForm: { control: 'boolean' },
    isDependent: { control: 'boolean' },
    disabled: { control: 'boolean' },
    removable: { control: 'boolean' }
  },
  args: {
    errorMessage: 'deu ruinzão aqui',
    placeholder: 'cidades do aiq',
    isLoading: false
  }
})

const items = [
  { id: 0, name: 'Maringá (ID 9457)' },
  { id: 1, name: 'Guarapuava (ID 9456)' },
  { id: 2, name: 'São Paulo  (ID 2557)' },
  { id: 3, name: 'Curitiba (ID 2558)' },
  { id: 4, name: 'Cruzeiro do Sul (ID 2258)' },
  { id: 5, name: 'Pato Branco (ID 2218)' },
  { id: 6, name: 'Prudentópolis (ID 9922)' },
  { id: 7, name: 'Campo Mourão (ID 2528)' },
  { id: 8, name: 'New York (ID 2527)' }
]

const filters = [
  { allItems: true, name: 'todas as cidades' },
  { items: [0, 1, 2, 3, 4], name: 'unidades próprias' },
  { clear: true, name: 'limpar cidades selecionadas' }
]

export const Basic = (args): ReactElement => {
  const [value, setValue] = useState([items[0]])

  function handleChangeMultiSelect({ selectedItems }) {
    setValue(selectedItems)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        value={value}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
        errorForm={value.length === 0}
        {...args}
      />
    </Flex>
  )
}

export const Removable = (args): ReactElement => {
  const [value, setValue] = useState([items[0]])

  function handleChangeMultiSelect({ selectedItems }) {
    setValue(selectedItems)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        value={value}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
        errorForm={value.length === 0}
        {...args}
      />
    </Flex>
  )
}
Removable.args = {
  removable: true
}

export const Disabled = (args): ReactElement => {
  const [value, setValue] = useState([items[0]])

  function handleChangeMultiSelect({ selectedItems }) {
    setValue(selectedItems)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        value={value}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
        errorForm={value.length === 0}
        {...args}
      />
    </Flex>
  )
}
Disabled.args = {
  disabled: true
}

export const DisabledWithoutElements = (args): ReactElement => {
  const [value, setValue] = useState([])

  function handleChangeMultiSelect({ selectedItems }) {
    setValue(selectedItems)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        value={value}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={[]}
        disabled
        {...args}
      />
    </Flex>
  )
}
DisabledWithoutElements.args = {
  disabled: true
}

export const WithSuffix = (args): ReactElement => {
  const [value, setValue] = useState([items[0]])

  function handleChangeMultiSelect({ selectedItems }) {
    setValue(selectedItems)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        value={value}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
        suffix={<IoIosArrowDown />}
        errorForm={value.length === 0}
        {...args}
      />
    </Flex>
  )
}
