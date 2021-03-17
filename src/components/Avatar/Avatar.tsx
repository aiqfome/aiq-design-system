import React, { useCallback, useState, memo } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Text } from '../Text'
import { Box, Props as BoxProps } from '../Box'

export interface Props extends BoxProps {
  src?: string
  palette?: string
  alt?: string
  size?: string
  fallback?: string
  variant?: 'box' | 'rounded'
}

const BoxStyled = styled(Box)<Props>`
  & > img,
  & {
    border-radius: ${({ variant }) => (variant === 'rounded' ? '50%' : '5px')};
    width: ${({ size }) => size || '36px'};
    height: ${({ size }) => size || '36px'};
    object-fit: ${({ variant }) =>
      variant === 'rounded' ? 'cover' : 'contain'};
  }
`

export const AvatarStyled = styled.img`
  width: 36px;
  height: 36px;
`

const AvatarInitial: React.FC<Props> = memo(({ alt = '', palette }) => {
  return (
    <Text data-testid='name' fontWeight='bold' color={palette}>
      {alt.substring(0, 1).toUpperCase()}
    </Text>
  )
})

export const Avatar: React.FC<Props> = ({
  src,
  alt,
  fallback,
  variant = 'box',
  palette = 'primary',
  ...props
}) => {
  const [useFallback, setUseFallback] = useState(false)
  const [imgFallback, setImgFallback] = useState(fallback)

  const handleSrcError = useCallback(() => setUseFallback(true), [])

  const getImage = () => {
    if (src && !useFallback) {
      return (
        <AvatarStyled
          src={src}
          alt={alt}
          data-testid='src'
          onError={handleSrcError}
        />
      )
    }

    if (imgFallback) {
      return (
        <AvatarStyled
          alt={alt}
          src={imgFallback}
          data-testid='src'
          onError={() => setImgFallback('')}
        />
      )
    }

    return <AvatarInitial alt={alt} palette={palette} />
  }

  return (
    <BoxStyled
      display='flex'
      variant={variant}
      data-testid='box'
      alignItems='center'
      verticalAlign='center'
      justifyContent='center'
      backgroundColor={src && !useFallback ? 'transparent' : `${palette}Light`}
      {...props}
    >
      {getImage()}
    </BoxStyled>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  palette: PropTypes.string,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['box', 'rounded'])
}

Avatar.defaultProps = {
  palette: 'primary'
}

AvatarInitial.displayName = 'AvatarInitial'

AvatarInitial.propTypes = {
  alt: PropTypes.string.isRequired,
  palette: PropTypes.string
}
