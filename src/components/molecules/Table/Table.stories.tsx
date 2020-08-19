import React from 'react'

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableCellHead
} from './Table'

import { TableContainer } from './TableContainer'

import { Flex } from '../../atoms/Flex'

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
      <TableContainer>
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

export const WithTitle: React.FC = () => {
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

export const WithScrollbar: React.FC = () => {
  return (
    <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
      <TableContainer
        maxWidth='800px'
        margin='48px'
        height='400px'
        backgroundColor='#F5F5F5'
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCellHead>cód </TableCellHead>
              <TableCellHead>item</TableCellHead>
              <TableCellHead whiteSpace='nowrap'>preço min.</TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map(item => (
              <TableRow key={item.cod}>
                <TableCell>{item.cod}</TableCell>
                <TableCell width='100%'>{item.item}</TableCell>
                <TableCell whiteSpace='nowrap'>{item.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
            <TableCellHead whiteSpace='nowrap'>preço min.</TableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {itens.map(item => (
            <TableRow key={item.cod}>
              <TableCell>{item.cod}</TableCell>
              <TableCell width='100%'>{item.item}</TableCell>
              <TableCell whiteSpace='nowrap'>{item.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Flex>
  )
}
