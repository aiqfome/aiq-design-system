import React from 'react'
import { MdHome, MdWork } from 'react-icons/md'

import { Breadcrumb } from './Breadcrumb'
import { Link } from '../../atoms/Link'
import { Flex } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'

export default {
  component: Breadcrumb,
  title: 'molecules/Breadcrumb'
}

export const Basic: React.FC = () => (
  <Breadcrumb
    routes={[
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
      showHome={false}
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
