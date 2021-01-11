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

  it('should have the same number of items from the itens property', () => {
    const itens = [
      { label: 'item1', value: 1 },
      { label: 'item2', value: 2 },
      { label: 'item3', value: 3 },
      { label: 'item4', value: 4 }
    ]

    const { container, getByTestId } = render(
      <Dropdown label='Dropdown' itens={itens} />
    )

    const dropdown = getByTestId('dropdown')
    fireEvent.click(dropdown)

    const itemsDropdown = container.querySelectorAll('li')
    expect(itemsDropdown.length).toBe(4)
  })

  it('should not can to open when dropdown is disabled', () => {
    const handleOnClick = jest.fn()

    const itens = [
      { label: 'item1', value: 1 },
      { label: 'item2', value: 2 },
      { label: 'item3', value: 3 },
      { label: 'item4', value: 4 }
    ]

    const { container, getByTestId } = render(
      <Dropdown
        label='Dropdown'
        onChange={handleOnClick}
        disabled={true}
        itens={itens}
      />
    )

    const dropdown = getByTestId('dropdown')
    fireEvent.click(dropdown)

    const itemsDropdown = container.querySelectorAll('li')
    expect(itemsDropdown.length).toBe(0)
    expect(handleOnClick).not.toBeCalled()
  })
})
