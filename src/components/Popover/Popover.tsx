import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import RcDropdown from 'rc-dropdown'
import styled from 'styled-components'

import { Flex } from '../Flex'

import './index.css'
import 'rc-dropdown/assets/index.css'

type ContentFunc = () => React.ReactElement

export interface Props {
  arrow?: boolean
  children?: ReactNode
  trigger?: 'click' | 'hover' | 'contextMenu'
  content?: string | React.ReactElement | ContentFunc
  placement?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
}

const PopoverStyled = styled(Flex)`
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 10px;
  outline: none;
  -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 6px -4px rgb(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

  & > * {
    padding: 10px;
  }
`

export const Popover: React.FC<Props> = ({
  content,
  children,
  arrow = false,
  trigger = 'hover',
  placement = 'bottomCenter',
  ...props
}) => {
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

    return <PopoverStyled {...props}>{overlayNode}</PopoverStyled>
  }

  return (
    <RcDropdown
      arrow={arrow}
      trigger={[trigger]}
      overlay={getOverlay}
      placement={placement}
      overlayClassName='popover'
    >
      {child}
    </RcDropdown>
  )
}

Popover.propTypes = {
  arrow: PropTypes.bool,
  content: PropTypes.any,
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
