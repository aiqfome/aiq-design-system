import React, { useState, InputHTMLAttributes } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import styled, { css } from 'styled-components'
import { space, layout, border, color } from 'styled-system'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { Box } from '../Box'

import { InputErrorMessage } from '../InputErrorMessage'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name?: string
  inputRef?: any
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  sufix?: any
  prefix?: any
  placeholder?: string
  containerProps?: any
  boxProps?: any

  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
  disabled?: boolean
  nativeAutoComplete?: 'on' | 'disabled'
}

const InputStyled = styled.input<Props>`
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

export interface PropsContainerSufix {
  inputSelected?: boolean
  errorForm?: boolean
  onClick?: () => void
  onBlur?: () => void
  disabled?: boolean
}

const ContainerSufix = styled(Box)<PropsContainerSufix>`
  display: flex;
  align-items: center;

  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightGrey : theme.colors.white};

  ${({ inputSelected, disabled }) =>
    inputSelected &&
    !disabled &&
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

const InputSufixed = styled.input<Props>`
  ${layout}
  ${color}

  border: none;
`

const InputPrefixed = styled.input<Props>`
  ${layout}
  ${color}
  
  border: none;
  margin-left: 16px;
`

const Input: React.FC<Props> = ({
  inputRef,
  value,
  nativeAutoComplete,
  ...props
}) => {
  return (
    <InputStyled
      value={value}
      ref={inputRef}
      autoComplete={nativeAutoComplete}
      {...props}
    />
  )
}

export const InputNeutral = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      inputRef,
      errorForm,
      errorMessage,
      type = 'text',
      sufix,
      prefix,
      value,
      placeholder,
      containerProps,
      nativeAutoComplete,
      disabled,
      ...props
    },
    ref
  ) => {
    const [inputSelected, setInputSelected] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const { backgroundColor, border, width, maxWidth, boxProps } = props
    const boxStyled = {
      backgroundColor,
      border,
      width,
      maxWidth,
      ...boxProps
    }

    if (sufix) {
      return (
        <Flex {...containerProps} flexDirection='column'>
          <ContainerSufix
            {...boxStyled}
            errorForm={errorForm}
            inputSelected={inputSelected}
            onClick={() => setInputSelected(true)}
            onBlur={() => setInputSelected(false)}
            disabled={disabled}
          >
            <InputSufixed
              ref={inputRef || ref}
              placeholder={placeholder}
              type={type}
              value={value}
              autoComplete={nativeAutoComplete}
              disabled={disabled}
              {...props}
            />
            {sufix}
          </ContainerSufix>

          {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
        </Flex>
      )
    }

    if (prefix) {
      return (
        <Flex {...containerProps}>
          <ContainerSufix
            {...boxStyled}
            errorForm={errorForm}
            inputSelected={inputSelected}
            onClick={() => setInputSelected(true)}
            onBlur={() => setInputSelected(false)}
          >
            {prefix}
            <InputPrefixed
              ref={inputRef || ref}
              placeholder={placeholder}
              type={type}
              value={value}
              autoComplete={nativeAutoComplete}
              {...props}
            />
          </ContainerSufix>

          {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
        </Flex>
      )
    }

    if (type === 'password') {
      return (
        <Flex {...containerProps} flexDirection='column'>
          <ContainerSufix
            {...boxStyled}
            errorForm={errorForm}
            inputSelected={inputSelected}
            onClick={() => setInputSelected(true)}
            onBlur={() => setInputSelected(false)}
          >
            <InputSufixed
              {...props}
              ref={inputRef || ref}
              placeholder={placeholder}
              type={passwordVisible ? 'text' : 'password'}
              value={value}
              autoComplete={nativeAutoComplete}
            />
            <Button
              palette='primary'
              ml={2} mt={2}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <MdVisibilityOff size={22} />
              ) : (
                <MdVisibility size={22} />
              )}
            </Button>
          </ContainerSufix>

          {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
        </Flex>
      )
    }

    return (
      <Flex {...containerProps} flexDirection='column'>
        <Input
          name={name}
          inputRef={inputRef || ref}
          placeholder={placeholder}
          errorForm={errorForm}
          type={type}
          errorMessage={errorMessage}
          sufix={sufix}
          value={value}
          {...props}
          data-testid='input'
          nativeAutoComplete={nativeAutoComplete}
          disabled={disabled}
        />

        {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
      </Flex>
    )
  }
)
