import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'

import { MultiSelect } from './MultiSelect'

import { createPageExport } from '../../utils/storybook'

const aiqProps = [
  'maxWidth',
  'filters',
  'onChange',
  'value',
  'items',
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
  { id: 0, name: 'Maringá' },
  { id: 1, name: 'Guarapuava' },
  { id: 2, name: 'São Paulo' },
  { id: 3, name: 'Curitiba' },
  { id: 4, name: 'Cruzeiro do Sul' },
  { id: 5, name: 'Pato Branco' },
  { id: 6, name: 'Prudentópolis' },
  { id: 7, name: 'Campo Mourão' },
  { id: 8, name: 'New York' }
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
