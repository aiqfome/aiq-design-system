import React from 'react'
import { MdHome, MdWork } from 'react-icons/md'

import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'
import { Link } from '../../atoms/Link'
import { Flex } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'

export default {
  component: Breadcrumb,
  title: 'molecules/Breadcrumb'
}

export const Basic: React.FC = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <MdHome />
      <Link marginLeft='5px' href='#'>
        início
      </Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href='#'>relatório</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href='#'>pedidos</Link>
    </BreadcrumbItem>
  </Breadcrumb>
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
    <Breadcrumb>
      <BreadcrumbItem>
        <MdHome />
        <Link marginLeft='5px' href='#'>
          início
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem overlay={menu}>
        <Link href='#'>relatório</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href='#'>pedidos</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithIcons: React.FC = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <MdHome />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <MdWork />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href='#'>pedidos</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Text>Teste</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
