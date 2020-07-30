import React, { ReactNode } from 'react'

import styled, { css, DefaultTheme } from 'styled-components'

export interface Props extends DefaultTheme {
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
  children,
  ...props
}) => {
  return (
    <DrawerStyled opened={opened} {...props}>
      {children}
    </DrawerStyled>
  )
}
