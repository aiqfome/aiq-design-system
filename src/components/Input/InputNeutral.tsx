import React, { useState, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import styled, { css } from 'styled-components'
import { space, layout, border, color } from 'styled-system'

import { Button } from '../Button'
import { Flex } from '../Flex'
import { Box } from '../Box'

import { InputErrorMessage } from '../InputErrorMessage'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
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
}

const ContainerSufix = styled(Box)<PropsContainerSufix>`
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

const Input: React.FC<Props> = ({ inputRef, value, ...props }) => {
  return <InputStyled value={value} ref={inputRef} {...props} />
}

export const InputNeutral: React.FC<Props> = ({
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
  ...props
}) => {
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
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          <InputSufixed
            ref={inputRef}
            placeholder={placeholder}
            type={type}
            value={value}
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
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          {prefix}
          <InputPrefixed
            ref={inputRef}
            placeholder={placeholder}
            type={type}
            value={value}
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
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          <InputSufixed
            {...props}
            ref={inputRef}
            placeholder={placeholder}
            type={passwordVisible ? 'text' : 'password'}
            value={value}
          />
          <Button
            palette='primary'
            mr={5}
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
        inputRef={inputRef}
        placeholder={placeholder}
        errorForm={errorForm}
        type={type}
        errorMessage={errorMessage}
        sufix={sufix}
        value={value}
        {...props}
        data-testid='input'
      />

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </Flex>
  )
}

Input.propTypes = {
  inputRef: PropTypes.any,
  value: PropTypes.string
}

InputNeutral.propTypes = {
  name: PropTypes.string,
  inputRef: PropTypes.any,
  errorForm: PropTypes.bool,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  sufix: PropTypes.any,
  prefix: PropTypes.any,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  containerProps: PropTypes.object,
  boxProps: PropTypes.object,

  backgroundColor: PropTypes.any,
  border: PropTypes.any,
  width: PropTypes.any,
  maxWidth: PropTypes.any
}
