import React from 'react'

import { render } from '../../utils/test/render'

import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableBody } from './TableBody'

import { Flex } from '../../atoms/Flex'

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
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
