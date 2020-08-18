import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Divider } from '../../atoms/Divider'
import { Flex } from '../../atoms/Flex'
import { Item } from './Item'

export interface Props {
  data: { itens: any }
  opened?: boolean
  header?: any
}

const Itens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

interface SidebarStyledProps {
  opened?: boolean
}

const SidebarStyled = styled(Flex)<SidebarStyledProps>`
  box-shadow: 0px 3px 15px #0000001a;
  height: 100vh;
  max-width: ${({ opened }) => (opened ? '340px' : '60px')};
  transition: all 0.5s ease;
  will-change: transform;
`

export const Sidebar: React.FC<Props> = ({
  data,
  header,
  opened = false,
  ...props
}) => {
  return (
    <SidebarStyled
      width='100%'
      backgroundColor='#fff'
      maxWidth='340px'
      flexDirection='column'
      opened={opened}
      {...props}
    >
      {data && (
        <>
          {header && header}
          <Divider width='100%' marginBottom='16px' />
          <Itens>
            {data.itens.map((item, index) => (
              <Item sidebarOpened={opened} key={index} item={item} />
            ))}
          </Itens>
        </>
      )}
    </SidebarStyled>
  )
}

Sidebar.propTypes = {
  data: PropTypes.any.isRequired,
  opened: PropTypes.bool,
  header: PropTypes.any
}
