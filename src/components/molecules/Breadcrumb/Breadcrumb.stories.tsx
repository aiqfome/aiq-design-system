import React from 'react'
import { MdHome } from 'react-icons/md'

import { Breadcrumb, BreadcrumbItem } from './Breadcrumb'
import { Link } from '../../atoms/Link'

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
