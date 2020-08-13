import React from 'react'
import { MdHome, MdBookmark, MdStorage } from 'react-icons/md'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  component: Sidebar,
  title: 'molecules/Sidebar',
  decorators: [withKnobs]
}

export const Basic: React.FC = () => {
  const sidebarData = {
    user: {
      name: 'juliano',
      email: 'test@aiqfome.com'
    },
    itens: [
      {
        icon: <MdHome size={18} />,
        name: 'dashboard',
        href: '/dashboard'
      },
      {
        icon: <MdBookmark size={18} />,
        name: 'bookmark',
        href: '/pedidos'
      },
      {
        icon: <MdStorage size={18} />,
        name: 'store',
        itens: [
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem',
            badge: 18
          }
        ]
      },
      {
        icon: <MdStorage size={18} />,
        name: 'itens',
        itens: [
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          },
          {
            name: 'Sub Item',
            href: '/subItem'
          }
        ]
      },
      {
        icon: <MdBookmark size={18} />,
        name: 'aiqfome',
        href: 'https://aiqfome.com/',
        type: 'external'
      }
    ]
  }

  return (
    <Router>
      <Sidebar opened={boolean('opened', true)} data={sidebarData} />
    </Router>
  )
}
