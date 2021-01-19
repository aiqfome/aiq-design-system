import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'

import RcDropdown from 'rc-dropdown'
import styled, { createGlobalStyle } from 'styled-components'

import { Flex } from '../Flex'

type ContentFunc = () => React.ReactElement | string

export interface Props {
  arrow?: boolean
  keepOpen?: boolean
  children?: ReactNode
  trigger?: 'click' | 'hover' | 'contextMenu'
  content?: string | React.ReactElement | ContentFunc
  notificationBackgroundColor?: string
  notificationTextColor?: string
  placement?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
}

const GlobalStyle = createGlobalStyle<Props>`
  .popover .rc-dropdown-arrow {
    color: ${({ notificationTextColor }) => notificationTextColor};
    border-color: ${({ notificationBackgroundColor, placement }) =>
      placement === 'topLeft' ||
      placement === 'topRight' ||
      placement === 'topCenter'
        ? `transparent ${notificationBackgroundColor} ${notificationBackgroundColor} transparent  !important`
        : `${notificationBackgroundColor} transparent transparent ${notificationBackgroundColor} !important`};
  }
`

const PopoverStyled = styled(Flex)`
  position: relative;
  margin: 0;
  text-align: left;
  background-clip: padding-box;
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;

  & > * {
    padding: 10px;
  }
`

export const Popover: React.FC<Props> = ({
  content,
  children,
  arrow = false,
  keepOpen = true,
  trigger = 'hover',
  placement = 'bottomCenter',
  notificationBackgroundColor = '#fff',
  notificationTextColor = '#000',
  ...props
}) => {
  const [visible, setVisible] = useState(false)

  const child = React.Children.only(children) as React.ReactElement<any>

  const getOverlay = () => {
    let overlayNode
    if (typeof content === 'function') {
      overlayNode = (content as ContentFunc)()
    } else {
      overlayNode = content
    }
    overlayNode = React.Children.only(
      typeof overlayNode === 'string' ? <span>{overlayNode}</span> : overlayNode
    )

    return (
      <PopoverStyled data-testid='popover-content' {...props}>
        {overlayNode}
      </PopoverStyled>
    )
  }

  if (keepOpen) {
    return (
      <>
        <GlobalStyle
          notificationBackgroundColor={notificationBackgroundColor}
          notificationTextColor={notificationTextColor}
          placement={placement}
        />
        <RcDropdown
          arrow={arrow}
          visible={visible}
          trigger={[trigger]}
          overlay={getOverlay}
          placement={placement}
          overlayClassName='popover'
          onVisibleChange={setVisible}
        >
          {child}
        </RcDropdown>
      </>
    )
  }

  return (
    <>
      <GlobalStyle
        notificationBackgroundColor={notificationBackgroundColor}
        notificationTextColor={notificationTextColor}
        placement={placement}
      />
      <RcDropdown
        arrow={arrow}
        trigger={[trigger]}
        overlay={getOverlay}
        placement={placement}
        overlayClassName='popover'
      >
        {child}
      </RcDropdown>
    </>
  )
}

Popover.propTypes = {
  arrow: PropTypes.bool,
  content: PropTypes.any,
  keepOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  trigger: PropTypes.oneOf(['click', 'hover', 'contextMenu']),
  notificationBackgroundColor: PropTypes.string,
  notificationTextColor: PropTypes.string,
  placement: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'topCenter',
    'bottomLeft',
    'bottomRight',
    'bottomCenter'
  ])
}
