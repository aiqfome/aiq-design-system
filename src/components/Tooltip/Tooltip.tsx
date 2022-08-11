import React, { ReactNode } from 'react'

import RcTooltip from 'rc-tooltip'
import RcDropdown from 'rc-dropdown'
import styled from 'styled-components'

import { Flex } from '../Flex'

export interface Props {
  children?: ReactNode
  body?: any
  variant?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
  type?: 'default' | 'balloon'
  onMouseOver?: () => void
}

const PopoverStyled = styled(Flex)`
  position: relative;
  margin: 0;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 12px;
  outline: none;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
`

const TooltipStyled = styled(Flex)`
  position: relative;
  margin: 0;
  text-align: left;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
`

export const Tooltip: React.FC<Props> = ({
  body,
  children,
  type = 'default',
  variant = 'bottomLeft',
  ...props
}) => {
  const child = React.Children.only(
    <div data-testid='tooltip-child'>{children}</div>
  ) as React.ReactElement<any>

  const getOverlayBalloon = () => (
    <TooltipStyled flexDirection='column' {...props}>
      {body}
    </TooltipStyled>
  )

  const getOverlay = () => (
    <PopoverStyled
      flexDirection='column'
      data-testid='tooltip-content'
      {...props}
    >
      {body}
    </PopoverStyled>
  )

  const getTooltipVariant = () => {
    if (variant === 'bottomCenter') return 'bottom'
    if (variant === 'topCenter') return 'top'

    return variant
  }

  if (type === 'default') {
    return (
      <RcDropdown
        arrow={false}
        trigger={['hover']}
        placement={variant}
        overlay={getOverlay}
        overlayClassName='popover'
        {...props}
      >
        {child}
      </RcDropdown>
    )
  }

  return (
    <RcTooltip
      arrowContent
      trigger={['hover']}
      overlayClassName='tooltip'
      overlay={getOverlayBalloon}
      placement={getTooltipVariant()}
      {...props}
    >
      {child}
    </RcTooltip>
  )
}
