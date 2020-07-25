import React from 'react'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

export const BoxStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

export const Box = props => {
  return <BoxStyled {...props} />
}

Box.propTypes = {}

Box.defaultProps = {}
