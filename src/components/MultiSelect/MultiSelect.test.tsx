import React from 'react'
import { fireEvent } from '@testing-library/react'

import { MultiSelect } from '../MultiSelect'
import { render } from '../utils/test/render'
import { IoIosArrowDown } from 'react-icons/io'

const greenColor = '#6EC531'

const items = [
  { id: 0, name: 'Maringá (ID 9457)', color: greenColor },
  { id: 1, name: 'Guarapuava (ID 9456)' },
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
    const handleOnClick = jest.fn()
    const { getByTestId, container } = render(
      <MultiSelect items={items} onChange={handleOnClick} />
    )

    const select = getByTestId('select-input')
    fireEvent.click(select)
    const list = container.querySelectorAll('li')

    expect(list[0]).toBeVisible()
    fireEvent.click(list[0])
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

  it('should be disabled when prop disabled is added', () => {
    const { getByTestId } = render(
      <MultiSelect items={items} disabled={true} />
    )

    const select = getByTestId('select-input')

    expect(select).toBeDisabled()
  })

  it('should have custom color when have color prop', () => {
    const { getByTestId } = render(
      <MultiSelect items={items} value={[items[0]]} />
    )

    const BadgeItem = getByTestId('select-selected-item')
    expect(BadgeItem).toHaveStyle({ backgroundColor: greenColor })
  })

  it('should show suffix when prop is provided', () => {
    const { container } = render(
      <MultiSelect
        items={items}
        value={[items[0]]}
        suffix={<IoIosArrowDown />}
      />
    )

    const suffix = container.querySelector('svg')

    expect(suffix).toBeInTheDocument()
  })

  it('should show limit message when the selected items limit is reached', () => {
    const { container } = render(
      <MultiSelect
        items={items}
        value={[items[0], items[1]]}
        suffix={<IoIosArrowDown />}
        selectedItemsLimit={2}
      />
    )

    const list = container.querySelectorAll('li')
    const firstItemText = list[0].textContent

    expect(list.length).toBe(1)
    expect(firstItemText).toContain('quantidade máxima atingida')
  })

  it('should show correct items result when search input is only numbers', () => {
    const { getByTestId, container } = render(<MultiSelect items={items} />)

    fireEvent.change(getByTestId('select-input'), {
      target: { value: '94' }
    })

    const list = container.querySelectorAll('li')
    expect(list.length).toBe(2)
  })
})
