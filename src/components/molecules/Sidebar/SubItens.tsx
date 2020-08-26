import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Link } from '../../atoms/Link'

import { Badge } from './Badge'

interface Props {
  item?: any
  itemOpened?: boolean
  sidebarOpened?: boolean
}

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

          &:hover {
            background: ${({ theme }) => theme.colors.grey};
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
        }
      }

      ${({ itemOpened }) => {
        if (itemOpened) {
          return css`
            display: flex;
            position: fixed;
            width: 240px;
            margin-left: 60px;
            margin-top: -50px;
            background: #ffff;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            box-shadow: 2px 3px 4px #00000029;
          `
        }
        return css`
          display: none;
        `
      }}
    `
  }}
`

export const SubItens = ({ item, sidebarOpened, itemOpened }) => {
  return (
    <SubItensStyled
      flexDirection='column'
      className={`${itemOpened ? 'show' : 'hide'}`}
      sidebarOpened={sidebarOpened}
      itemOpened={itemOpened}
    >
      {!sidebarOpened && (
        <Text color='primary' mx={6} mt={6} mb={4} fontWeight='semiBold'>
          {item.name}
        </Text>
      )}
      {item.itens && (
        <ul>
          {item.itens.map((subItem, index) => (
            <li key={index}>
              <Link
                variant={subItem.type ? subItem.type : 'internal'}
                href={subItem.href}
              >
                <Text
                  cursor='pointer'
                  fontSize='medium'
                  color='darkGrey'
                  px={6}
                  my={2}
                >
                  {subItem.name}
                </Text>

                {subItem.badge && <Badge>{subItem.badge}</Badge>}
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
  sidebarOpened: PropTypes.bool
}
