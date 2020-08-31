import React, { ReactElement, useState } from 'react'

import { Flex } from '../Flex'

import { MultiSelect } from './MultiSelect'

export default {
  component: MultiSelect,
  title: 'atoms/MultiSelect'
}

const items = [
  { value: 0, label: 'Maringá' },
  { value: 1, label: 'Guarapuava' },
  { value: 2, label: 'São Paulo' },
  { value: 3, label: 'Curitiba' },
  { value: 4, label: 'Cruzeiro do Sul' },
  { value: 5, label: 'Pato Branco' },
  { value: 6, label: 'Prudentópolis' },
  { value: 7, label: 'Campo Mourão' },
  { value: 8, label: 'New York' }
]

const filters = [
  { allItems: true, label: 'todas as cidades' },
  { items: [0, 1, 2, 3, 4], label: 'unidades próprias' },
  { clear: true, label: 'limpar cidades selecionadas' }
]

export const Basic: React.FC = (): ReactElement => {
  const [selectedItens, setSelectedItens] = useState([])

  function handleChangeMultiSelect(event) {
    console.log(event)
  }

  return (
    <Flex variant='fullCentralized'>
      <MultiSelect
        maxWidth='250px'
        value={selectedItens}
        onChange={handleChangeMultiSelect}
        filters={filters}
        items={items}
      />
    </Flex>
  )
}
