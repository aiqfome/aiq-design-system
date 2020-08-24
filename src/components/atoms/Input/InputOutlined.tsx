import React, { useState, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import styled from 'styled-components'
import { color, space, layout, fontSize, fontWeight } from 'styled-system'

import { Button } from '../Button'
import { Text } from '../Text'

import { InputErrorMessage } from './InputErrorMessage'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inputRef?: any
  label?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  sufix?: any
}

const Container = styled.div`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}
`

const LabelStyled = styled.label<Props>`
  position: relative;
  padding-top: 6px;
  line-height: 1.5;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > input {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px
      ${({ theme, errorForm }) =>
        errorForm ? theme.colors.error : theme.colors.mediumGrey};
    border-top-color: transparent;
    border-radius: 4px;
    padding: 9px 13px 9px;
    caret-color: ${({ theme }) => theme.colors.almostBlack};
    color: ${({ theme }) => theme.colors.almostBlack};
    width: 100%;
    height: inherit;
    background-color: transparent;
    box-shadow: none;
    line-height: inherit;
    transition: border 0.2s, box-shadow 0.2s;
    background: white;

    &:not(:focus):placeholder-shown {
      border-top-color: ${({ theme, errorForm }) =>
        errorForm ? theme.colors.error : theme.colors.mediumGrey};
    }

    &:not(:focus):placeholder-shown + span {
      font-size: inherit;
      line-height: 53px;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      border-top-color: transparent;
      box-shadow: inset 1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset -1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset 0 -1px ${({ theme }) => theme.colors.primaryLight};
      outline: none;
    }

    &:focus + span {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus + span::before,
    &:focus + span::after {
      border-top-color: ${({ theme }) => theme.colors.primary};
      box-shadow: inset 0 1px ${({ theme }) => theme.colors.primaryLight};
    }

    & + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      max-height: 100%;
      font-size: 75%;
      line-height: 15px;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
      color: ${({ theme }) => theme.colors.grey};

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

  button {
    right: 0;
    position: absolute;
    background: none;
    border: none;
  }
`

export const InputOutlined: React.FC<Props> = ({
  name,
  inputRef,
  label,
  errorForm,
  type = 'text',
  errorMessage,
  sufix,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  if (type === 'password') {
    return (
      <Container {...props}>
        <LabelStyled errorForm={errorForm}>
          <input
            {...props}
            placeholder=' '
            type={showPassword ? 'text' : 'password'}
            ref={inputRef}
            name={name}
          />
          <Text>{label}</Text>

          <Button
            palette='primary'
            mr={5}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <MdVisibilityOff size={22} />
            ) : (
              <MdVisibility size={22} />
            )}
          </Button>
        </LabelStyled>

        <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
      </Container>
    )
  }

  if (sufix) {
    return (
      <Container {...props}>
        <LabelStyled errorForm={errorForm}>
          <input
            {...props}
            placeholder=' '
            type={type}
            value={value}
            ref={inputRef}
            name={name}
          />
          <Text>{label}</Text>

          {sufix}
        </LabelStyled>

        <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
      </Container>
    )
  }

  return (
    <Container {...props}>
      <LabelStyled errorForm={errorForm}>
        <input
          {...props}
          value={value}
          placeholder=' '
          name={name}
          type={type}
          ref={inputRef}
          autoComplete='off'
        />
        <Text>{label}</Text>
      </LabelStyled>

      <InputErrorMessage errorForm={errorForm} errorMessage={errorMessage} />
    </Container>
  )
}

InputOutlined.propTypes = {
  name: PropTypes.string,
  inputRef: PropTypes.any,
  label: PropTypes.string,
  errorForm: PropTypes.bool,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  sufix: PropTypes.any,
  value: PropTypes.string
}
