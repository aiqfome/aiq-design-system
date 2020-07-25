import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const drawerVariations = {
  right: css`
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
  left: css`
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

export const DrawerStyled = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumGrey};
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 2000;
  transition: transform 0.8s;

  ${({ variation }) => drawerVariations[variation || 'right']}
`

export const Drawer = ({ opened, children, ...props }) => {
  return (
    <DrawerStyled opened={opened} {...props}>
      {children}
    </DrawerStyled>
  )
}

Drawer.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.node
}

Drawer.defaultProps = {
  opened: false
}
