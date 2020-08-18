import styled, { css, DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'
import {
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
  ${layout}
  ${fontSize}
  ${fontWeight}
  ${border}
  ${position}

  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  flex: ${props => props.flex};
  
  ${({ variant }) => flexVariations[variant || 'auto']}

  ${({ fullHeight }) =>
    !!fullHeight &&
    css`
      height: 100vh;
    `}
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
