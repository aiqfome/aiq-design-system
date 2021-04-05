import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'

import RcDropdown from 'rc-dropdown'
import styled, { css } from 'styled-components'

import { Divider } from '../Divider'
import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Popover } from '../Popover'
import { Text } from '../Text'

interface Item {
  visible?: boolean
  disabled?: boolean
  icon?: React.ReactElement
  action?: (event: any) => void
  description?: React.ReactElement | string
  disabledMessage?: string
}

export interface Props {
  items?: Item[]
  arrow?: boolean
  keepOpen?: boolean
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
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
`

const MenuItem = styled(Flex)<Item>`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: ${({ theme }) => theme.colors.grey};

        svg {
          opacity: 0.33;
        }

        &:hover {
          cursor: not-allowed;

          span {
            cursor: not-allowed;
          }
        }
      `
    }

    return css`
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.mediumGrey};

        span {
          cursor: pointer;
        }
      }
    `
  }}

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
  keepOpen = true,
  trigger = 'hover',
  placement = 'bottomRight',
  ...props
}) => {
  const [visible, setVisible] = useState(false)

  const child = React.Children.only(children) as React.ReactElement<any>

  const getOverlay = () => {
    return (
      <ActionsStyled
        flexDirection='column'
        data-testid='actions-content'
        {...props}
      >
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

          {items?.map(
            (
              {
                icon,
                action,
                description,
                visible = true,
                disabled = false,
                disabledMessage,
                ...itemProps
              },
              index
            ) =>
              visible ? (
                !disabled || (disabled && !disabledMessage) ? (
                  <MenuItem
                    {...itemProps}
                    py={3}
                    px={5}
                    key={index}
                    disabled={disabled}
                    alignItems='center'
                    onClick={e => {
                      e.stopPropagation()
                      if (!disabled) {
                        setVisible(false)
                        if (action) action(e)
                      }
                    }}
                  >
                    {icon && (
                      <Icon mr={4} color='primary'>
                        {icon}
                      </Icon>
                    )}

                    <Text fontSize='medium' whiteSpace='nowrap'>
                      {description}
                    </Text>
                  </MenuItem>
                ) : (
                  <Popover
                    placement='bottomLeft'
                    arrow
                    content={disabledMessage}
                    notificationBackgroundColor='almostBlack'
                    notificationTextColor='white'
                  >
                    <MenuItem
                      py={3}
                      px={5}
                      key={index}
                      disabled={true}
                      alignItems='center'
                    >
                      {icon && (
                        <Icon mr={4} color='primary'>
                          {icon}
                        </Icon>
                      )}

                      <Text fontSize='medium' whiteSpace='nowrap'>
                        {description}
                      </Text>
                    </MenuItem>
                  </Popover>
                )
              ) : null
          )}
        </Flex>
      </ActionsStyled>
    )
  }

  if (keepOpen) {
    return (
      <RcDropdown
        arrow={arrow}
        visible={visible}
        trigger={[trigger]}
        overlay={getOverlay}
        placement={placement}
        overlayClassName='actions'
        onVisibleChange={setVisible}
      >
        {child}
      </RcDropdown>
    )
  }

  return (
    <RcDropdown
      arrow={arrow}
      trigger={[trigger]}
      overlay={getOverlay}
      placement={placement}
      overlayClassName='actions'
    >
      {child}
    </RcDropdown>
  )
}

Actions.propTypes = {
  title: PropTypes.any,
  arrow: PropTypes.bool,
  header: PropTypes.any,
  items: PropTypes.array,
  keepOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
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
