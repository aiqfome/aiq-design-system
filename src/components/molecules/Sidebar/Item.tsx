import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import styled from 'styled-components'

import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Link } from '../../atoms/Link'
import { Icon } from '../../atoms/Icon'

const ItemStyled = styled.li`
  &:hover {
    cursor: pointer;
  }
  a {
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
  }
`
interface SubItens {
  isOpen: boolean
}

const SubItens = styled.ul<SubItens>`
  margin: 0;
  padding: 0;
  background: #f6f6f6;

  &.hide {
    overflow: hidden;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    transition: all 0.2s ease;
    will-change: transform;
  }

  &.show {
    max-height: 360px;
    overflow: hidden;
    transition: all 0.5s ease;
    will-change: transform;
  }
  a {
    color: #434343;
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Badge = ({ children }) => {
  return (
    <Flex
      backgroundColor='#ff4d4f'
      variant='centralized'
      padding='1px 8px'
      marginRight='16px'
      borderRadius='12px'
    >
      <Text fontSize='small' color='white'>
        {children}
      </Text>
    </Flex>
  )
}

Badge.propTypes = {
  children: PropTypes.any
}

interface ItemProps {
  item: any
}

export const Item: React.FC<ItemProps> = ({ item, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  function computeBadgeAllItens(iten) {
    let value = 0
    if (iten.itens) {
      iten.itens.forEach(subItem => {
        if (subItem.badge) value += subItem.badge
      })
    }
    return value
  }

  const badgeAllItens = useMemo(() => computeBadgeAllItens(item), [item])

  function changeVisibilitySubItem() {
    setIsOpen(!isOpen)
  }

  if (item.itens && item.itens.length > 0) {
    return (
      <ItemStyled {...props}>
        <Flex flexDirection='column'>
          <Flex
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            padding='16px 24px'
            onClick={changeVisibilitySubItem}
          >
            <Flex>
              <Icon marginRight='18px' color='primary'>
                {item.icon}
              </Icon>
              {isOpen ? (
                <Text cursor='pointer' color='primary' fontWeight='medium'>
                  {item.name}
                </Text>
              ) : (
                <Text cursor='pointer' color='darkerGrey'>
                  {item.name}
                </Text>
              )}
            </Flex>
            <Flex>
              {!isOpen && badgeAllItens ? (
                <Badge>{badgeAllItens}</Badge>
              ) : (
                <Flex />
              )}

              <Icon size='18px' color='grey'>
                {isOpen ? <MdExpandLess /> : <MdExpandMore />}
              </Icon>
            </Flex>
          </Flex>
          <SubItens className={`${isOpen ? 'show' : 'hide'}`} isOpen={isOpen}>
            {item.itens.map((subItem, index) => (
              <li key={index}>
                <Link
                  variant={subItem.type ? subItem.type : 'internal'}
                  href={subItem.href}
                >
                  <Text cursor='pointer' fontSize='medium'>
                    {subItem.name}
                  </Text>
                  {subItem.badge && <Badge>{subItem.badge}</Badge>}
                </Link>
              </li>
            ))}
          </SubItens>
        </Flex>
      </ItemStyled>
    )
  }

  return (
    <ItemStyled {...props}>
      <Link variant={item.type ? item.type : 'internal'} href={item.href}>
        <Icon marginRight='18px' color='primary'>
          {item.icon}
        </Icon>
        <Text cursor='pointer' color='darkerGrey'>
          {item.name}
        </Text>
      </Link>
    </ItemStyled>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired
}
