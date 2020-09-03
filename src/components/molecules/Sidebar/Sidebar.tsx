import React, { useEffect, useState } from 'react'
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
  overflow-y: auto;
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
  position: fixed;
`

export const Sidebar: React.FC<Props> = ({
  data,
  header,
  opened = false,
  ...props
}) => {
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    function listenWhenSidebarScroll(event) {
      setScrollTop(event.target.scrollTop)
    }

    document
      .querySelectorAll('#teste')[0]
      .addEventListener('scroll', listenWhenSidebarScroll)
  }, [])

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
          <Itens id='teste'>
            {data.itens.map((item, index) => (
              <Item
                scrollTop={scrollTop}
                sidebarOpened={opened}
                key={index}
                item={item}
              />
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
