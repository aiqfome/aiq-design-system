import React from 'react'
import { MdHome, MdBookmark, MdStorage, MdExitToApp } from 'react-icons/md'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Flex } from '../../atoms/Flex'
import { Avatar } from '../../atoms/Avatar'
import { Text } from '../../atoms/Text'

export default {
  component: Sidebar,
  title: 'molecules/Sidebar',
  decorators: [withKnobs]
}

const sidebarData = {
  user: {
    name: 'juliano',
    email: 'test@aiqfome.com'
  },
  itens: [
    {
      icon: <MdHome size={18} />,
      name: 'dashboard',
      href: '/dashboard',
      badge: 1
    },
    {
      icon: <MdBookmark size={18} />,
      name: 'bookmark',
      href: '/pedidos',
      active: true
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
    },
    {
      icon: <MdExitToApp size={18} />,
      name: 'sair',
      callback: () => {
        console.log('logout')
      }
    }
  ]
}

const Header = () => {
  const user = sidebarData.user
  return (
    <Flex
      style={{
        overflowX: 'hidden'
      }}
      py='8px'
      alignItems='center'
    >
      <Avatar alt={user.name} mx='12px' />
    </Flex>
  )
}

export const Basic: React.FC = () => {
  return (
    <Router>
      <Flex backgroundColor='#E1E1E1' justifyContent='row'>
        <Sidebar
          header={<Header />}
          opened={boolean('opened', true)}
          data={sidebarData}
        />
        <h1>test</h1>
      </Flex>
    </Router>
  )
}
