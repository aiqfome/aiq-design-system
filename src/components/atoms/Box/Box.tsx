import React, {RefObject} from 'react'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

export interface Props {
  forwardedRef?: RefObject<HTMLDivElement>
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