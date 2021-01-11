import React from 'react'
import { fireEvent } from '@testing-library/react'

import { MultiSelect } from '../MultiSelect'
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

const filters = [
  { allItems: true, name: 'todas as cidades' },
  { items: [0, 1, 2, 3, 4], name: 'unidades próprias' },
  { clear: true, name: 'limpar cidades selecionadas' }
]

describe('MultiSelect', () => {
  it('should have to render without crashing', () => {
    const component = render(<MultiSelect items={items} />)
    const select = component.getByTestId('multiselect-static')

    expect(component).toBeTruthy()
    expect(select).toBeTruthy()
  })

  it('should have to render without crashing with isFetchable prop', () => {
    const component = render(<MultiSelect isFetchable items={items} />)
    const select = component.getByTestId('multiselect-fechable')

    expect(component).toBeTruthy()
    expect(select).toBeTruthy()
  })

  it('should render placeholder when have placeholder prop', () => {
    const content = 'My placeholder'
    const { getByTestId } = render(
      <MultiSelect items={items} placeholder={content} />
    )

    const input = getByTestId('multiselect-static').querySelector('input')

    expect(input).toHaveAttribute('placeholder', 'My placeholder')
  })

  it('should have svg when have loading prop', () => {
    const { getByTestId } = render(
      <MultiSelect isFetchable items={items} isLoading />
    )
    const select = getByTestId('multiselect-fechable')
    const svg = select.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('should have the same amount items of the array', () => {
    const { getByTestId, getAllByTestId } = render(
      <MultiSelect items={items} />
    )
    const select = getByTestId('select-input')

    fireEvent.click(select)
    expect(getAllByTestId('select-item').length).toBe(items.length)
  })

  it('should open dropdown when click him', () => {
    const { getByTestId, container } = render(<MultiSelect items={items} />)

    const select = getByTestId('select-input')
    fireEvent.click(select)

    const list = container.querySelectorAll('li')
    expect(list[0]).toBeVisible()
  })

  it('should keep open dropdown when click a item', () => {
    const { getByTestId, container } = render(<MultiSelect items={items} />)

    const select = getByTestId('select-input')
    fireEvent.click(select)
    let list = container.querySelectorAll('li')

    expect(list[0]).toBeVisible()
    fireEvent.click(list[0])

    list = container.querySelectorAll('li')
    expect(list.length).toBe(items.length - 1)
  })

  it('should call onChange when click on item in dropdown', () => {
    const handleOnClick = jest.fn()

    const { getByTestId, container } = render(
      <MultiSelect items={items} onChange={handleOnClick} />
    )

    const select = getByTestId('select-input')

    fireEvent.click(select)
    const list = container.querySelectorAll('li')
    fireEvent.click(list[0])

    expect(handleOnClick).toBeCalled()
  })

  it('should have the same amount filters of the array', () => {
    const { getAllByTestId } = render(
      <MultiSelect items={items} filters={filters} />
    )

    expect(getAllByTestId('select-filter').length).toBe(filters.length)
  })

  it('should have the same amount items of the array after the search', () => {
    const { getByTestId, container } = render(<MultiSelect items={items} />)

    fireEvent.change(getByTestId('select-input'), {
      target: { value: 'Maringá' }
    })

    const list = container.querySelectorAll('li')
    expect(list.length).toBe(1)
  })
})
