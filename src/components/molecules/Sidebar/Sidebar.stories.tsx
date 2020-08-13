import React from 'react'
import { MdHome, MdBookmark, MdStorage } from 'react-icons/md'

import { Sidebar } from './Sidebar'

export default {
  component: Sidebar,
  title: 'molecules/Sidebar'
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
            href: '/gerenciar_lojas'
          }
        ]
      }
    ]
  }

  return <Sidebar opened={true} data={sidebarData} />
}
