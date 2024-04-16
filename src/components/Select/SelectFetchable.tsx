import { useCombobox } from 'downshift'
import React, { useEffect, useMemo, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styled, { css } from 'styled-components'

import { Box, Props as BoxPros } from '../Box'
import { Button, Props as ButtonProps } from '../Button'
import { Input } from '../Input'
import { Loading } from '../Loading'
import { Text } from '../Text'

export type Props = BoxPros & {
  label?: string
  internalLabel?: string
  items?: Array<string | { id: any; name: any; select?: any }>
  isOpen?: boolean
  variant?: 'outlined'
  prefix?: any
  placeholder?: string
  handleSelectedItemChange?: (item: any) => void
  onChangeTextInput?: (text: string) => void
  handleClearSelection?: (clear: '') => void
  selectedItem?: any
  autoComplete?: boolean
  sufix?: any
  isLoading?: boolean
  errorMessage?: string
  errorForm?: boolean
  onChange?: any
  loadingMessage?: string
  emptyMessage?: string
  inputProps?: any
  isDependent?: boolean
  disabled?: boolean
  dependentMessage?: string
}

const Container = styled(Box)<Props>`
  position: relative;

  input {
    cursor: auto;
    padding-right: 30px;
  }

  ul {
    box-shadow: 0px 3px 6px #00000029;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    list-style-type: none;
    position: absolute;
    top: ${({ variant }) => (variant === 'outlined' ? '39px' : '38px')};
    overflow: hidden;
    z-index: 1;
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    max-height: 300px;
    overflow-y: auto;

    li {
      cursor: pointer;
      padding: 6px 12px;
      word-wrap: break-word;
      hyphens: auto;
    }

    ${({ isOpen }) =>
      !isOpen &&
      css`
        display: none;
      `}
  }
`
interface ItemProps {
  highlighted?: boolean
}

const Item = styled.li<ItemProps>`
  background: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.primaryLight : '#fff'};
`

interface VariantSelect extends ButtonProps {
  variantSelect?: any
}

const ButtonStyled = styled(Button)<VariantSelect>`
  position: absolute;
  top: ${({ variantSelect }) =>
    variantSelect === 'outlined' ? '13px' : '12px'};
  right: 14px;
`

const LoadingBox = styled(Box)<VariantSelect>`
  position: absolute;
  top: ${({ variantSelect }) =>
    variantSelect === 'outlined' ? '13px' : '12px'};
  right: 14px;
`
export const SelectFetchable = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      disabled,
      label,
      internalLabel,
      variant,
      items = [],
      placeholder,
      selectedItem,
      autoComplete = true,
      sufix,
      isLoading,
      errorMessage,
      errorForm,
      onChange,
      isDependent = false,
      dependentMessage = 'este campo tem alguma dependência',
      loadingMessage = 'carregando...',
      emptyMessage = 'item não encontrado',
      handleSelectedItemChange = () => {
        // do nothing.
      },
      onChangeTextInput = () => {
        // do nothing.
      },
      handleClearSelection = () => {
        // do nothing.
      },
      prefix,
      inputProps,
      ...props
    },
    ref
  ) => {
    const [inputItems, setInputItems] = useState(items)

    useEffect(() => setInputItems(items), [items])

    const { backgroundColor, border, width, maxWidth } = props
    const boxStyled = {
      backgroundColor,
      border,
      width,
      maxWidth,
      ...inputProps
    }

    const {
      isOpen,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getToggleButtonProps,
      openMenu,
      getItemProps,
      setInputValue
    } = useCombobox({
      onSelectedItemChange: handleSelectedItemChange,
      items: isDependent ? [] : inputItems,
      selectedItem,
      itemToString: item => (typeof item === 'string' ? item : item.name),
      onInputValueChange: ({ inputValue = '' }) => {
        if (autoComplete && typeof inputValue === 'string') {
          onChangeTextInput(inputValue)
          onChange(inputValue)

          setInputItems(
            items.filter(item => {
              const name =
                typeof item === 'string' ? item : item.select || item.name
              return name.toLowerCase().startsWith(inputValue.toLowerCase())
            })
          )
        }
      }
    })

    function handleClickInput() {
      setInputItems(items)
      if (!isOpen) {
        setInputValue('')
        handleClearSelection('')
        openMenu()
      }
    }

    const completePrefix = useMemo(() => {
      if (!prefix && !internalLabel) return null

      return (
        <div style={{ marginRight: internalLabel && '-12px', width: 'max-content' }}>
          {prefix}
          <Text ml={prefix && '4px'} color='darkGrey' fontSize='small' >{internalLabel}</Text>
        </div>
      )
    }, [])

    return (
      <Container
        isOpen={isOpen && !disabled}
        variant={variant}
        data-testid='select-fechable'
        ref={ref}
        {...props}
      >
        <ul {...getMenuProps()}>
          {internalLabel && 
            <div style={{ marginTop: '8px', marginBottom: '2px' }}>
              <Text p='12px' color='darkGrey' fontSize={12} fontWeight='medium'>
                {internalLabel}
              </Text>
            </div>
          }
          {isOpen &&
            inputItems &&
            !isLoading &&
            !disabled &&
            !isDependent &&
            inputItems.length > 0 &&
            inputItems.map((item, index) => (
              <Item
                key={index}
                data-testid='select-item'
                highlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {typeof item === 'string' ? item : item.name}
              </Item>
            ))}

          {isOpen && isLoading && !disabled && !isDependent && (
            <Item>{loadingMessage}</Item>
          )}

          {isOpen &&
            inputItems &&
            !isLoading &&
            !disabled &&
            !isDependent &&
            inputItems.length === 0 && <Item>{emptyMessage}</Item>}

          {isDependent && <Item>{dependentMessage}</Item>}
        </ul>

        <Box ref={getComboboxProps().ref}>
          <Input
            disabled={disabled}
            onChange={getInputProps().onChange}
            onBlur={getInputProps().onBlur}
            onKeyDown={getInputProps().onKeyDown}
            onClick={handleClickInput}
            value={getInputProps().value}
            inputRef={getInputProps().ref}
            variant={variant}
            label={label}
            errorMessage={errorMessage}
            errorForm={errorForm}
            readOnly={!autoComplete}
            prefix={completePrefix}
            placeholder={placeholder}
            nativeAutoComplete='disabled'
            {...boxStyled}
          />
          {isLoading && (
            <LoadingBox>
              <Loading size='small' />
            </LoadingBox>
          )}
          {inputItems && !isLoading && (
            <ButtonStyled
              disabled={disabled}
              type='button'
              palette='primary'
              variantSelect={variant}
              onClick={getToggleButtonProps().onClick}
              refButton={getToggleButtonProps().ref}
              aria-label='toggle menu'
            >
              {sufix || <IoIosArrowDown />}
            </ButtonStyled>
          )}
        </Box>
      </Container>
    )
  }
)

SelectFetchable.defaultProps = {
  items: []
}
