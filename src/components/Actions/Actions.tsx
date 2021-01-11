import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'

import RcDropdown from 'rc-dropdown'
import styled from 'styled-components'

import { Flex } from '../Flex'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Divider } from '../Divider'

interface Item {
  action: (event: any) => void
  icon?: React.ReactElement
  visible?: boolean
  description: React.ReactElement | string
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
  keepOpen = true,
  trigger = 'hover',
  placement = 'bottomRight',
  ...props
}) => {
  const child = React.Children.only(children) as React.ReactElement<any>
  const [visible, setVisible] = useState(false)

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

          {items &&
            items.length > 0 &&
            items.map(({ action, visible = true, icon, description }, index) =>
              visible ? (
                <MenuItem
                  py={3}
                  px={5}
                  key={index}
                  alignItems='center'
                  onClick={e => {
                    e.stopPropagation()
                    setVisible(false)
                    if (action) action(e)
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
        <div
          data-testid='actions-child'
          onClick={e => e.stopPropagation()}
          className={visible ? 'show' : 'hidden'}
        >
          {child}
        </div>
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
      <div onClick={e => e.stopPropagation()}>{child}</div>
    </RcDropdown>
  )
}

Actions.propTypes = {
  title: PropTypes.any,
  arrow: PropTypes.bool,
  header: PropTypes.any,
  items: PropTypes.array,
  children: PropTypes.node,
  keepOpen: PropTypes.bool,
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
