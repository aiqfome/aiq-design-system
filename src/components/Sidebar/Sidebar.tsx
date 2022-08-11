import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Divider } from '../Divider'
import { Flex } from '../Flex'
import { Item } from './Item'

export interface Props {
  data: any
  opened?: boolean
  header?: any
  onClickItem?: any
}

const Items = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  direction: ltr;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.mediumGrey};
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
  onClickItem,
  opened = false,
  ...props
}) => {
  const [openItem, setOpenItem] = useState('')
  const [heightScrolledToTop, setHeightScrolledToTop] = useState(0)

  useEffect(() => {
    function listenWhenSidebarScroll(event) {
      setHeightScrolledToTop(event.target.scrollTop)
    }

    const elementItensSidebar = document.querySelectorAll('#items-sidebar')[0]
    elementItensSidebar.addEventListener('scroll', listenWhenSidebarScroll)
    return () => {
      elementItensSidebar.removeEventListener('scroll', listenWhenSidebarScroll)
    }
  }, [])

  const toggleItem = (value = '') => {
    setOpenItem(openItem === value ? '' : value)
  }

  return (
    <SidebarStyled
      width='100%'
      backgroundColor='#fff'
      maxWidth='340px'
      flexDirection='column'
      opened={opened}
      data-testid='sidebar'
      className={opened ? 'show' : 'hidden'}
      {...props}
    >
      {data.length >= 0 && (
        <>
          {header || null}

          <Divider width='100%' marginBottom='16px' />

          <Items id='items-sidebar'>
            {data.map((item, index) => (
              <Item
                key={index}
                item={item}
                sidebarOpened={opened}
                onClickItem={onClickItem}
                openItem={openItem === index}
                toggleItem={() => toggleItem(index)}
                heightScrolledToTop={heightScrolledToTop}
              />
            ))}
          </Items>
        </>
      )}
    </SidebarStyled>
  )
}
