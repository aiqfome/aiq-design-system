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

export type Props = ColorProps &
  SpaceProps &
  LayoutProps &
  FontSizeProps &
  FontWeightProps &
  TypographyProps & {
    cursor?: string
    truncate?: boolean
    whiteSpace?: 'nowrap' | 'normal' | 'pre'
  }

export const Text = styled.span<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${typography}

  white-space: ${props => props.whiteSpace || 'normal'};

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};

  ${({ truncate }) =>
    truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`

Text.propTypes = {
  cursor: PropTypes.string,
  whiteSpace: PropTypes.oneOf(['nowrap', 'normal', 'pre'])
}
