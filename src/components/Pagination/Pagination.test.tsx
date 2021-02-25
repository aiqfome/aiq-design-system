import React from 'react'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Pagination } from '../Pagination'

describe('Pagination', () => {
  it('should have to render without crashing', () => {
    const component = render(<Pagination />)
    expect(component).toBeTruthy()
  })

  it('should not render when count is zero', () => {
    const { container } = render(<Pagination count={0} />)
    const paginationsItens = container.querySelectorAll('.__pagination-item')

    expect(paginationsItens.length).toBe(0)
  })

  it('should render only a page when count is 1', () => {
    const { container } = render(<Pagination count={1} />)
    const paginationsItens = container.querySelectorAll('.__pagination-item')

    expect(paginationsItens.length).toBe(3)
  })

  it('should call onChange when click in next page or return page ', () => {
    const handleOnChange = jest.fn()

    const { getByTestId } = render(
      <Pagination count={10} onChange={handleOnChange} />
    )

    const itemNext = getByTestId('pagination-item-next')
    const itemReturn = getByTestId('pagination-item-return')
    const itemPage10 = getByTestId('pagination-item-10')

    fireEvent.click(itemNext)
    expect(handleOnChange).toHaveBeenLastCalledWith(2)
    fireEvent.click(itemPage10)
    expect(handleOnChange).toHaveBeenLastCalledWith(10)
    fireEvent.click(itemReturn)
    expect(handleOnChange).toHaveBeenLastCalledWith(9)
    expect(handleOnChange).toHaveBeenCalledTimes(3)
  })

  it('should not call onChange when click in next page or return page and paginations is disabled', () => {
    const handleOnChange = jest.fn()

    const { getByTestId } = render(
      <Pagination count={10} disabled={true} onChange={handleOnChange} />
    )

    const itemNext = getByTestId('pagination-item-next')
    const itemReturn = getByTestId('pagination-item-return')
    const itemPage10 = getByTestId('pagination-item-10')

    fireEvent.click(itemNext)
    fireEvent.click(itemPage10)
    fireEvent.click(itemReturn)

    expect(handleOnChange).toHaveBeenCalledTimes(0)
  })

  it('should have class __pagination-size-default when size is null', () => {
    const { container } = render(<Pagination count={10} />)
    const paginatorItem = container.querySelector('.__pagination-item')

    expect(paginatorItem).toHaveClass('__pagination-size-default')
  })

  it('should have class __pagination-size-small when size is small', () => {
    const { container } = render(<Pagination size={'small'} count={10} />)
    const paginatorItem = container.querySelector('.__pagination-item')

    expect(paginatorItem).toHaveClass('__pagination-size-small')
  })

  it('should have class __pagination-size-large when size is large', () => {
    const { container } = render(<Pagination size='large' count={10} />)
    const paginatorItem = container.querySelector('.__pagination-item')

    expect(paginatorItem).toHaveClass('__pagination-size-large')
  })

  it('should not have infinite pages when variant is default', () => {
    const handleOnChange = jest.fn()

    const { getByTestId } = render(
      <Pagination count={8} onChange={handleOnChange} />
    )

    const itemNext = getByTestId('pagination-item-next')

    let index = 0
    while (index < 100) {
      index++
      fireEvent.click(itemNext)
    }
    expect(handleOnChange).not.toHaveBeenLastCalledWith(101)
    expect(handleOnChange).toHaveBeenLastCalledWith(8)
  })
})
