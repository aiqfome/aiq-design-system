import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export const AvatarStyled = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 5px;
`

export const Avatar = ({ src, alt, props }) => {
  return <AvatarStyled src={src} alt={alt} {...props} />
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
