import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled, { css, DefaultTheme } from 'styled-components'
import { layout, LayoutProps, shadow, ShadowProps } from 'styled-system'

export interface Props extends DefaultTheme, LayoutProps, ShadowProps {
  variation?: 'right' | 'left'
  opened: boolean
  children?: ReactNode
}

const drawerVariations: { [index: string]: any } = {
  right: css<Props>`
    right: 0;

    ${({ opened }) =>
      opened &&
      css`
        transform: translateX(0);
      `}

    ${({ opened }) =>
      !opened &&
      css`
        transform: translateX(500px);
      `}
  `,
  left: css<Props>`
    left: 0;

    ${({ opened }) =>
      opened &&
      css`
        transform: translateX(0);
      `}

    ${({ opened }) =>
      !opened &&
      css`
        transform: translateX(-340px);
      `}
  `
}

export const DrawerStyled = styled.div<Props>`  
  ${layout}
  ${shadow}
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumGrey};
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 2000;
  transition: transform 0.8s;

  ${({ variation }) => drawerVariations[variation || 'right']}
`

export const Drawer: React.FC<Props> = ({
  opened = false,
  variation = 'right',
  children,
  ...props
}) => {
  return (
    <DrawerStyled opened={opened} variation={variation} {...props}>
      {children}
    </DrawerStyled>
  )
}

Drawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  variation: PropTypes.oneOf(['right', 'left']),
  children: PropTypes.node
}
