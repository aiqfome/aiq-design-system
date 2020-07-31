import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  color?: string
  children?: any
  refBox?: any
}

export const BoxStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

export const Box: React.FC<Props> = ({ refBox, ...props }) => {
  return <BoxStyled ref={refBox} {...props} />
}

Box.propTypes = {
  refBox: PropTypes.any
}
