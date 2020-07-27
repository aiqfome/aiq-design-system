import React, { ReactChildren, ReactNode } from 'react'

import styled, { css, DefaultTheme } from 'styled-components'
import { 
  color,
  space, 
  SpaceProps,
  layout, 
  LayoutProps,
  fontSize, 
  FontSizeProps,
  fontWeight ,
  FontWeightProps
} from 'styled-system'

import { Icon } from '../Icon'
import { Text } from '../Text'

export interface Props extends DefaultTheme, 
   SpaceProps, LayoutProps, FontSizeProps, FontWeightProps {
    children?: ReactNode,
    prefix?: Node,
    sufix?: Node,
    variant?: string,
    palette ?: string,
}

const buttonVariations:  {[index: string]:any} = {
  text: css<Props>`
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
  contained: css<Props>`
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
  outlined: css<Props>`
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

  ${({ variant }) => buttonVariations[variant || 'text']}

  cursor: pointer;
`

export const Button: React.FC<Props> = ({ children, prefix, sufix, ...props }) => {
  if (prefix) {
    return (
      <ButtonStyled {...props}>
        <Icon cursor="pointer" mr={5}>{prefix}</Icon>
        <Text cursor="pointer" fontSize='medium'>{children}</Text>
      </ButtonStyled>
    )
  }

  if (sufix) {
    return (
      <ButtonStyled {...props}>
        <Text cursor="pointer" fontSize='medium'>{children}</Text>
        <Icon cursor="pointer" ml={5}>{sufix}</Icon>
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled {...props}>
      <Text cursor="pointer" fontSize='medium'>{children}</Text>
    </ButtonStyled>
  )
}
