import PropTypes from 'prop-types'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

export interface Props {
  cursor?: string
}

export const Text = styled.span<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  cursor: ${props => props.cursor || 'auto' };
`

