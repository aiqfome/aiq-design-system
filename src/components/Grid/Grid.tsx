import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  space,
  SpaceProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export type Props = SpaceProps &
  LayoutProps &
  FontSizeProps &
  GridProps &
  FontWeightProps & {
    color?: string
    children?: any
  }

export const GridStyled = styled.div<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${grid}

  display: grid;
`

export const Grid: React.FC<Props> = ({ ...props }) => {
  return <GridStyled {...props} />
}

GridStyled.propTypes = {
  color: PropTypes.string
}
