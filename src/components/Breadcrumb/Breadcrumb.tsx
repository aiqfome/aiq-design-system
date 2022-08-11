import React from 'react'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Link } from '../Link'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { BreadcrumbItem } from './BreadcrumbItem'

export interface Props {
  routes: {
    icon?: any
    name?: any
    path?: string
    type?: 'internal' | 'external'
    overlay?: any
  }[]
}

export interface PropsItem {
  children?: any
  overlay?: any
  className?: string
}

const BreadcrumbStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Breadcrumb: React.FC<Props> = ({ routes }) => {
  const crumbs: any[] = routes.filter(r => r.name || r.icon)

  return (
    <BreadcrumbStyled>
      {crumbs.length &&
        crumbs.map((crumb, index) => (
          <BreadcrumbItem
            data-testid='crumb-item'
            overlay={crumb.overlay}
            key={index}
          >
            {crumb.path ? (
              <Link
                data-testid='crumb-item-link'
                ml={crumb.icon ? '5px' : '0'}
                variant={crumb.type || 'internal'}
                href={crumb.path}
              >
                <Flex>
                  <Icon mr='5px'>{crumb.icon}</Icon>
                  {crumb.name}
                </Flex>
              </Link>
            ) : (
              <>
                {crumb.icon}
                <Text ml={crumb.icon ? '5px' : '0'} cursor='default'>
                  {crumb.name}
                </Text>
              </>
            )}
          </BreadcrumbItem>
        ))}
    </BreadcrumbStyled>
  )
}

Breadcrumb.defaultProps = {
  routes: []
}
