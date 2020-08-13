import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Drawer } from '../../atoms/Drawer'
import { Avatar } from '../../atoms/Avatar'
import { Text } from '../../atoms/Text'
import { Divider } from '../../atoms/Divider'
import { Flex } from '../../atoms/Flex'
import { Item } from './Item'

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
  box-shadow: 0px 3px 15px #0000001a;
`

const Itens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

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
