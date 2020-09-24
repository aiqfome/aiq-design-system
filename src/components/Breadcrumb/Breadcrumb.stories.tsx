import React from 'react'
import { MdHome, MdWork } from 'react-icons/md'

import { Breadcrumb } from './Breadcrumb'
import { Link } from '../Link'
import { Flex } from '../Flex'
import { Text } from '../Text'

export default {
  component: Breadcrumb,
  title: 'Breadcrumb'
}

export const Basic: React.FC = () => (
  <Breadcrumb
    routes={[
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
    ]}
  />
)

export const Overlay: React.FC = () => {
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

  return (
    <Breadcrumb
      routes={[
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
      ]}
    />
  )
}

export const WithIcons: React.FC = () => {
  return (
    <Breadcrumb
      routes={[
        {
          icon: <MdHome />
        },
        {
          icon: <MdWork />,
          name: 'áreas'
        },
        {
          path: '#',
          name: 'pedidos'
        },
        {
          name: <Text>Teste</Text>
        }
      ]}
    />
  )
}
