import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Tab } from './Tab'
import { Tabs } from './Tabs'
import { render } from '../utils/test/render'

describe('Tabs', () => {
  it('should have to render without crashing', () => {
    const component = render(
      <Tabs>
        <Tab value={0} index={0}>
          Item One
        </Tab>
      </Tabs>
    )
    expect(component).toBeTruthy()
  })

  it('should have extra when has extra prop', () => {
    const { getByTestId } = render(
      <Tabs extra='extra'>
        <Tab value={0} index={0}>
          Item One
        </Tab>
      </Tabs>
    )

    const tabs = getByTestId('tabs')

    expect(tabs).toHaveTextContent('extra')
  })

  it('should call onChange when click on tab in tabs', () => {
    const handleOnClick = jest.fn()

    const { getByTestId } = render(
      <Tabs onChange={handleOnClick}>
        <Tab value={0} index={0}>
          Item One
        </Tab>
      </Tabs>
    )

    const container = getByTestId('tabs-container')
    fireEvent.click(container)

    expect(handleOnClick).toBeCalled()
  })

  it('should have the same amount of tabs from the children prop', () => {
    const { getAllByTestId } = render(
      <Tabs>
        <Tab value={0} index={0}>
          Item One
        </Tab>
        <Tab value={0} index={1}>
          Item Two
        </Tab>
      </Tabs>
    )

    const list = getAllByTestId('tab')
    expect(list).toHaveLength(2)
  })
})
