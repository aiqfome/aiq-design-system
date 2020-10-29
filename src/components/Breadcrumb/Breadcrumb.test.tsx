import React from 'react'

import { MdHome } from 'react-icons/md'

import { fireEvent } from '@testing-library/react'

import { render } from '../utils/test/render'

import { Breadcrumb } from '../Breadcrumb'
import { Link } from '../Link'
import { Flex } from '../Flex'

describe('Breadcrumb', () => {
  it('should have to render without crashing', () => {
    const routes = [
      {
        name: 'início',
        icon: <MdHome />
      },
      {
        path: '#',
        name: 'relatório'
      },
      {
        path: '#',
        name: 'pedidos'
      }
    ]

    const component = render(<Breadcrumb routes={routes} />)
    expect(component).toBeTruthy()
  })

  it('should have the same number of items from the routes property', () => {
    const routes = [
      {
        name: 'início',
        icon: <MdHome />
      },
      {
        path: '#',
        name: 'relatório'
      },
      {
        path: '#',
        name: 'pedidos'
      }
    ]

    const { getAllByTestId } = render(<Breadcrumb routes={routes} />)
    expect(getAllByTestId('crumb-item').length).toBe(routes.length)
  })

  it('should show subitems when has mouse hover on item father', () => {
    const menu = (
      <Flex flexDirection='column'>
        <Link padding='4px' href='#'>
          Item 1
        </Link>
        <Link padding='4px' href='#'>
          Item 2
        </Link>
      </Flex>
    )
    const routes = [
      {
        name: 'início',
        icon: <MdHome />
      },
      {
        path: '#',
        overlay: menu,
        name: 'relatório'
      },
      {
        path: '#',
        name: 'pedidos'
      }
    ]

    const { getByTestId } = render(<Breadcrumb routes={routes} />)

    const overlayContent = getByTestId('overlay-content')
    expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-hidden')

    const crumbItemOverflow = getByTestId('crumb-item-overflow')
    fireEvent.mouseOver(crumbItemOverflow)
    expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-visible')

    fireEvent.mouseOut(crumbItemOverflow)
    expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-hidden')
  })

  it('should have the same number of links from the routes property ', () => {
    const routes = [
      {
        name: 'início',
        icon: <MdHome />
      },
      {
        path: '#',
        name: 'relatório'
      },
      {
        path: '#',
        name: 'pedidos'
      }
    ]

    const { getAllByTestId } = render(<Breadcrumb routes={routes} />)
    expect(getAllByTestId('crumb-item-link').length).toBe(
      routes.filter(route => route.path).length
    )
  })
})
