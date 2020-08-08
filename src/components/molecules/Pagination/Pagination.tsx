import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled, { css, DefaultTheme } from 'styled-components'

import { Flex, Props as FlexProps } from '../../atoms/Flex'
import { Text } from '../../atoms/Text'
export interface Props {
  count: number
  color?: string
  disabled?: boolean
  variant?: string
  size?: string
  defaultPage?: number
  page?: number
  onChange?: (page: number) => void
}

interface PaginationStyledProps extends FlexProps, DefaultTheme {
  active?: boolean
  cursor?: string
}

const PaginationStyled = styled(Flex)<PaginationStyledProps>`
  &:hover {
    cursor: ${({ cursor }) => cursor || 'pointer'};
  }
`

const ItemPageStyled = styled(Flex)<PaginationStyledProps>`
  height: 42px;
  width: 42px;
  border: 1px solid #dedede;

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transform: scale(1.1);

      span {
        color: ${theme.colors.white};
      }
    `}
`

export const Pagination: React.FC<Props> = ({
  count,
  variant,
  defaultPage = 0,
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

    console.log(pages.slice(startPage, endPage))
    console.log(startPage, endPage)
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
      {...props}
    >
      {count > 0 && (
        <>
          <ItemPageStyled
            onClick={handleClickPrevPage}
            alignItems='center'
            justifyContent='center'
          >
            <MdChevronLeft />
          </ItemPageStyled>

          <ItemPageStyled
            alignItems='center'
            active={currentPage === 0}
            onClick={() => handleClickPage(0)}
            justifyContent='center'
          >
            <Text color='almostBlack' fontSize='default' cursor='pointer'>
              0
            </Text>
          </ItemPageStyled>
          {currentPage - 2 > 0 && (
            <ItemPageStyled
              alignItems='center'
              cursor='auto'
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </ItemPageStyled>
          )}

          {pagesToShow.map(page => (
            <ItemPageStyled
              key={page.toString()}
              alignItems='center'
              active={page === currentPage}
              onClick={() => handleClickPage(page)}
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default' cursor='pointer'>
                {page}
              </Text>
            </ItemPageStyled>
          ))}
          {currentPage + 3 <= pages[pages.length - 1] && (
            <ItemPageStyled
              alignItems='center'
              cursor='auto'
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default'>
                ...
              </Text>
            </ItemPageStyled>
          )}

          {pages.length > 1 && (
            <ItemPageStyled
              alignItems='center'
              active={currentPage === pages[pages.length - 1]}
              onClick={() => handleClickPage(pages[pages.length - 1])}
              justifyContent='center'
            >
              <Text color='almostBlack' fontSize='default' cursor='pointer'>
                {pages[pages.length - 1]}
              </Text>
            </ItemPageStyled>
          )}
          <ItemPageStyled
            onClick={handleClickNextPage}
            alignItems='center'
            justifyContent='center'
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
  size: PropTypes.string,
  defaultPage: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func
}
