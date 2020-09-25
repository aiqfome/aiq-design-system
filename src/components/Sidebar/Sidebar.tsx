import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Divider } from '../Divider'
import { Flex } from '../Flex'
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
  direction: ltr;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primaryLight};
  }
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
  const [heightScrolledToTop, setHeightScrolledToTop] = useState(0)
  useEffect(() => {
    function listenWhenSidebarScroll(event) {
      setHeightScrolledToTop(event.target.scrollTop)
    }
    const elementItensSidebar = document.querySelectorAll('#itens-sidebar')[0]
    elementItensSidebar.addEventListener('scroll', listenWhenSidebarScroll)
    return () => {
      elementItensSidebar.removeEventListener('scroll', listenWhenSidebarScroll)
    }
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
          <Itens id='itens-sidebar'>
            {data.itens.map((item, index) => (
              <Item
                heightScrolledToTop={heightScrolledToTop}
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
