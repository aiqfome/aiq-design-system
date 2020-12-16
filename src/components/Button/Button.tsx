import React, { ReactNode, useCallback } from 'react'
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
  variant?: 'text' | 'contained' | 'outlined' | 'fab' | 'icon'
  palette?: 'primary' | 'secondary' | 'neutral'
  onClick?: any
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
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
  padding: 10px 20px;
  max-height: 42px;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

    
  &.__button-text {
    border: none;
    background: none;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }

    &.__button-text-primary {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.__button-text-secondary {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.__button-text-neutral {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.__button-contained {
    border: none;
    justify-content: center;
    transition: 0.5s;

    &.__button-contained-primary {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryMedium};
      }
    }

    &.__button-contained-secondary {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background: ${({ theme }) => theme.colors.secondaryMedium};
      }
    }

    &.__button-contained-neutral {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.almosBlack};
      border: 1px solid ${({ theme }) => theme.colors.almostBlack};
    }
  }

  &.__button-outlined {
    justify-content: center;
    transition: 0.5s;

    &.__button-outlined-primary {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      background: none;

      &:hover {
        background: ${({ theme }) => theme.colors.primaryLight};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &.__button-outlined-secondary {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};
      background: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryDark};
      }
    }

    &.__button-outlined-neutral {
      border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
      color: ${({ theme }) => theme.colors.almostBlack};
      background: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
    }
  }

  &.__button-fab {
    justify-content: center;
    border-radius: 24px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 14px 21px;
    transition: 0.5s;

    &.__button-fab-icon {
      border-radius: 50%;
      padding: 0;
      min-height: 50px;
      min-width: 50px;
    }

    &.__button-fab-primary {
      background: ${({ theme }) => theme.colors.primary};
    }

    &.__button-fab-secondary {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &.__button-fab-neutral {
      color: ${({ theme }) => theme.colors.almostBlack};
      background: ${({ theme }) => theme.colors.white};
    }
  }

  &.__button-icon {
    justify-content: center;
    border: none;
    background: none;
    padding: 8px;
    border-radius: 50%;
    transition: 0.5s;

    background-position: center;
    transition: background 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.lightGrey}
        radial-gradient(
          circle,
          transparent 1%,
          ${({ theme }) => theme.colors.lightGrey} 1%
        )
        center/15000%;
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.grey};
      background-size: 100%;
      transition: background 0s;
      opacity: 0.5;
    }
  }
`

export const Button: React.FC<Props> = ({
  children,
  prefix,
  sufix,
  palette = 'primary',
  variant = 'text',
  variantType,
  type = 'button',
  className,
  ...props
}) => {
  const getClassName = useCallback(() => {
    return `${className} __button-${variant} __button-${variant}-${palette} ${
      variantType && `__button-${variant}-${variantType}`
    }`
  }, [palette, variant, variantType, className])

  if (sufix && prefix) {
    return (
      <ButtonStyled className={getClassName()} type={type} {...props}>
        <Icon data-testid='button-prefix' cursor='pointer' mr={5}>
          {prefix}
        </Icon>
        <Text fontSize='medium'>{children}</Text>
        <Icon data-testid='button-sufix' cursor='pointer' ml={5}>
          {sufix}
        </Icon>
      </ButtonStyled>
    )
  }

  if (prefix) {
    return (
      <ButtonStyled className={getClassName()} type={type} {...props}>
        <Icon data-testid='button-prefix' cursor='pointer' mr={5}>
          {prefix}
        </Icon>
        <Text fontSize='medium'>{children}</Text>
      </ButtonStyled>
    )
  }

  if (sufix) {
    return (
      <ButtonStyled className={getClassName()} type={type} {...props}>
        <Text fontSize='medium'>{children}</Text>
        <Icon data-testid='button-sufix' cursor='pointer' ml={5}>
          {sufix}
        </Icon>
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled type={type} className={getClassName()} {...props}>
      <Text fontSize='medium'>{children}</Text>
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  prefix: PropTypes.any,
  className: PropTypes.string,
  sufix: PropTypes.any,
  refButton: PropTypes.any,
  palette: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
  variantType: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'fab', 'icon']),
  disabled: PropTypes.bool,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}
