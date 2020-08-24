import React from 'react'

import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableBody } from './TableBody'
import { TableCellHead } from './TableCellHead'

import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Button } from '../../atoms/Button'

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
    cod: '069',
    item: 'Blumenal Burguer',
    valor: 'R$ 22,00'
  }
]

export const Basic: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
      <Table>
        <TableHead>
          <TableCellHead>cód </TableCellHead>
          <TableCellHead>item</TableCellHead>
          <TableCellHead>preço min.</TableCellHead>
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
    </Flex>
  )
}

export const WithScrollbar: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
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
    </Flex>
  )
}

export const OnlyTable: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
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
    </Flex>
  )
}
