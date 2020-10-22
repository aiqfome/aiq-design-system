import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled, { css } from 'styled-components'

import { Flex } from '../Flex'
import { Text } from '../Text'

import { PaginationItem } from './PaginationItem'

export interface Props {
  count?: number
  color?: string
  disabled?: boolean
  variant?: 'default' | 'noCount'
  size?: 'default' | 'small' | 'large'
  defaultPage?: number
  page?: number
  onChange?: (page: number) => void
}

const PaginationStyled = styled(Flex)<Props>`
  flex-wrap: wrap;

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
    let startPage = currentPage - 2
    let endPage = currentPage + 2

    if (variant === 'default') {
      if (startPage <= 1) {
        endPage -= startPage - 1
        startPage = 1
      }

      if (endPage > count - 2) {
        startPage = count - 5 || 1
        endPage = count - 1
      }

      if (startPage <= 1) {
        startPage = 1
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
    if (page > 0 && (variant === 'noCount' || (count && page <= count))) {
      setCurrentPage(page)
      onChange(page)
    }
  }

  return (
    <PaginationStyled
      alignItems='center'
      flexDirection='row'
      disabled={disabled}
      justifyContent='center'
      {...props}
    >
      {variant === 'default' && count > 0 && (
        <>
          <PaginationItem
            data-testid='pagination-item-return'
            size={size}
            cursor={currentPage === 1 ? 'not-allowed' : ''}
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage - 1)
            }
          >
            <MdChevronLeft />
          </PaginationItem>

          <PaginationItem
            size={size}
            data-testid='pagination-item-1'
            active={currentPage === 1}
            onClick={disabled ? undefined : () => handleClickPage(1)}
          >
            <Text color='almostBlack' fontSize='default'>
              1
            </Text>
          </PaginationItem>
          {currentPage - 2 > 0 && count > 6 && (
            <PaginationItem size={size} cursor='auto'>
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </PaginationItem>
          )}

          {pagesToShow.map(page => (
            <PaginationItem
              data-testid={`pagination-item-${page}`}
              size={size}
              key={page.toString()}
              active={page === currentPage}
              onClick={disabled ? undefined : () => handleClickPage(page)}
            >
              <Text color='almostBlack' fontSize='default'>
                {page}
              </Text>
            </PaginationItem>
          ))}
          {currentPage + 3 < pages[pages.length - 1] && count > 6 && (
            <PaginationItem size={size} cursor='auto'>
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </PaginationItem>
          )}

          {pages.length > 1 && (
            <PaginationItem
              size={size}
              data-testid={`pagination-item-${pages[pages.length - 1]}`}
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
            </PaginationItem>
          )}
          <PaginationItem
            data-testid='pagination-item-next'
            size={size}
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage + 1)
            }
            cursor={
              currentPage === pages[pages.length - 1] ? 'not-allowed' : ''
            }
          >
            <MdChevronRight />
          </PaginationItem>
        </>
      )}

      {variant === 'noCount' && (
        <>
          <PaginationItem
            size={size}
            data-testid='pagination-item-noCunt-return'
            cursor={currentPage === 1 ? 'not-allowed' : ''}
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage - 1)
            }
          >
            <MdChevronLeft />
          </PaginationItem>

          <PaginationItem
            size={size}
            active={currentPage === 1}
            onClick={disabled ? undefined : () => handleClickPage(1)}
          >
            <Text color='almostBlack' fontSize='default'>
              1
            </Text>
          </PaginationItem>

          {currentPage - 2 > 0 && (
            <PaginationItem size={size} cursor='auto'>
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </PaginationItem>
          )}

          {pagesToShow.map(page => (
            <PaginationItem
              size={size}
              key={page.toString()}
              active={page === currentPage}
              onClick={disabled ? undefined : () => handleClickPage(page)}
            >
              <Text color='almostBlack' fontSize='default'>
                {page}
              </Text>
            </PaginationItem>
          ))}

          <PaginationItem
            size={size}
            data-testid='pagination-item-noCunt-next'
            onClick={
              disabled ? undefined : () => handleClickPage(currentPage + 1)
            }
            cursor={
              currentPage === pages[pages.length - 1] ? 'not-allowed' : ''
            }
          >
            <MdChevronRight />
          </PaginationItem>
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
  size: PropTypes.oneOf(['default', 'small', 'large']),
  variant: PropTypes.oneOf(['default', 'noCount'])
}
