import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled, { css, DefaultTheme } from 'styled-components'

import { Flex, Props as FlexProps } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
export interface Props {
  count: number
  color?: string
  disabled?: boolean
  variant?: string
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
    width: 42px;
  `,
  default: css`
    height: 34px;
    width: 34px;
  `,
  small: css`
    height: 28px;
    width: 28px;
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
  count,
  variant,
  size,
  defaultPage = 0,
  disabled = false,
  onChange = () => {
    // do nothing.
  },
  ...props
}) => {
  const [pages, setPages] = useState<number[]>([])
  const [pagesToShow, setPagesToShow] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const range = (start, end) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  useEffect(() => {
    const newPages = range(0, count - 1)
    setPages(newPages)
  }, [count])

  useEffect(() => {
    setCurrentPage(defaultPage)
  }, [defaultPage])

  useEffect(() => {
    let startPage = currentPage - 1
    let endPage = currentPage + 2

    if (startPage <= 1) {
      endPage -= startPage - 2
      startPage = 1
    }

    if (endPage > count - 2) {
      startPage = count - 5
      endPage = count - 1
    }

    setPagesToShow(pages.slice(startPage, endPage))
  }, [pages, currentPage])

  function handleClickPage(page) {
    setCurrentPage(page)
    onChange(page)
  }

  function handleClickNextPage() {
    if (currentPage + 1 < count) {
      setCurrentPage(currentPage + 1)
    }
  }

  function handleClickPrevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <PaginationStyled
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      variant='auto'
      disabled={disabled}
      {...props}
    >
      {count > 0 && (
        <>
          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            cursor={currentPage === 0 ? 'not-allowed' : ''}
            onClick={disabled ? undefined : handleClickPrevPage}
          >
            <MdChevronLeft />
          </ItemPageStyled>

          <ItemPageStyled
            size={size}
            alignItems='center'
            justifyContent='center'
            active={currentPage === 0}
            onClick={disabled ? undefined : () => handleClickPage(0)}
          >
            <Text color='almostBlack' fontSize='default'>
              0
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
            onClick={disabled ? undefined : handleClickNextPage}
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

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
  defaultPage: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func
}
