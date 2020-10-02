import React from 'react'
import PropTypes from 'prop-types'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps
} from 'styled-system'
import styled from 'styled-components'

import { Flex } from '../Flex'

export interface Props extends SpaceProps, ColorProps, LayoutProps {
  children?: any
  color?: string
}

const LineStyled = styled.hr<Props>`
  ${layout}
  ${space}
  ${color}
  border: none;

`

export const Divider: React.FC<Props> = ({
  children,
  height = '1px',
  color = 'mediumGrey',
  ...props
}) => {
  if (children) {
    return (
      <Flex width='100%' alignItems='center' justifyContent='center'>
        <LineStyled height={height} backgroundColor={color} {...props} />
        {children}
        <LineStyled height={height} backgroundColor={color} {...props} />
      </Flex>
    )
  }

  return <LineStyled height={height} backgroundColor={color} {...props} />
}

Divider.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  height: PropTypes.any
}
