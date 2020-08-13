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
      email: 'teste@aiqfome.com'
    },
    itens: [
      {
        icon: <MdHome />,
        name: 'dashboard',
        href: '/dashboard'
      },
      {
        icon: <MdBookmark />,
        name: 'pedidos',
        href: '/pedidos'
      },
      {
        icon: <MdStorage />,
        name: 'lojas',
        itens: [
          {
            name: 'gerenciar lojas',
            href: '/gerenciar_lojas'
          },
          {
            name: 'adicionar loja',
            href: '/adicionar_lojas'
          },
          {
            name: 'lojas prospectas',
            href: '/gerenciar_lojas',
            badge: 18
          }
        ]
      },
      {
        icon: <MdStorage />,
        name: 'lojas',
        itens: [
          {
            name: 'gerenciar lojas',
            href: '/gerenciar_lojas'
          },
          {
            name: 'adicionar loja',
            href: '/adicionar_lojas'
          },
          {
            name: 'lojas prospectas',
            href: '/gerenciar_lojas'
          }
        ]
      },
      {
        icon: <MdBookmark />,
        name: 'pedidos',
        href: '/pedidos'
      },
      {
        icon: <MdBookmark />,
        name: 'pedidos',
        href: '/pedidos'
      },
      {
        icon: <MdBookmark />,
        name: 'pedidos',
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
