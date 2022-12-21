import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'

import { MultiSelect } from './MultiSelect'

export default {
  component: MultiSelect,
  title: 'MultiSelect'
}

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

export const Basic: React.FC = (): ReactElement => {
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
        isLoading={false}
        placeholder='cidades do aiq'
        errorForm={value.length === 0}
        errorMessage='deu ruinzão aqui'
      />
    </Flex>
  )
}

export const Removable: React.FC = (): ReactElement => {
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
        isLoading={false}
        placeholder='cidades do aiq'
        errorForm={value.length === 0}
        errorMessage='deu ruinzão aqui'
        removable={true}
      />
    </Flex>
  )
}

export const Disabled: React.FC = (): ReactElement => {
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
        isLoading={false}
        placeholder='cidades do aiq'
        errorForm={value.length === 0}
        errorMessage='deu ruinzão aqui'
        disabled
      />
    </Flex>
  )
}
