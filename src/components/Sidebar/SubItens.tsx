import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Text } from '../Text'
import { Flex, Props as FlexProps } from '../Flex'
import { Link } from '../Link'
import { Badge } from '../Badge'

interface Props extends FlexProps {
  item?: any
  onClickItem?: any
  itemOpened?: boolean
  distanceTop?: number
  sidebarOpened?: boolean
  heightScrolledToTop?: number
  typeSubmenu?: 'default' | 'bottom' | 'top'
}

const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: row;
  margin: 12px 12px 8px;
  color: ${({ theme }) => theme.colors.primary} !important;
  font-size: ${({ theme }) => theme.fontSizes.default} !important;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold} !important;

  &:hover {
    background: none !important;
    color: ${({ theme }) => theme.colors.primary} !important;
    font-size: ${({ theme }) => theme.fontSizes.default} !important;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold} !important;
  }
`

const SubItensStyled = styled(Flex)<Props>`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ${({ sidebarOpened }) => {
    if (sidebarOpened) {
      return css`
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

          &:hover {
            background: ${({ theme }) => theme.colors.mediumGrey};
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 500;
          }
        }
      `
    }

    return css<Props>`
      a {
        font-size: 14px;
        color: #434343;
        padding: 6px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:hover {
          background: ${({ theme }) => theme.colors.lightGrey};
          color: ${({ theme }) => theme.colors.primary};
          font-weight: 500;
        }
      }

      ${({
        theme,
        itemOpened,
        distanceTop,
        typeSubmenu,
        heightScrolledToTop
      }) => {
        if (itemOpened) {
          return css`
            display: none;
            position: fixed;
            width: 240px;
            margin-left: 55px;
            background: #ffff;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            box-shadow: 2px 3px 4px #00000029;

            ${typeSubmenu === 'default' &&
            `
              margin-top: calc((50px + ${heightScrolledToTop}px) * -1);
            `}

            ${typeSubmenu === 'bottom' &&
            `
              position: absolute;
              top: ${distanceTop}px;
            `}

            ${typeSubmenu === 'top' &&
            `
              position: absolute;
              top: 0px;
              height: 100vh;

              ul {
                overflow-x: hidden;
                overflow-y: auto;
              }

              ul::-webkit-scrollbar {
                width: 5px;
              }

              ul::-webkit-scrollbar-track {
                background-color: ${theme.colors.white};
                -webkit-border-radius: 10px;
                border-radius: 10px;
              }

              ul::-webkit-scrollbar-thumb {
                -webkit-border-radius: 10px;
                border-radius: 10px;
                background: ${theme.colors.mediumGrey};
              }
            `}
          `
        }

        return css`
          display: none;
        `
      }}
    `
  }}
`
export const SubItens: React.FC<Props> = ({
  item,
  sidebarOpened,
  itemOpened,
  onClickItem,
  heightScrolledToTop = 0
}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [typeSubmenu, setTypeSubmenu] = useState<'default' | 'bottom' | 'top'>(
    'default'
  )
  const [distanceTop, setDistanceTop] = useState(0)

  useEffect(() => {
    if (ref !== null) {
      const { offsetTop, offsetHeight } = ref
      const isOverflowBottom = window.innerHeight - offsetTop <= offsetHeight

      if (window.innerHeight - offsetHeight < 0) {
        setTypeSubmenu('top')
      } else if (isOverflowBottom) {
        setDistanceTop(window.innerHeight - offsetHeight)
        setTypeSubmenu('bottom')
      } else {
        setDistanceTop(0)
        setTypeSubmenu('default')
      }
    }
  }, [ref, itemOpened])

  return (
    <SubItensStyled
      distanceTop={distanceTop}
      typeSubmenu={typeSubmenu}
      ref={el => setRef(el || null)}
      heightScrolledToTop={heightScrolledToTop}
      flexDirection='column'
      data-testid='sidebar-item'
      className={`${itemOpened ? 'show' : 'hide'}`}
      sidebarOpened={sidebarOpened}
      itemOpened={itemOpened}
    >
      {!sidebarOpened &&
        (item.itens ? (
          <Text
            mx={6}
            mt={6}
            mb={4}
            cursor='auto'
            color='primary'
            fontWeight='semiBold'
          >
            {item.name}
          </Text>
        ) : (
          <LinkStyled
            href={item.href}
            variant={item.type ? item.type : 'internal'}
            onClick={() => {
              if (onClickItem) onClickItem()
            }}
          >
            {item.name}
          </LinkStyled>
        ))}
      {item.itens && (
        <ul>
          {item.itens.map((subItem, index) => (
            <li key={index}>
              <Link
                variant={subItem.type ? subItem.type : 'internal'}
                href={subItem.href}
                onClick={() => {
                  if (onClickItem) onClickItem()
                }}
              >
                <Text cursor='pointer' fontSize='medium' px={6} my={2}>
                  {subItem.name}
                </Text>

                {subItem.badge && (
                  <Badge
                    backgroundColor='error'
                    color='white'
                    count={subItem.badge}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </SubItensStyled>
  )
}

SubItens.propTypes = {
  item: PropTypes.any,
  itemOpened: PropTypes.bool,
  onClickItem: PropTypes.func,
  sidebarOpened: PropTypes.bool,
  heightScrolledToTop: PropTypes.number
}
