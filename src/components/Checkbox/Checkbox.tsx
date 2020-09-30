import React, { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import styled, { DefaultTheme } from 'styled-components'
import { color } from 'styled-system'

export interface Props
  extends DefaultTheme,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelColor?: string
  style?: any
}

const Label = styled.label<Props>`
  ${color}

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
  border: 2px solid ${({ theme }) => theme.colors.primary};

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
  ({ label, style, labelColor, disabled, ...props }, ref) => {
    return (
      <Label color={labelColor} style={style} disabled={disabled}>
        <HiddenCheckbox
          disabled={disabled}
          type='checkbox'
          ref={ref}
          {...props}
        />
        <BoxCheckbox>
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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  style: PropTypes.any,
  disabled: PropTypes.bool
}
