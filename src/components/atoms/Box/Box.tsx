import React, {RefObject} from 'react'

import styled from 'styled-components'
import { 
  color, 
  space,
  SpaceProps,
  layout, 
  LayoutProps, 
  fontSize, 
  FontSizeProps, 
  fontWeight, 
  FontWeightProps 
} from 'styled-system'

export interface Props extends
  SpaceProps, LayoutProps, FontSizeProps, FontWeightProps {
  forwardedRef?: RefObject<HTMLDivElement>,
}

export const BoxStyled = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

export const Box: React.FC<Props> = ({forwardedRef, ...props}) => {
  return <BoxStyled {...props} ref={forwardedRef} />
}