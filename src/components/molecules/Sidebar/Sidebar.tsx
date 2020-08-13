import React from 'react'
import PropTypes from 'prop-types'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import styled from 'styled-components'

import { Drawer } from '../../atoms/Drawer'
import { Avatar } from '../../atoms/Avatar'
import { Text } from '../../atoms/Text'
import { Divider } from '../../atoms/Divider'
import { Flex } from '../../atoms/Flex'
import { Link } from '../../atoms/Link'
import { Icon } from '../../atoms/Icon'

type SidebarData = {
  user: any
  itens: any
}

export interface Props {
  data?: SidebarData
  opened?: boolean
}

const SidebarStyled = styled(Drawer)<Props>`
  width: 100%;
  max-width: 340px;
`

const Itens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ItemStyled = styled.li`
  a {
    padding: 16px 24px;
    display: flex;
    flex-direction: row;
  }
`

const SubItens = styled.ul`
  margin: 0;
  padding: 0;
  background: #f6f6f6;

  a {
    color: #434343;
    padding: 7px 24px;
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

const Item: React.FC<ItemProps> = ({ item, ...props }) => {
  if (item.itens && item.itens.length > 0) {
    return (
      <ItemStyled {...props}>
        <Flex flexDirection='column'>
          <Flex
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            padding='16px 24px'
          >
            <Flex>
              <Icon marginRight='18px' color='primary'>
                {item.icon}
              </Icon>
              <Text color='darkerGrey'>{item.name}</Text>
            </Flex>
            <Flex>
              <Badge>18</Badge>
              <Icon size='18px' color='grey'>
                <MdExpandMore />
              </Icon>
            </Flex>
          </Flex>
          <SubItens>
            {item.itens.map((subItem, index) => (
              <li key={index}>
                <Link href={subItem.href}>
                  <Text fontSize='medium'>{subItem.name}</Text>
                  <Badge>18</Badge>
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
      <Link href={item.href}>
        <Icon marginRight='18px' color='primary'>
          {item.icon}
        </Icon>
        <Text color='darkerGrey'>{item.name}</Text>
      </Link>
    </ItemStyled>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired
}

export const Sidebar: React.FC<Props> = ({
  data,
  opened = false,
  ...props
}) => {
  return (
    <SidebarStyled variation='left' opened={opened} {...props}>
      {data && (
        <>
          <Flex padding='24px'>
            <Avatar alt='Juliano' mx='12px' />
            <Flex flexDirection='column'>
              <Text color='almostBlack' fontWeight='semiBold'>
                {data.user.name}
              </Text>
              <Text color='darkGrey' fontSize='xsmall'>
                {data.user.email}
              </Text>
            </Flex>
          </Flex>
          <Divider width='100%' />
          <Itens>
            {data.itens.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Itens>
        </>
      )}
    </SidebarStyled>
  )
}

Sidebar.propTypes = {
  data: PropTypes.any,
  opened: PropTypes.bool
}
