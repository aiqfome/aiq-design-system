import React, { useState, InputHTMLAttributes } from 'react'

import ReactNumeric from 'react-numeric'

import styled, { css } from 'styled-components'
import {
  space,
  layout,
  border,
  color,
  fontSize,
  fontWeight
} from 'styled-system'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { Text } from '../Text'

import { InputErrorMessage } from '../InputErrorMessage'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string | number
  prefix?: any
  sufix?: any
  variant?: 'outlined' | 'default'
  placeholder?: string
  disabled?: boolean

  containerProps?: any
  boxProps?: any
  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
  marginLeft?: any
  marginRight?: any

  nativeAutoComplete?: 'on' | 'disabled'

  onChange?: any
}

export const NeutralInputStyled = styled(ReactNumeric)<Props>`
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  padding: 10px 12px;
  font-family: inherit;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;

  ${space}
  ${layout}
  ${color}
  ${border}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, errorForm }) =>
    errorForm &&
    css`
      border-color: ${theme.colors.error};
    `};
`

export interface PropsNeutralContainerSufix {
  inputSelected?: boolean
  errorForm?: boolean
  onClick?: () => void
  onBlur?: () => void
}

const NeutralContainerSufix = styled(Box)<PropsNeutralContainerSufix>`
  display: flex;
  align-items: center;

  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;

  ${({ inputSelected }) =>
    inputSelected &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}

  ${({ theme, errorForm }) =>
    errorForm &&
    css`
      border-color: ${theme.colors.error};
    `};
  ${border}
`

const NeutralInputSufixed = styled(ReactNumeric)<Props>`
  ${layout}
  ${color}

  border: none;
`

const NeutralInputPrefixed = styled(ReactNumeric)<Props>`
  ${layout}
  ${color}
  
  border: none;
  margin-left: 16px;
`

const OutlinedContainer = styled(Box)`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

const OutlinedLabelStyled = styled.label<Props>`
  position: relative;
  top: -6px;
  padding-top: 6px;
  line-height: 1.5;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > input {
    max-height: 37px;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    border: solid 1px
      ${({ theme, errorForm }) =>
        errorForm ? theme.colors.error : theme.colors.mediumGrey};
    border-top-color: ${({ label }) => (label ? 'transparent' : 'interiht')};

    border-radius: 4px;
    padding: 9px 13px 9px;
    caret-color: ${({ theme }) => theme.colors.almostBlack};
    color: ${({ theme }) => theme.colors.almostBlack};
    width: 100%;
    height: inherit;
    box-shadow: none;
    line-height: inherit;
    transition: border 0.2s, box-shadow 0.2s;
    background: ${({ theme, disabled }) =>
      disabled ? theme.colors.lightGrey : theme.colors.white};

    ${({ placeholder, theme, errorForm }) => {
      if (placeholder === ' ' || placeholder === '') {
        return css`
          &:not(:focus):placeholder-shown {
            border-top-color: ${errorForm
              ? theme.colors.error
              : theme.colors.mediumGrey};
          }

          &:not(:focus):placeholder-shown + span {
            font-size: inherit;
            line-height: 53px !important;
            color: ${theme.colors.grey};
          }
        `
      }

      return css``
    }};

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      border-top-color: transparent;
      box-shadow: inset 1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset -1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset 0 -1px ${({ theme }) => theme.colors.primaryLight};
      outline: none;
    }

    &:focus + span {
      color: ${({ theme }) => theme.colors.primary} !important;
    }

    &:focus + span::before,
    &:focus + span::after {
      border-top-color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: inset 0 1px ${({ theme }) => theme.colors.primaryLight};
    }

    & + span,
    &:focus + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      max-height: 100%;
      font-size: 75%;
      line-height: 15px !important;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
      color: ${({ theme }) => theme.colors.almostBlack};

      &::before,
      &::after {
        content: '';
        display: block;
        box-sizing: border-box;
        margin-top: 6px;
        border-top: solid 1px;
        min-width: 10px;
        height: 8px;
        pointer-events: none;
        box-shadow: inset 0 1px transparent;
        transition: border-color 0.2s, box-shadow 0.2s;
        border-top-color: ${({ theme, errorForm }) =>
          errorForm ? theme.colors.error : theme.colors.mediumGrey};
      }

      &::before {
        margin-right: 4px;
        border-left: solid 1px transparent;
        border-radius: 4px 0;
      }

      &::after {
        flex-grow: 1;
        margin-left: 4px;
        border-right: solid 1px transparent;
        border-radius: 0 4px;
      }
    }
  }

  & > button,
  & > div.sufix {
    right: 0;
    margin-right: 5px;
    position: absolute;
    background: none;
    border: none;
  }
