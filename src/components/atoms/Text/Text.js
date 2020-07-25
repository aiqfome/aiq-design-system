import PropTypes from 'prop-types'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

export const Text = styled.span`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

Text.propTypes = {
  cursor: PropTypes.string
}

Text.defaultProps = {}
