import React from 'react'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

export const GridStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  display: grid;
`

export const Grid = props => {
  return <GridStyled {...props} />
}

Grid.propTypes = {}

Grid.defaultProps = {}
