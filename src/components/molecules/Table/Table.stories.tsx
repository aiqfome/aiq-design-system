import React from 'react'

import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableBody } from './TableBody'

import { Flex } from '../../atoms/Flex'
import { Container } from '../Container'

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
          <TableCell>cód </TableCell>
          <TableCell flex={1}>item</TableCell>
          <TableCell>preço min.</TableCell>
        </TableHead>
        <TableBody>
          {itens.map(item => (
            <TableRow key={item.cod} hoverable>
              <TableCell>{item.cod}</TableCell>
              <TableCell flex={1}>{item.item}</TableCell>
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
            <TableCell>cód </TableCell>
            <TableCell>item</TableCell>
            <TableCell>preço min.</TableCell>
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

export const WithContainer: React.FC = () => {
  return (
    <Container title='My Table!'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>cód </TableCell>
            <TableCell>item</TableCell>
            <TableCell>preço min.</TableCell>
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
    </Container>
  )
}

export const OnlyTable: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>cód </TableCell>
            <TableCell>item</TableCell>
            <TableCell>preço min.</TableCell>
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
