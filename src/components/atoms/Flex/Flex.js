import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

const flexVariations = {
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

export const Flex = styled.div`
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

Flex.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  fullHeight: PropTypes.bool
}

Flex.defaultProps = {}
