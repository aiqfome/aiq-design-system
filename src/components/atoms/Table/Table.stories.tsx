import React from 'react'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableCellHead
} from './index'

import { Flex } from '../Flex'

export default {
  component: Table,
  title: 'atoms/Table'
}

const itens = [
  {
    cod: '056',
    item: 'Cheeseburguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '057',
    item: 'Onion Burguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '058',
    item: 'Australia Burguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '059',
    item: 'Blumenal Burguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '060',
    item: 'Cheeseburguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '061',
    item: 'Onion Burguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '068',
    item: 'Australia Burguer',
    valor: 'R$ 22,00'
  },
  {
    cod: '056',
    item: 'Blumenal Burguer',
    valor: 'R$ 22,00'
  }
]

export const Basic: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
      <TableContainer title='BURGUERS'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellHead>cód </TableCellHead>
              <TableCellHead>item</TableCellHead>
              <TableCellHead>preço min.</TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map(item => (
              <TableRow key={item.cod}>
                <TableCell>{item.cod}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Flex>
  )
}
