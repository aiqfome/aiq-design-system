import React from 'react'

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
  FontWeightProps,
} from 'styled-system'

export interface Props extends  SpaceProps, LayoutProps, FontSizeProps, FontWeightProps{

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

export const Grid: React.FC<Props> = ({...props}) => {
  return <GridStyled {...props} />
}