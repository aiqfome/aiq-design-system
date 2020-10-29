import React from 'react'

import { render } from '../utils/test/render'

import { Container } from './Container'
import { fireEvent } from '@testing-library/react'

describe('Container', () => {
  it('should have to render without crashing', () => {
    const component = render(<Container />)
    expect(component).toBeTruthy()
  })

  it('should have a content when have a children', () => {
    const content = 'My Content'
    const { getByTestId } = render(<Container>{content}</Container>)

    expect(getByTestId('container')).toHaveTextContent(content)
  })

  it('should have a title when have prop title', () => {
    const content = 'My Content'
    const { getByTestId } = render(
      <Container title='My title'>{content}</Container>
    )

    const textContainer = getByTestId('container-text')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My title')
  })

  it('should have a header when have prop header', () => {
    const Header = () => <span data-testid='container-header'>TESTE</span>
    const content = 'My Content'
    const { getByTestId } = render(
      <Container header={<Header />}>{content}</Container>
    )

    const header = getByTestId('container-header')
    expect(header).toBeTruthy()
  })

  it('should have the same amount tabs of the array', () => {
    const tabs = [
      {
        index: 0,
        content: 'pizza'
      },
      {
        index: 1,
        content: 'burguer'
      }
    ]

    const { getAllByTestId } = render(<Container tabs={tabs} tabIndex={0} />)
    const tabsItem = getAllByTestId('container-tab-item')
    expect(tabsItem.length).toBe(tabs.length)
  })

  it('should have call onChangeTab when click on tab and prop tabs does not null', () => {
    const handleOnchange = jest.fn()
    const tabs = [
      {
        index: 0,
        content: 'pizza'
      },
      {
        index: 1,
        content: 'burguer'
      }
    ]

    const { getAllByTestId } = render(
      <Container tabs={tabs} tabIndex={0} onChangeTab={handleOnchange} />
    )
    const tabsItem = getAllByTestId('container-tab-item')
    fireEvent.click(tabsItem[0])
    expect(handleOnchange).toHaveBeenCalled()
  })

  it('should have a tab extra when have prop tabsExtra and tabs', () => {
    const tabsExtra = 'Test tabsExtra'

    const tabs = [
      {
        index: 0,
        content: 'pizza'
      },
      {
        index: 1,
        content: 'burguer'
      }
    ]

    const { getByTestId } = render(
      <Container
        tabs={tabs}
        tabIndex={0}
        title='My title'
        tabsExtra={tabsExtra}
      />
    )

    const container = getByTestId('container-tab')

    expect(container).toHaveTextContent(tabsExtra)
  })
})
