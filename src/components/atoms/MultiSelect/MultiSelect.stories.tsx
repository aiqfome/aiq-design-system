import React, { ReactElement } from 'react'

import { Flex } from '../Flex'
import { Box } from '../Box'

import { MultiSelect } from './MultiSelect'

export default {
  component: MultiSelect,
  title: 'atoms/MultiSelect'
}

const itens = [
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

export const Basic: React.FC = (): ReactElement => {
  return (
    <Flex variant='fullCentralized'>
      <MultiSelect maxWidth='250px' itens={itens} />
    </Flex>
  )
}
