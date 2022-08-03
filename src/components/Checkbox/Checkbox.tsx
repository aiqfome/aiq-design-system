import React, { InputHTMLAttributes } from 'react'

import styled, { DefaultTheme } from 'styled-components'
import {
  color,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  typography,
  TypographyProps
} from 'styled-system'

export type Props = DefaultTheme &
  FontSizeProps &
  FontWeightProps &
  TypographyProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    labelColor?: string
    style?: any
    borderColor?: string
  }

const Label = styled.label<Props>`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${typography}

  display: flex;
  align-items: center;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const HiddenCheckbox = styled.input<Props>`
  border: 0;
  display: none;
`

const BoxCheckbox = styled.div<Props>`
  display: inline-block;
  margin-right: 12px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 2px solid
    ${({ theme, borderColor }) => theme.colors[borderColor || 'primary']};

  transition: all 0.2s;

  background: transparent;

  ${HiddenCheckbox}:checked + & {
    background: ${({ theme }) => theme.colors.primary};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`

const Icon = styled.svg<Props>`
  display: none;
  fill: none;
  stroke: white;
  stroke-width: 4px;
  transition: all 0.2s;

  ${HiddenCheckbox}:checked ~ div >  & {
    display: block;
  }
`

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, style, labelColor, disabled, borderColor, ...props }, ref) => {
    return (
      <Label
        data-testid='checkbox'
        color={labelColor}
        style={style}
        disabled={disabled}
      >
        <HiddenCheckbox
          disabled={disabled}
          type='checkbox'
          ref={ref}
          {...props}
        />
        <BoxCheckbox borderColor={borderColor}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </BoxCheckbox>

        {label}
      </Label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
