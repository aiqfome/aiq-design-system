import React from 'react'

import styled from 'styled-components'

const LoadingSpinner = styled.svg.attrs({
  viewBox: '25 25 50 50',
  children: <circle cx='50' cy='50' r='20' />
})`
  width: 25px;
  transform-origin: center;
  animation: rotate 2s linear infinite;

  circle {
    fill: none;
    stroke: green;
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

export const Loading: React.FC = () => {
  return <LoadingSpinner />
}
