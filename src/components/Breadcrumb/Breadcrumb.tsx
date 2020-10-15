import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexProps } from 'styled-system'
import { MdArrowDropDown } from 'react-icons/md'

import { Flex } from '../Flex'
import { Link } from '../Link'
import { Text } from '../Text'
import { Icon } from '../Icon'

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
}

const BreadcrumbStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const BreadcrumbItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
      content: '';
    }
  }

  &:after {
    margin-right: 8px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.darkGrey};
    content: ' / ';
  }
`

const OverlayStyled = styled(Flex)`
  position: relative;
  & > div {
    opacity: 0;
    visibility: hidden;
    transition: opacity 600ms, visibility 600ms;
  }

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

const OverlayContentStyled = styled(Flex)<FlexProps>`
  position: absolute;
  top: 18px;
  width: max-content;
  background: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

const BreadcrumbItem: React.FC<PropsItem> = ({ overlay, children }) => {
  if (overlay) {
    return (
      <BreadcrumbItemStyled>
        <OverlayStyled>
          {children}
          <MdArrowDropDown />

          <OverlayContentStyled>{overlay}</OverlayContentStyled>
        </OverlayStyled>
      </BreadcrumbItemStyled>
    )
  }

  return <BreadcrumbItemStyled>{children}</BreadcrumbItemStyled>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.any,
  overlay: PropTypes.any
}

export const Breadcrumb: React.FC<Props> = ({ routes }) => {
  const crumbs: any[] = routes.filter(r => r.name || r.icon)

  return (
    <BreadcrumbStyled>
      {crumbs.length &&
        crumbs.map((crumb, index) => (
          <BreadcrumbItem overlay={crumb.overlay} key={index}>
            {crumb.path ? (
              <Link
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

Breadcrumb.propTypes = {
  routes: PropTypes.array.isRequired
}
