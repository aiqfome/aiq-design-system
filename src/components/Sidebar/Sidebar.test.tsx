import React from 'react'

import { Sidebar } from '../Sidebar'
import { render } from '../utils/test/render'

const sidebarData = [
  {
    name: 'dashboard',
    href: '/dashboard',
    badge: 1
  },
  {
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    name: 'bookmark',
    href: '/pedidos',
    active: true
  }
]

describe('Sidebar', () => {
  it('should have to render without crashing', () => {
    const component = render(<Sidebar opened data={[]} />)
    expect(component).toBeTruthy()
  })

  it('should have class when it is closed', () => {
    const { getByTestId } = render(<Sidebar data={[]} opened={false} />)
    const sidebar = getByTestId('sidebar')
    expect(sidebar).toHaveClass('hidden')
  })

  it('should have content when has header', () => {
    const { getByText } = render(<Sidebar data={[]} opened header='Header!' />)
    const div = getByText('Header!')
    expect(div).toBeTruthy()
  })

  it('should have the same amount items of the array', () => {
    const { getAllByTestId } = render(<Sidebar data={sidebarData} opened />)

    expect(getAllByTestId('sidebar-item').length).toBe(sidebarData.length)
  })
})
