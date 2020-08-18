import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Text } from '../../atoms/Text'
import { Flex } from '../../atoms/Flex'
import { Link } from '../../atoms/Link'
import { Icon } from '../../atoms/Icon'

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
    padding-bottom: 24px;
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
      h3 {
        padding-top: 16px;
        color: #434343;
        padding: 8px 16px;
        font-size: 16px;
      }

      a {
        font-size: 14px;
        color: #434343;
        font
        padding: 6px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:hover {
          background: ${({ theme }) => theme.colors.grey};
        }
      }

      ${({ itemOpened }) => {
        if (itemOpened) {
          return css`
            position: absolute;
            width: 240px;
            top: 0;
            right: -240px;
            background: #ffff;
            border-radius: 4px;
            box-shadow: 0px 0px 15px #0000001a;
          `
        }
        return css`
          max-height: 0;
          overflow: hidden;
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
      {!sidebarOpened && <h3>{item.name}</h3>}
      {item.itens && (
        <ul>
          {item.itens.map((subItem, index) => (
            <li key={index}>
              <Link
                variant={subItem.type ? subItem.type : 'internal'}
                href={subItem.href}
              >
                <Flex>
                  <Icon paddingLeft='16px' marginRight='8px'>
                    <MdKeyboardArrowRight />
                  </Icon>
                  <Text cursor='pointer' fontSize='medium'>
                    {subItem.name}
                  </Text>
                </Flex>

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
