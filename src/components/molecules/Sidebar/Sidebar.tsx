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
  data: SidebarData
  opened?: boolean
}

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
    <Drawer
      width='100%'
      maxWidth='340px'
      boxShadow='0px 3px 15px #0000001a'
      variation='left'
      opened={opened}
      {...props}
    >
      {data && (
        <>
          <Flex padding='24px' alignItems='center'>
            <Avatar alt={data.user.name} mx='12px' />
            <Flex flexDirection='column'>
              <Text color='almostBlack' fontWeight='semiBold'>
                {data.user.name}
              </Text>
              <Text color='darkGrey' fontSize='xsmall'>
                {data.user.email}
              </Text>
            </Flex>
          </Flex>
          <Divider width='100%' marginBottom='16px' />
          <Itens>
            {data.itens.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Itens>
        </>
      )}
    </Drawer>
  )
}

Sidebar.propTypes = {
  data: PropTypes.any.isRequired,
  opened: PropTypes.bool
}