`

export const InputNumber: React.FC<Props> = ({
  name,
  inputRef,
  label,
  errorForm,
  type = 'text',
  errorMessage,
  prefix,
  sufix,
  value,
  variant,
  placeholder,
  disabled,
  containerProps,
  nativeAutoComplete = 'disabled',
  ...props
}) => {
  const [inputSelected, setInputSelected] = useState(false)

  const {
    readOnly = false,
    backgroundColor,
    border,
    width,
    maxWidth,
    boxProps,
    marginLeft,
    marginRight
  } = props

  const brazilianNumericOptions = {
    digitGroupSeparator: '.',
    decimalCharacter: ',',
    currencySymbolPlacement: 'p'
  }

  const numericOptions = {
    ...brazilianNumericOptions,
    readOnly,
    selectOnFocus: !readOnly,
    showWarnings: false,
    allowDecimalPadding: false,
    currencySymbol: '',
    isCancellable: false,
    minimumValue: '0',
    maximumValue: '9999999999',
    defaultValueOverride: '0',
    modifyValueOnWheel: false,
    onInvalidPaste: 'ignore',
    emptyInputBehavior: 'zero'
  }

  const neutralBoxStyled = {
    backgroundColor,
    border,
    width,
    maxWidth,
    ...boxProps
  }

  const outlinedStyledContainer = {
    backgroundColor,
    maxWidth,
    marginLeft,
    marginRight
  }

  if (variant === 'outlined') {
    if (sufix) {
      return (
        <OutlinedContainer {...outlinedStyledContainer} {...containerProps}>
          <OutlinedLabelStyled
            label={label}
            errorForm={errorForm}
            disabled={disabled}
            placeholder={placeholder || ' '}
          >
            <ReactNumeric
              value={value}
              placeholder={placeholder || ' '}
              name={name}
              type={type}
              ref={inputRef}
              disabled={disabled}
              autoComplete={nativeAutoComplete}
              {...numericOptions}
              {...props}
            />
            {label && <Text>{label}</Text>}

            {sufix && <div className='sufix'>{sufix}</div>}
          </OutlinedLabelStyled>

          {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
        </OutlinedContainer>
      )
    }

    return (
      <OutlinedContainer {...outlinedStyledContainer} {...containerProps}>
        <OutlinedLabelStyled
          label={label}
          errorForm={errorForm}
          disabled={disabled}
          placeholder={placeholder || ' '}
        >
          <ReactNumeric
            value={value}
            placeholder={placeholder || ' '}
            name={name}
            type={type}
            ref={inputRef}
            disabled={disabled}
            autoComplete={nativeAutoComplete}
            {...numericOptions}
            {...props}
          />
          {label && <Text>{label}</Text>}
        </OutlinedLabelStyled>

        {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
      </OutlinedContainer>
    )
  }

  if (sufix) {
    return (
      <Flex {...containerProps} flexDirection='column'>
        <NeutralContainerSufix
          {...neutralBoxStyled}
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          <NeutralInputSufixed
            name={name}
            ref={inputRef}
            placeholder={placeholder}
            type={type}
            value={value}
            errorForm={errorForm}
            errorMessage={errorMessage}
            autoComplete={nativeAutoComplete}
            {...numericOptions}
            {...props}
          />
          {sufix}
        </NeutralContainerSufix>

        {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
      </Flex>
    )
  }

  if (prefix) {
    return (
      <Flex {...containerProps}>
        <NeutralContainerSufix
          {...neutralBoxStyled}
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          {prefix}
          <NeutralInputPrefixed
            name={name}
            ref={inputRef}
            placeholder={placeholder}
            type={type}
            value={value}
            errorForm={errorForm}
            errorMessage={errorMessage}
            autoComplete={nativeAutoComplete}
            {...numericOptions}
            {...props}
          />
        </NeutralContainerSufix>

        {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
      </Flex>
    )
  }

  return (
    <Flex {...containerProps} flexDirection='column'>
      <NeutralInputStyled
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        sufix={sufix}
        value={value}
        errorForm={errorForm}
        errorMessage={errorMessage}
        autoComplete={nativeAutoComplete}
        {...numericOptions}
        {...props}
      />

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
}
