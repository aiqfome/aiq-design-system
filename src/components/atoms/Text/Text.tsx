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
  FontWeightProps
} from 'styled-system'

export interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  cursor?: string
}

export const Text = styled.span<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  cursor: ${props => props.cursor || 'auto'};
`
