import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  position,
  PositionProps,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
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
    PositionProps,
    BorderProps,
    BoxShadowProps {
  color?: string
  children?: any
  refBox?: any
  className?: string
}

export const BoxStyled = styled.div`
  ${flexbox}
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${border}
  ${position}
  ${boxShadow}
`

export const Box: React.FC<Props> = ({ refBox, ...props }) => {
  return <BoxStyled data-testid='box' ref={refBox} {...props} />
}

Box.propTypes = {
  refBox: PropTypes.any
}
