import React, { useState, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import styled, { css } from 'styled-components'
import { space } from 'styled-system'

import { Button } from '../Button'
import { Flex } from '../Flex'

import { InputErrorMessage } from './InputErrorMessage'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  sufix?: any
  placeholder?: string
}

export interface PropsContainerSufix {
  inputSelected?: boolean
  errorForm?: boolean
}

const InputStyled = styled.input<Props>`
  ${space}

  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, errorForm }) =>
    errorForm &&
    css`
      border-color: ${theme.colors.error};
    `};
`

const ContainerSufix = styled.div<PropsContainerSufix>`
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
`

const InputSufixed = styled.input<Props>`
  border: none;
`

const Input: React.FC<Props> = ({ inputRef, value, ...props }) => {
  const [inputValue, setInputValue] = useState(value)

  return (
    <InputStyled
      ref={inputRef}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      {...props}
    />
  )
}

export const InputNeutral: React.FC<Props> = ({
  name,
  inputRef,
  errorForm,
  errorMessage,
  type = 'text',
  sufix,
  value,
  placeholder,
  ...props
}) => {
  const [inputSelected, setInputSelected] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  if (sufix) {
    return (
      <Flex flexDirection='column'>
        <ContainerSufix
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          <InputSufixed
            ref={inputRef}
            placeholder={placeholder}
            type={type}
            value={value}
          />
          {sufix}
        </ContainerSufix>

        <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
      </Flex>
    )
  }

  if (type === 'password') {
    return (
      <Flex flexDirection='column'>
        <ContainerSufix
          inputSelected={inputSelected}
          onClick={() => setInputSelected(true)}
          onBlur={() => setInputSelected(false)}
        >
          <InputSufixed
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

        <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
      </Flex>
    )
  }

  return (
    <Flex flexDirection='column'>
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
      />

      <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
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
  value: PropTypes.string,
  placeholder: PropTypes.string
}
