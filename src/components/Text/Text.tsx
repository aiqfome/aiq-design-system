import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
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
  typography,
  TypographyProps
} from 'styled-system'

export interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps,
    TypographyProps {
  cursor?: string
  whiteSpace?: 'nowrap' | 'normal' | 'pre'
}

export const Text = styled.span<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${typography}

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};
  white-space: ${props => props.whiteSpace || 'normal'};
`

Text.propTypes = {
  cursor: PropTypes.string,
  whiteSpace: PropTypes.oneOf(['nowrap', 'normal', 'pre'])
}
