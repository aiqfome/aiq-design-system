import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled, { css, DefaultTheme } from 'styled-components'

import { Flex, Props as FlexProps } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
export interface Props {
  count?: number
  color?: string
  disabled?: boolean
  variant?: 'default' | 'noTotal'
  size?: 'default' | 'small' | 'large'
  defaultPage?: number
  page?: number
  onChange?: (page: number) => void
}

interface PaginationStyledProps extends FlexProps, DefaultTheme {
  active?: boolean
  cursor?: string
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
}

const sizesVariants: { [index: string]: any } = {
  large: css`
    height: 42px;
    min-width: 42px;
  `,
  default: css`
    height: 34px;
    min-width: 34px;
  `,
  small: css`
    height: 28px;
    min-width: 28px;
  `
}

const PaginationStyled = styled(Flex)<PaginationStyledProps>`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      &:hover {
        pointer-events: none;
      }

      & > Button,
      & span {
        cursor: not-allowed !important;
      }
    `}
`

const ItemPageStyled = styled(Button)<PaginationStyledProps>`
  ${({ size }) => sizesVariants[size || 'default']}

  padding: 0 8px;
  border: 1px solid #dedede;
  border-radius: 0;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:hover {
    outline: none;
    text-decoration: none;
  }

  cursor: ${({ cursor }) => cursor || 'pointer'};

  & span {
    cursor: ${({ cursor }) => cursor || 'pointer'};
  }

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      span {
        color: ${theme.colors.white};
      }
    `}
`

export const Pagination: React.FC<Props> = ({
  size,
  variant,
  count = 0,
  defaultPage = 1,
  disabled = false,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  const [pages, setPages] = useState<number[]>([])
  const [pagesToShow, setPagesToShow] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const range = (start, end) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  useEffect(() => {
    const newPages = range(1, count)
    setPages(newPages)
  }, [count])

  useEffect(() => {
    setCurrentPage(defaultPage)
  }, [defaultPage])

  useEffect(() => {
    let startPage = currentPage - 1
    let endPage = currentPage + 2

    if (variant === 'default') {
      if (startPage <= 1) {
        endPage -= startPage - 2
        startPage = 1
      }

      if (endPage > count - 2) {
        startPage = count - 5
        endPage = count - 1
      }

      setPagesToShow(pages.slice(startPage, endPage))
    } else {
      endPage = currentPage + 1
      startPage = currentPage - 1

      if (startPage <= 1) {
        startPage = 2
        endPage = startPage + 1
      }

      setPagesToShow(range(startPage, endPage))
    }
  }, [pages, count, variant, currentPage])

  function handleClickPage(page) {
    if (page > 0 && (variant === 'noTotal' || (count && page <= count))) {
      setCurrentPage(page)
      onChange(page)
    }
  }

  return (
    <PaginationStyled
      variant='auto'
      alignItems='center'
      flexDirection='row'
      disabled={disabled}
      justifyContent='center'
      {...props}
    >
      {variant === 'default' && count > 0 && (
        <>
          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            cursor={currentPage === 1 ? 'not-allowed' : ''}
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage - 1)
            }
          >
            <MdChevronLeft />
          </ItemPageStyled>

          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            active={currentPage === 1}
            onClick={disabled ? undefined : () => handleClickPage(1)}
          >
            <Text color='almostBlack' fontSize='default'>
              1
            </Text>
          </ItemPageStyled>
          {currentPage - 2 > 0 && (
            <ItemPageStyled
              size={size}
              cursor='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </ItemPageStyled>
          )}

          {pagesToShow.map(page => (
            <ItemPageStyled
              size={size}
              alignItems='center'
              key={page.toString()}
              justifyContent='center'
              active={page === currentPage}
              onClick={disabled ? undefined : () => handleClickPage(page)}
            >
              <Text color='almostBlack' fontSize='default'>
                {page}
              </Text>
            </ItemPageStyled>
          ))}
          {currentPage + 3 <= pages[pages.length - 1] && (
            <ItemPageStyled
              size={size}
              cursor='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </ItemPageStyled>
          )}

          {pages.length > 1 && (
            <ItemPageStyled
              size={size}
              alignItems='center'
              justifyContent='center'
              active={currentPage === pages[pages.length - 1]}
              onClick={
                disabled
                  ? undefined
                  : () => handleClickPage(pages[pages.length - 1])
              }
            >
              <Text color='almostBlack' fontSize='default'>
                {pages[pages.length - 1]}
              </Text>
            </ItemPageStyled>
          )}
          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage + 1)
            }
            cursor={
              currentPage === pages[pages.length - 1] ? 'not-allowed' : ''
            }
          >
            <MdChevronRight />
          </ItemPageStyled>
        </>
      )}

      {variant === 'noTotal' && (
        <>
          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            cursor={currentPage === 1 ? 'not-allowed' : ''}
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage - 1)
            }
          >
            <MdChevronLeft />
          </ItemPageStyled>

          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            active={currentPage === 1}
            onClick={disabled ? undefined : () => handleClickPage(1)}
          >
            <Text color='almostBlack' fontSize='default'>
              1
            </Text>
          </ItemPageStyled>

          {currentPage - 2 > 0 && (
            <ItemPageStyled
              size={size}
              cursor='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </ItemPageStyled>
          )}

          {pagesToShow.map(page => (
            <ItemPageStyled
              size={size}
              alignItems='center'
              key={page.toString()}
              justifyContent='center'
              active={page === currentPage}
              onClick={disabled ? undefined : () => handleClickPage(page)}
            >
              <Text color='almostBlack' fontSize='default'>
                {page}
              </Text>
            </ItemPageStyled>
          ))}

          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage + 1)
            }
            cursor={
              currentPage === pages[pages.length - 1] ? 'not-allowed' : ''
            }
          >
            <MdChevronRight />
          </ItemPageStyled>
        </>
      )}
    </PaginationStyled>
  )
}

Pagination.defaultProps = {
  variant: 'default'
}

Pagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  color: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultPage: PropTypes.number,
  size: PropTypes.oneOf(['default', 'small']),
  variant: PropTypes.oneOf(['default', 'noTotal'])
}
