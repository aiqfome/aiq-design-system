import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled, { css, DefaultTheme } from 'styled-components'
import {
  color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

import { Icon } from '../Icon'
import { Text } from '../Text'

export interface Props
  extends DefaultTheme,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  children?: ReactNode
  prefix?: any
  sufix?: any
  refButton?: any
  variantType?: string
  variant?: 'text' | 'contained' | 'outlined' | 'fab'
  palette?: 'primary' | 'secondary' | 'neutral'
  onClick?: any
  fullWidth?: boolean
}

const buttonVariations: { [index: string]: any } = {
  text: css<Props>`
    border: none;
    background: none;
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
    ${({ palette }) =>
      palette === 'neutral' &&
      css`
        color: ${({ theme }) => theme.colors.almosBlack};
      `}
  `,
  contained: css<Props>`
    border: none;

    ${({ palette }) =>
      palette === 'primary' &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.primary};

        &:hover {
          background: ${({ theme }) => theme.colors.primaryMedium};
        }
      `};
    ${({ palette }) =>
      palette === 'secondary' &&
      css`
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.secondary};

        &:hover {
          background: ${({ theme }) => theme.colors.secondaryMedium};
        }
      `};
    ${({ palette }) =>
      palette === 'neutral' &&
      css`
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.almosBlack};
        border: 1px solid ${({ theme }) => theme.colors.almostBlack};
      `}
  `,
  outlined: css<Props>`
    ${({ palette }) =>
      palette === 'primary' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        background: none;

        &:hover {
          background: ${({ theme }) => theme.colors.primaryLighest};
        }
      `}
    ${({ palette }) =>
      palette === 'secondary' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
        background: none;

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondaryLighest};
        }
      `}
    ${({ palette }) =>
      palette === 'neutral' &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
        color: ${({ theme }) => theme.colors.almostBlack};
        background: ${({ theme }) => theme.colors.white};

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightGrey};
        }
      `}
  `,
  fab: css<Props>`
    border-radius: 24px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 14px 21px;

    ${({ variantType }) =>
      variantType === 'icon' &&
      css`
        border-radius: 50%;
        padding: 0;
        min-height: 50px;
        min-width: 50px;
      `}
    ${({ palette }) =>
      palette === 'primary' &&
      css`
        background: ${({ theme }) => theme.colors.primary};
      `}
    ${({ palette }) =>
      palette === 'secondary' &&
      css`
        background: ${({ theme }) => theme.colors.secondary};
      `}
    ${({ palette }) =>
      palette === 'neutral' &&
      css`
        color: ${({ theme }) => theme.colors.almostBlack};
        background: ${({ theme }) => theme.colors.white};
      `}
  `
}

export const ButtonStyled = styled.button<Props>`
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
  cursor: pointer;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ variant }) => buttonVariations[variant || 'text']}
`

export const Button: React.FC<Props> = ({
  children,
  prefix,
  sufix,
  ...props
}) => {
  if (prefix) {
    return (
      <ButtonStyled {...props}>
        <Icon cursor='pointer' mr={5}>
          {prefix}
        </Icon>
        <Text cursor='pointer' fontSize='medium'>
          {children}
        </Text>
      </ButtonStyled>
    )
  }

  if (sufix) {
    return (
      <ButtonStyled {...props}>
        <Text cursor='pointer' fontSize='medium'>
          {children}
        </Text>
        <Icon cursor='pointer' ml={5}>
          {sufix}
        </Icon>
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled {...props}>
      <Text cursor='pointer' fontSize='medium'>
        {children}
      </Text>
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  prefix: PropTypes.any,
  sufix: PropTypes.any,
  refButton: PropTypes.any,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
