import React, { ReactElement } from 'react'

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
  function handleChangeMultiSelect(event) {
    console.log(event)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        maxWidth='800px'
        value={[items[0]]}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
        isLoading={false}
      />
    </Flex>
  )
}
