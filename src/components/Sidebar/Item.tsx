import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import { Text } from '../Text'
import { Flex } from '../Flex'
import { Link } from '../Link'
import { Icon } from '../Icon'
import { Badge } from '../Badge'

import { SubItens } from './SubItens'

interface ItemProps {
  item: any
  sidebarOpened: boolean
  heightScrolledToTop?: number
}

interface ItemStyledProps {
  sidebarOpened?: boolean
  active?: boolean
}

const ItemStyled = styled.li<ItemStyledProps>`
  position: relative;
  transition: 0.3ms;

  ${({ theme, active }) =>
    active &&
    css`
      svg {
        color: ${theme.colors.primary};
      }
    `}

  &:hover {
    cursor: pointer;

    ${({ theme, sidebarOpened }) =>
      !sidebarOpened &&
      css`
        svg {
          color: ${theme.colors.primary};
        }
      `};

    background: ${({ theme, sidebarOpened }) =>
      sidebarOpened ? theme.colors.lightGrey : theme.colors.white};
  }
`

const LinkStyled = styled(Link)`
  padding: 16px 22px;
  display: flex;
  flex-direction: row;
`

export const Item: React.FC<ItemProps> = ({
  item,
  sidebarOpened = false,
  heightScrolledToTop,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  function computeBadgeAllItens(item) {
    let value = 0

    if (item.itens) {
      item.itens.forEach(subItem => {
        if (subItem.badge) value += subItem.badge
      })
    }

    if (item.badge) {
      value += item.badge
    }

    return value
  }

  const badgeAllItens = useMemo(() => computeBadgeAllItens(item), [item])

  function changeVisibilitySubItem() {
    if (sidebarOpened) {
      setIsOpen(!isOpen)
    }
  }

  function isItemActive() {
    let active = false
    if (item.href) {
      active = location.pathname.includes(item.href)
      if (item.exact) active = location.pathname === item.href
    }
    item.itens &&
      item.itens.forEach(subItem => {
        if (!active) {
          active = location.pathname.includes(subItem.href)
          if (item.exact) active = location.pathname === subItem.href
        }
      })
    return active
  }

  const ItemWrapper = ({ children }) => {
    if (item.itens && item.itens.length > 0) {
      return (
        <Flex
          flexDirection='row'
          width='100%'
          alignItems='center'
          justifyContent='space-between'
          padding='16px 22px'
          onClick={changeVisibilitySubItem}
        >
          {children}
        </Flex>
      )
    }
    if (item.callback) {
      return (
        <Flex
          flexDirection='row'
          width='100%'
          alignItems='center'
          justifyContent='space-between'
          padding='16px 22px'
          onClick={item.callback}
        >
          {children}
        </Flex>
      )
    }
    return (
      <LinkStyled variant={item.type ? item.type : 'internal'} href={item.href}>
        {children}
      </LinkStyled>
    )
  }
  ItemWrapper.propTypes = {
    children: PropTypes.any
  }

  return (
    <ItemStyled
      active={isItemActive()}
      sidebarOpened={sidebarOpened}
      onMouseEnter={() => !sidebarOpened && setIsOpen(true)}
      onMouseLeave={() => !sidebarOpened && setIsOpen(false)}
    >
      <ItemWrapper>
        <Icon marginRight='22px' color={sidebarOpened ? 'primary' : 'grey'}>
          {item.icon}
        </Icon>

        {sidebarOpened && (
          <Flex
            flex={1}
            justifyContent='space-between'
            onClick={changeVisibilitySubItem}
          >
            <Flex flex={1}>
              <Text cursor='pointer' color='darkerGrey'>
                {item.name}
              </Text>
            </Flex>

            {badgeAllItens > 0 && !isOpen && <Badge count={badgeAllItens} />}

            {item.itens && (
              <Icon color='primary'>
                {isOpen ? (
                  <MdExpandLess size={18} />
                ) : (
                  <MdExpandMore size={18} />
                )}
              </Icon>
            )}
          </Flex>
        )}
      </ItemWrapper>
      <SubItens
        item={item}
        heightScrolledToTop={heightScrolledToTop}
        sidebarOpened={sidebarOpened}
        itemOpened={isOpen}
      />
    </ItemStyled>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  sidebarOpened: PropTypes.bool.isRequired,
  heightScrolledToTop: PropTypes.number
}
