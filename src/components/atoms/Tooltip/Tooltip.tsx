import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { Box, Props as BoxProps } from '../Box'

export interface Props extends BoxProps {
  children?: ReactNode
  body?: any
  variant?: 'top' | 'right' | 'bottom' | 'left' | 'right-bottom'
}

const tooltipVariations = {
  top: css`
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  `,
  right: css`
    top: -5px;
    left: 105%;
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    margin-left: -60px;
  `,
  left: css`
    top: -5px;
    right: 105%;
  `,
  'right-bottom': css`
    top: 100%;
    left: 80%;
  `
}

const TooltipStyled = styled(Box)<Props>`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: auto;
  }

  .tooltip {
    visibility: hidden;
    white-space: nowrap;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.almostBlack};
    text-align: center;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    box-shadow: 0px 3px 6px #00000029;

    ${({ variant }) => tooltipVariations[variant || 'right']}
  }

  &:hover .tooltip {
    visibility: visible;
  }
`

export const Tooltip: React.FC<Props> = ({ body, children, ...props }) => {
  return (
    <TooltipStyled {...props}>
      {children}

      <Box className='tooltip'>{body}</Box>
    </TooltipStyled>
  )
}

Tooltip.propTypes = {
  body: PropTypes.any,
  children: PropTypes.node
}
