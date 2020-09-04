import styled, { css, DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'
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
  border,
  BorderProps,
  position,
  PositionProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    DefaultTheme,
    LayoutProps,
    FontSizeProps,
    FontWeightProps,
    PositionProps,
    ColorProps,
    BorderProps {
  variant?: 'auto' | 'centralized' | 'fullCentralized'
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  height?: string
  padding?: string
  backgroundColor?: string
  border?: string
  fullHeight?: boolean
  flex?: number
  color?: any
}

const flexVariations: { [index: string]: any } = {
  auto: css``,
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
  ${space}
  ${fontSize}
  ${fontWeight}
  ${border}
  ${position}
  ${color}

  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height};
  padding: ${props => props.padding};
  flex: ${props => props.flex};
  
  ${({ variant }) => flexVariations[variant || 'auto']}

  ${({ fullHeight }) =>
    !!fullHeight &&
    css`
      height: 100vh;
    `}

  ${layout}
`

Flex.propTypes = {
  variant: PropTypes.oneOf(['auto', 'centralized', 'fullCentralized']),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  fullHeight: PropTypes.bool,
  flex: PropTypes.number
}
