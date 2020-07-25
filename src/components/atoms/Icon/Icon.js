import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { color, space, layout } from 'styled-system'

import { Flex } from '../Flex'

export const IconStyled = styled(Flex)`
  ${color}
  ${space}
  ${layout}

  cursor: ${props => props.cursor};

  align-items: center;
`

export const Icon = ({ children, ...props }) => {
  return <IconStyled {...props}>{children}</IconStyled>
}

Icon.propTypes = {
  children: PropTypes.node
}

Icon.defaultProps = {}
