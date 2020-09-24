import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export interface Props {
  size?: 'small' | 'medium' | 'large' | undefined
}

const loadingSizes: { [index: string]: any } = {
  small: css`
    width: 15px;
    height: 15px;
  `,
  medium: css`
    width: 15px;
    height: 15px;
  `,
  large: css`
    width: 15px;
    height: 15px;
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
    stroke: ${({ theme }) => theme.colors.primary};
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

export const Loading: React.FC<Props> = ({ size = 'medium' }) => {
  return <LoadingSpinner size={size} />
}

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}
