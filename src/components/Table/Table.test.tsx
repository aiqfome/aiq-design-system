import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Table } from './Table'
import { render } from '../utils/test/render'

const data = [
  {
    firstName: 'Joe',
    lastName: 'Dae'
  },
  {
    firstName: 'Tom',
    lastName: 'Tompson'
  },
  {
    firstName: 'Tomas',
    lastName: 'Jefferson'
  }
]

const columns = [
  {
    name: 'nome',
    accessor: 'firstName'
  },
  {
    name: 'sobrenome',
    accessor: 'lastName'
  }
]

describe('Table', () => {
  it('should have to render without crashing', () => {
    const component = render(<Table data={data} columns={columns} />)
    expect(component).toBeTruthy()
  })

  it('should have the same amout of columns from the array', () => {
    const { getAllByTestId } = render(<Table data={data} columns={columns} />)

    const list = getAllByTestId('table-head')
    expect(list).toHaveLength(columns.length)
  })

  it('should have the same amout of rows from the array', () => {
    const { getAllByTestId } = render(<Table data={data} columns={columns} />)

    const list = getAllByTestId('table-row')
    expect(list).toHaveLength(data.length + 1) // plus the thead row
  })

  it('should call onChange when click on row', () => {
    const handleOnClick = jest.fn()
    const { getAllByTestId } = render(
      <Table onClickRow={handleOnClick} data={data} columns={columns} />
    )

    const list = getAllByTestId('table-row')
    fireEvent.click(list[1])
    expect(handleOnClick).toBeCalled()
  })

  it('should call show expanded row when click on a row', () => {
    const { container, getAllByTestId } = render(
      <Table
        data={data}
        columns={columns}
        expandedRowRender={() => 'expanded row'}
      />
    )

    const list = getAllByTestId('table-row')
    fireEvent.click(list[1])
    expect(container).toHaveTextContent('expanded row')
  })
})
