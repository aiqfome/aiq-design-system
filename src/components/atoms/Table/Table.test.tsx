import React from 'react'

import { render } from '../../utils/test/render'

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableCellHead
} from './Table'

import { TableContainer } from './TableContainer'

import { Flex } from '../Flex'

describe('must match with the previous snapshot', () => {
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

  test('snapshot renders', () => {
    const component = render(
      <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
        <TableContainer
          maxWidth='800px'
          margin='48px'
          height='400px'
          backgroundColor='#F5F5F5'
          title='BURGUERS'
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
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
