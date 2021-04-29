import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'

import styled, { css } from 'styled-components'
import { space, layout, border, color } from 'styled-system'

import { Button } from '../Button'
import { Box } from '../Box'
import { Text } from '../Text'

import { InputErrorMessage } from '../InputErrorMessage'

export interface Props {
  name?: string
  errorForm?: boolean
  type?: string
  errorMessage?: string
  value?: string
  placeholder?: string
  onChange?: (value: any) => void

  backgroundColor?: any
  border?: any
  width?: any
  maxWidth?: any
}

const InputStyled = styled.input<Props>`
  ${space}
  ${layout}
  ${color}
  border: none;
`

const Tag = styled.div`
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 2px;
  display: flex;
  flex-direction: row;
`

export interface PropsContainerInput {
  inputSelected?: boolean
  errorForm?: boolean
  onClick?: () => void
  onBlur?: () => void
}

const ContainerInput = styled(Box)<PropsContainerInput>`
  display: flex;
  max-height: 37px;
  align-items: center;
  flex-direction: row;
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

export const InputTags: React.FC<Props> = ({
  errorForm,
  errorMessage,
  type = 'text',
  placeholder,
  backgroundColor,
  border,
  width,
  maxWidth,
  value,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputSelected, setInputSelected] = useState(false)
  const [tags, setTags] = useState<string[]>(value ? value.split(',') : [])

  const boxStyled = {
    backgroundColor,
    border,
    width,
    maxWidth
  }

  function addTag() {
    setTags([...tags, inputValue])
    setInputValue('')
    if (onChange) {
      onChange(tags)
    }
  }

  function removeTag(index) {
    const newTags = tags
    newTags.splice(index, 1)
    setTags([...newTags])
    if (onChange) {
      onChange(tags)
    }
  }

  function handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      addTag()
    }
  }

  return (
    <ContainerInput
      inputSelected={inputSelected}
      onClick={() => setInputSelected(true)}
      onBlur={() => setInputSelected(false)}
      flexDirection='column'
      data-testid='input-tags'
      {...boxStyled}
    >
      <input type='hidden' value={tags.toString()} {...props} />
      <Box display='flex'>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <Text fontSize='small' mr={1} color='white'>
              {tag}
            </Text>
            <Button onClick={() => removeTag(index)}>
              <MdClose color='#fff' size={12} />
            </Button>
          </Tag>
        ))}
      </Box>
      <InputStyled
        onKeyDown={handleInputKeyDown}
        placeholder={placeholder}
        type={type}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        {...boxStyled}
      />

      {errorForm && <InputErrorMessage errorMessage={errorMessage} />}
    </ContainerInput>
  )
}

InputTags.propTypes = {
  name: PropTypes.string,

  errorForm: PropTypes.bool,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  backgroundColor: PropTypes.any,
  border: PropTypes.any,
  width: PropTypes.any,
  maxWidth: PropTypes.any
}
