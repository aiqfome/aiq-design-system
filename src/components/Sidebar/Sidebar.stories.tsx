import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { MdHome, MdBookmark, MdStorage, MdExitToApp } from 'react-icons/md'

import { Flex } from '../Flex'

import { Sidebar } from './Sidebar'
import { ItemObjectProps, ItemType } from './types'

import { createPageExport } from '../../utils/storybook'

const aiqProps = ['data', 'opened', 'header', 'onClickItem']

export default createPageExport(Sidebar, 'Sidebar', aiqProps, {
  argTypes: {
    data: { control: 'object' },
    opened: { control: 'boolean' }
  }
})

const sidebarData: ItemObjectProps[] = [
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
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'bookmark',
    href: '/pedidos',
    active: true
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
    items: [
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
    items: [
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
      },
      {
        name: 'Sub Item END',
        href: '/subItem'
      }
    ]
  },
  {
    icon: <MdBookmark size={18} />,
    name: 'aiqfome',
    href: 'https://aiqfome.com/',
    type: 'external' as ItemType
  },
  {
    icon: <MdExitToApp size={18} />,
    name: 'sair',
    callback: () => {
      console.log('logout')
    }
  }
]

const Header = () => {
  return (
    <Flex
      style={{
        overflowX: 'hidden'
      }}
      p='32px'
      alignItems='center'
    >
      Header
    </Flex>
  )
}

export const Basic = args => {
  return (
    <Router>
      <Flex backgroundColor='#E1E1E1' justifyContent='row'>
        <Sidebar {...args} />
        <h1>test</h1>
      </Flex>
    </Router>
  )
}
Basic.args = {
  opened: true,
  data: sidebarData,
  header: <Header />
}
