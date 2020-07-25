import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

import { Icon } from '../Icon'
import { Text } from '../Text'

const buttonVariations = {
  text: css`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 0;

    &:hover {
      text-decoration: underline;
    }

    ${({ palette }) =>
      palette === 'primary' &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `}

    ${({ palette }) =>
      palette === 'secondary' &&
      css`
        color: ${({ theme }) => theme.colors.secondary};
      `}
  `,
  contained: css`
    border: none;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    ${({ palette }) =>
      palette === 'primary' &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};

        &:hover {
          background: ${({ theme }) => theme.colors.primaryMedium};
        }
      `};
  `,
  outlined: css`
    ${({ palette }) =>
      palette === 'primary' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background: none;

        & hover: {
          background: ${({ theme }) => theme.colors.primaryLighest};
        }
      `}
  `,
  neutral: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  `
}

export const ButtonStyled = styled.button`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  max-height: 42px;

  ${({ variant }) => buttonVariations[variant || 'text']}

  cursor: pointer;
`

export const Button = ({ children, prefix, sufix, ...props }) => {
  if (prefix) {
    return (
      <ButtonStyled {...props}>
        <Icon mr={5}>{prefix}</Icon>
        <Text fontSize='medium'>{children}</Text>
      </ButtonStyled>
    )
  }

  if (sufix) {
    return (
      <ButtonStyled {...props}>
        <Text fontSize='medium'>{children}</Text>
        <Icon ml={5}>{sufix}</Icon>
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled {...props}>
      <Text fontSize='medium'>{children}</Text>
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  prefix: PropTypes.node,
  sufix: PropTypes.node
}

Button.defaultProps = {}
