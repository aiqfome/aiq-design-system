import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css, DefaultTheme } from 'styled-components'

import { Text } from '../Text'

export interface Props {
  src?: string
  palette?: string
  alt: string
}

export const AvatarStyled = styled.img<Props>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
`

interface ContainerStyledProps extends DefaultTheme {
  palette: string
}

export const ContainerStyled = styled.div<ContainerStyledProps>`
  height: 36px;
  width: 36px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ palette, theme }) =>
    palette === 'primary' &&
    css`
      background: ${theme.colors.primaryLight};
    `}
  ${({ palette, theme }) =>
    palette === 'secondary' &&
    css`
      background: ${theme.colors.secondaryLight};
    `}
`

export const Avatar: React.FC<Props> = ({
  src,
  alt,
  palette = 'primary',
  ...props
}) => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(alt.substring(0, 1).toUpperCase())
  }, [alt])

  if (src) {
    return <AvatarStyled src={src} alt={alt} {...props} />
  }
  return (
    <ContainerStyled palette={palette}>
      <Text fontWeight='bold' color={palette}>
        {name}
      </Text>
    </ContainerStyled>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  palette: PropTypes.string,
  alt: PropTypes.string.isRequired
}
