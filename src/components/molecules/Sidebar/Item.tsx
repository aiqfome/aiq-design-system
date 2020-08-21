import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import styled from 'styled-components'

import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Link } from '../../atoms/Link'
import { Icon } from '../../atoms/Icon'

import { Badge } from './Badge'
import { SubItens } from './SubItens'

interface ItemProps {
  item: any
  sidebarOpened: boolean
}

interface ItemStyledProps {
  sidebarOpened?: boolean
}

const ItemStyled = styled.li<ItemStyledProps>`
  /* overflow-x: hidden; */
  position: relative;
  &:hover {
    cursor: pointer;

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
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function computeBadgeAllItens(iten) {
    let value = 0
    if (iten.itens) {
      iten.itens.forEach(subItem => {
        if (subItem.badge) value += subItem.badge
      })
    }
    if (item.badge) {
      value += iten.badge
    }
    return value
  }

  const badgeAllItens = useMemo(() => computeBadgeAllItens(item), [item])

  function changeVisibilitySubItem() {
    if (sidebarOpened) {
      setIsOpen(!isOpen)
    }
  }

  const ContentItem = () => (
    <>
      <Icon marginRight='22px' color={item.active ? 'primary' : 'grey'}>
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
          {badgeAllItens > 0 && !isOpen && <Badge>{badgeAllItens}</Badge>}
          {item.itens && (
            <Icon color='grey'>
              {isOpen ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
            </Icon>
          )}
        </Flex>
      )}
    </>
  )

  return (
    <ItemStyled
      sidebarOpened={sidebarOpened}
      onMouseEnter={() => !sidebarOpened && setIsOpen(true)}
      onMouseLeave={() => !sidebarOpened && setIsOpen(false)}
      {...props}
    >
      {item.itens && item.itens.length > 0 ? (
        <Flex
          flexDirection='row'
          width='100%'
          alignItems='center'
          justifyContent='space-between'
          padding='16px 22px'
          onClick={changeVisibilitySubItem}
        >
          <ContentItem />
        </Flex>
      ) : (
        <LinkStyled
          variant={item.type ? item.type : 'internal'}
          href={item.href}
        >
          <ContentItem />
        </LinkStyled>
      )}
      <SubItens item={item} sidebarOpened={sidebarOpened} itemOpened={isOpen} />
    </ItemStyled>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  sidebarOpened: PropTypes.bool.isRequired
}