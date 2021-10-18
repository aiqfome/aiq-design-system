import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Select } from '.'
import { render } from '../utils/test/render'

const items = [
  { id: 0, name: 'Maringá' },
  { id: 1, name: 'Guarapuava' },
  { id: 2, name: 'São Paulo' },
  { id: 3, name: 'Curitiba' },
  { id: 4, name: 'Cruzeiro do Sul' },
  { id: 5, name: 'Pato Branco' },
  { id: 6, name: 'Prudentópolis' },
  { id: 7, name: 'Campo Mourão' },
  { id: 8, name: 'New York' }
]

describe('Select', () => {
  it('should have to render without crashing', () => {
    const component = render(<Select items={items} />)
    const select = component.getByTestId('select-static')

    expect(component).toBeTruthy()
    expect(select).toBeTruthy()
  })

  it('should have to render without crashing with isFetchable prop', () => {
    const component = render(<Select isFetchable items={items} />)
    const select = component.getByTestId('select-fechable')

    expect(component).toBeTruthy()
    expect(select).toBeTruthy()
  })

  it('should render placeholder when have placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(
      <Select items={items} placeholder={content} />
    )

    const input = getByTestId('select-static').querySelector('input')

    expect(input).toHaveAttribute('placeholder', 'My placeholder')
  })

  it('should have svg when have loading prop', () => {
    const { getByTestId } = render(
      <Select isFetchable items={items} isLoading />
    )
    const select = getByTestId('select-fechable')
    const svg = select.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('should have the same amount items of the array', () => {
    const { getByTestId, getAllByTestId } = render(<Select items={items} />)
    const select = getByTestId('input')

    fireEvent.click(select)
    expect(getAllByTestId('select-item').length).toBe(items.length)
  })

  it('should open dropdown when click him', () => {
    const { getByTestId, container } = render(<Select items={items} />)

    const select = getByTestId('input')
    fireEvent.click(select)

    const list = container.querySelectorAll('li')
    expect(list[0]).toBeVisible()
  })

  it('should close dropdown when click a item', () => {
    const { getByTestId, container } = render(<Select items={items} />)

    const select = getByTestId('input')
    fireEvent.click(select)
    let list = container.querySelectorAll('li')

    expect(list[0]).toBeVisible()
    fireEvent.click(list[0])

    list = container.querySelectorAll('li')
    expect(list).toHaveLength(0)
  })

  it('should call onChange when click on item in dropdown', () => {
    const handleOnClick = jest.fn()

    const { getByTestId, container } = render(
      <Select items={items} handleSelectedItemChange={handleOnClick} />
    )

    const select = getByTestId('input')

    fireEvent.click(select)
    const list = container.querySelectorAll('li')
    fireEvent.click(list[0])

    expect(handleOnClick).toBeCalled()
  })

  it('should have the same amount items of the array after the search', () => {
    const { getByTestId, container } = render(<Select items={items} />)

    fireEvent.change(getByTestId('input'), {
      target: { value: 'Maringá' }
    })

    const list = container.querySelectorAll('li')
    expect(list.length).toBe(1)
  })
})
