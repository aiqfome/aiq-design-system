import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../Text'
import { Box, Props as BoxProps } from '../Box'

export interface Props extends BoxProps {
  src?: string
  palette?: string
  alt: string
}

export const AvatarStyled = styled.img`
  width: 36px;
  height: 36px;
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

  return (
    <Box
      width='36px'
      height='36px'
      display='flex'
      verticalAlign='center'
      alignItems='center'
      justifyContent='center'
      borderRadius='5px'
      backgroundColor={src ? 'transparent' : `${palette}Light`}
      {...props}
    >
      {src ? (
        <AvatarStyled src={src} alt={alt} />
      ) : (
        <Text fontWeight='bold' color={palette}>
          {name}
        </Text>
      )}
    </Box>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  palette: PropTypes.string,
  alt: PropTypes.string.isRequired
}
