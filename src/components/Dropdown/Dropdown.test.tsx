import React from 'react'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('should have to render without crashing', () => {
    const component = render(<Dropdown label='Dropdown' itens={[]} />)
    expect(component).toBeTruthy()
  })

  it('should open Dropdown when click him', () => {
    const { getByTestId, container } = render(
      <Dropdown label='Dropdown' itens={[{ label: 'item', value: 1 }]} />
    )

    const dropdown = getByTestId('dropdown')

    fireEvent.click(dropdown)

    const itemsDropdown = container.querySelectorAll('li')

    expect(itemsDropdown[0]).toBeVisible()
  })

  it('should close Dropdown when click a item', () => {
    const { getByTestId, container } = render(
      <Dropdown label='Dropdown' itens={[{ label: 'item', value: 1 }]} />
    )

    const dropdown = getByTestId('dropdown')
    fireEvent.click(dropdown)
    let itemsDropdown = container.querySelectorAll('li')

    expect(itemsDropdown[0]).toBeVisible()
    fireEvent.click(itemsDropdown[0])
    itemsDropdown = container.querySelectorAll('li')
    expect(itemsDropdown.length).toBe(0)
  })

  it('should call onChange when click on item in dropdown', () => {
    const handleOnClick = jest.fn()

    const itens = [{ label: 'item', value: 1 }]

    const { getByTestId, container } = render(
      <Dropdown label='Dropdown' onChange={handleOnClick} itens={itens} />
    )

    const dropdown = getByTestId('dropdown')

    fireEvent.click(dropdown)
    const itemsDropdown = container.querySelectorAll('li')
    fireEvent.click(itemsDropdown[0])

    expect(handleOnClick).toBeCalled()
    expect(handleOnClick).toHaveBeenLastCalledWith(itens[0])
  })
})
