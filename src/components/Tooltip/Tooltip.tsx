import React, { ReactNode, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { position } from 'styled-system'

import styled, { css } from 'styled-components'
import { Box, Props as BoxProps } from '../Box'

export interface Props extends BoxProps {
  children?: ReactNode
  body?: any
  variant?: 'top' | 'right' | 'bottom' | 'left' | 'right-bottom' | 'left-bottom'
  type?: 'default' | 'balloon'
  onMouseOver?: () => void
}

const tooltipVariations = {
  top: css`
    bottom: 100%;
    left: 50%;
  `,
  right: css`
    top: -5px;
    left: 105%;
  `,
  bottom: css`
    top: 100%;
    left: 50%;
  `,
  left: css`
    top: -5px;
    right: 105%;
  `,
  'right-bottom': css`
    top: 100%;
    left: 80%;
  `,
  'left-bottom': css`
    top: 100%;
    right: 80%;
  `
}

const typesVariants = {
  default: css`
    background-color: #fff;
    color: ${({ theme }) => theme.colors.almostBlack};
  `,
  balloon: css<Props>`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.almostBlack};

    &::after {
      content: '';
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }

    ${({ variant, theme }) => {
      switch (variant) {
        case 'top':
          return css`
            bottom: 136%;
            left: 0;
            &::after {
              top: 100%;
              left: 8px;
              border-color: ${theme.colors.almostBlack} transparent transparent
                transparent;
            }
          `
        case 'bottom':
          return css`
            top: 136%;
            left: 0;
            &::after {
              bottom: 100%;
              left: 8px;

              border-color: transparent transparent ${theme.colors.almostBlack}
                transparent;
            }
          `
        default:
          return css`
            top: 136%;
            left: 0;
            &::after {
              bottom: 100%;
              left: 8px;

              border-color: transparent transparent ${theme.colors.almostBlack}
                transparent;
            }
          `
      }
    }}
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
    opacity: 0;
    white-space: nowrap;
    text-align: center;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    box-shadow: 0px 3px 6px #00000029;
    transition: all 0.3s;
    padding: 4px 8px;

    ${({ variant }) => tooltipVariations[variant || 'right']}

    ${({ type }) => typesVariants[type || 'default']}

    ${position}
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`

export const Tooltip: React.FC<Props> = ({ body, children, ...props }) => {
  const ref = useRef(document.createElement('div'))

  useEffect(() => {
    fixPositionInWindow()
  }, [])

  function fixPositionInWindow() {
    const { right } = ref.current.getBoundingClientRect()
    if (right > window.innerWidth) {
      ref.current.style.left = `auto`
      ref.current.style.right = `-16px`
    }
  }

  return (
    <TooltipStyled onMouseOver={fixPositionInWindow} {...props}>
      {children}

      <Box refBox={ref} className='tooltip'>
        {body}
      </Box>
    </TooltipStyled>
  )
}

Tooltip.propTypes = {
  body: PropTypes.any,
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'balloon']),
  variant: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'right-bottom',
    'left-bottom'
  ])
}
