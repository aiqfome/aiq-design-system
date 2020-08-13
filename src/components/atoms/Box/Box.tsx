import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps
} from 'styled-system'

export interface Props
  extends ColorProps,
    SpaceProps,
    FlexboxProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps,
    BorderProps {
  color?: string
  children?: any
  refBox?: any
}

export const BoxStyled = styled.div`
  ${flexbox}
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${border}
`

export const Box: React.FC<Props> = ({ refBox, ...props }) => {
  return <BoxStyled ref={refBox} {...props} />
}

Box.propTypes = {
  refBox: PropTypes.any
}
