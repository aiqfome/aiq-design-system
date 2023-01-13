import React from 'react'

import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export type Props = SpaceProps & {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

const loadingSizes: { [index: string]: any } = {
  small: css`
    width: 15px;
    height: 15px;
  `,
  medium: css`
    width: 25px;
    height: 25px;
  `,
  large: css`
    width: 35px;
    height: 35px;
  `
}

const LoadingSpinner = styled.svg.attrs({
  viewBox: '25 25 50 50',
  children: <circle cx='50' cy='50' r='20' />
})<Props>`
  ${space}

  ${({ size }) => loadingSizes[size || 'medium']}

  transform-origin: center;
  animation: rotate 2s linear infinite;

  circle {
    fill: none;
    stroke: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.primary};
    stroke-width: 4;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`

export const Loading = React.forwardRef<SVGSVGElement, Props>(
  ({ size = 'small', color, ...props }, ref) => (
    <LoadingSpinner size={size} color={color} ref={ref} {...props} />
  )
)
