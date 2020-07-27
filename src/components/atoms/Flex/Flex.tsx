import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { 
  color,
  ColorProps, 
  space, 
  SpaceProps,
  layout, 
  LayoutProps,
  fontSize, 
  FontSizeProps,
  fontWeight, 
  FontWeightProps,
  variant 
} from 'styled-system'


export interface Props extends 
  ColorProps, SpaceProps, LayoutProps, FontSizeProps, FontWeightProps {
  variant:  string,
  justifyContent?: string,
  alignItems?: string,
  flexDirection?: string,
  height?: string,
  padding?: string,
  backgroundColor?: string,
  fullHeight?: boolean,
  flex?: number
}

const flexVariations: {[index: string]:any} = {
  centralized: css`
    justify-content: center;
    align-items: center;
  `,
  fullCentralized: css`
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
}

export const Flex = styled.div<Props>`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  flex: ${props => props.flex};

  ${({ variant }) => flexVariations[variant]}

  ${({ fullHeight }) =>
    !!fullHeight &&
    css`
      height: 100vh;
    `}
`
