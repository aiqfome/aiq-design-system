import React from 'react'

import { render } from '../utils/test/render'

import { Flex } from '../Flex'
import { Table } from './Table'

describe('must match with the previous snapshot', () => {
  const data = [
    {
      col1: 'Hello',
      col2: 'World'
    },
    {
      col1: 'react-table',
      col2: 'rocks'
    },
    {
      col1: 'whatever',
      col2: 'you want'
    }
  ]

  const columns = [
    {
      Header: 'Column 1',
      accessor: 'col1'
    },
    {
      Header: 'Column 2',
      accessor: 'col2'
    }
  ]

  test('snapshot renders', () => {
    const component = render(
      <Flex variant='fullCentralized' backgroundColor='#F5F5F5'>
        <Table data={data} columns={columns} />
      </Flex>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
