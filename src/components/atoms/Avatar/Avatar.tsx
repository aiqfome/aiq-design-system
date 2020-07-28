import React from 'react'

import styled from 'styled-components'

export interface Props {
  src: string
  alt: string
}

export const AvatarStyled = styled.img<Props>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
`

export const Avatar: React.FC<Props> = ({ src, alt, ...props }) => {
  return <AvatarStyled src={src} alt={alt} {...props} />
}
