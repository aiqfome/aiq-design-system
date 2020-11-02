import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'

import RcDropdown from 'rc-dropdown'
import styled from 'styled-components'

import Styles from './styles'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Divider } from '../Divider'

import 'rc-dropdown/assets/index.css'

interface Item {
  action: (event: any) => void
  icon?: React.ReactElement
  description: React.ReactElement | string
}

export interface Props {
  items?: Item[]
  arrow?: boolean
  children?: ReactNode
  title?: React.ReactElement | string
  header?: React.ReactElement | string
  trigger?: 'click' | 'hover' | 'contextMenu'
  placement?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
}

const ActionsStyled = styled(Flex)`
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
  -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 6px -4px rgb(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

const MenuItem = styled(Flex)`
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.mediumGrey};

    span {
      cursor: pointer;
    }
  }

  &:first-child {
    padding-top: 8px;
  }
`

export const Actions: React.FC<Props> = ({
  title,
  items,
  header,
  children,
  arrow = false,
  trigger = 'hover',
  placement = 'bottomRight',
  ...props
}) => {
  const child = React.Children.only(children) as React.ReactElement<any>
  const [visible, setVisible] = useState(false)

  const getOverlay = () => {
    return (
      <ActionsStyled flexDirection='column' {...props}>
        {header && (
          <>
            <Flex p='10px' flexDirection='column'>
              {header}
            </Flex>
            <Divider mx='10px' mb='4px' />
          </>
        )}

        <Flex flexDirection='column'>
          {title && (
            <Text
              m='3px 10px 0px'
              fontSize='small'
              color='darkGrey'
              textAlign='left'
            >
              {title}
            </Text>
          )}

          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <MenuItem
                py={3}
                px={5}
                key={index}
                alignItems='center'
                onClick={e => {
                  e.stopPropagation()
                  setVisible(false)
                  item.action(e)
                }}
              >
                {item.icon && (
                  <Icon mr={4} color='primary'>
                    {item.icon}
                  </Icon>
                )}

                <Text fontSize='medium' whiteSpace='nowrap'>
                  {item.description}
                </Text>
              </MenuItem>
            ))}
        </Flex>
      </ActionsStyled>
    )
  }

  return (
    <>
      <Styles />

      <RcDropdown
        arrow={arrow}
        visible={visible}
        trigger={[trigger]}
        overlay={getOverlay}
        placement={placement}
        overlayClassName='actions'
        onVisibleChange={setVisible}
      >
        <div onClick={e => e.stopPropagation()}>{child}</div>
      </RcDropdown>
    </>
  )
}

Actions.propTypes = {
  title: PropTypes.any,
  arrow: PropTypes.bool,
  header: PropTypes.any,
  items: PropTypes.array,
  children: PropTypes.node,
  trigger: PropTypes.oneOf(['click', 'hover', 'contextMenu']),
  placement: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'topCenter',
    'bottomLeft',
    'bottomRight',
    'bottomCenter'
  ])
}
