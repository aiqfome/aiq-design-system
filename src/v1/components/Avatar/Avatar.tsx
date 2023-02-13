import React, { useCallback, useState, memo, PropsWithChildren } from 'react'

import { stitches } from '@/src/providers'

import { Text } from '@/src/components/Text'
import { Box, Props as BoxProps } from '@/src/components/Box'
import { testId } from './options'

const { css, styled } = stitches

const BoxRootContainer = stitches.styled(Box, {})

export type Props = BoxProps &
  PropsWithChildren<{
    src?: string
    palette?: string
    alt?: string
    size?: string
    fallback?: string
    variant?: 'box' | 'rounded'
  }>

function BoxRoot({ variant, size, ...props }: Props) {
  const isRounded = variant === 'rounded'

  const className = css({
    br: isRounded ? '50%' : '5px',
    size: size || '36px',
    objectFit: isRounded ? 'cover' : 'contain'
  })()

  return <BoxRootContainer className={className} {...props} />
}

export const AvatarStyled = styled('img', {
  width: '36px',
  height: '36px'
})

const AvatarInitial: React.FC<Props> = memo(({ alt, palette, children }) => {
  return (
    <Text
      data-testid={testId.text}
      aria-label={alt}
      fontWeight='bold'
      color={palette}
    >
      {children.substring(0, 1).toUpperCase()}
    </Text>
  )
})

const AvatarImage = stitches.styled('img', {
  width: '36px',
  height: '36px'
})

const Avatar: React.FC<Props> = ({
  src,
  alt,
  fallback,
  variant = 'box',
  palette = 'primary',
  children,
  ...props
}) => {
  const [useFallback, setUseFallback] = useState(false)
  const [imgFallback, setImgFallback] = useState(fallback)

  const handleSrcError = useCallback(() => setUseFallback(true), [])

  const Image = props => <AvatarImage data-testid={testId.image} {...props} />

  const getImage = () => {
    if (src && !useFallback) {
      return <Image src={src} alt={alt} onError={handleSrcError} />
    }

    if (imgFallback) {
      return (
        <Image alt={alt} src={imgFallback} onError={() => setImgFallback('')} />
      )
    }

    return <AvatarInitial palette={palette}>{children}</AvatarInitial>
  }

  return (
    <BoxRoot
      display='flex'
      variant={variant}
      data-testid={testId.root}
      alignItems='center'
      verticalAlign='center'
      justifyContent='center'
      backgroundColor={src && !useFallback ? 'transparent' : `${palette}Light`}
      {...props}
    >
      {getImage()}
    </BoxRoot>
  )
}

export { Avatar }

Avatar.defaultProps = {
  palette: 'primary'
}

AvatarInitial.displayName = 'AvatarInitial'
