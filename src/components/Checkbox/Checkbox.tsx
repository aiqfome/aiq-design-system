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
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary : 'transparent'};
  transition: all 0.2s;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`

const Icon = styled.svg<Props>`
  display: ${({ checked }) => (checked ? 'block' : 'none')};
  fill: none;
  stroke: white;
  stroke-width: 4px;
  transition: all 0.2s;
`

export const Checkbox: React.FC<Props> = ({
  checked,
  label,
  style,
  labelColor,
  disabled,
  ...props
}) => {
  return (
    <Label color={labelColor} style={style} disabled={disabled}>
      <HiddenCheckbox
        disabled={disabled}
        type='checkbox'
        checked={checked}
        {...props}
      />
      <BoxCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24' checked={checked}>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </BoxCheckbox>
      {label}
    </Label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  style: PropTypes.any,
  disabled: PropTypes.bool
}
