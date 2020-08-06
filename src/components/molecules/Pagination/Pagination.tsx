import React from 'react'
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
  onChange?: () => void
}

interface PaginationStyledProps extends FlexProps, DefaultTheme {
  active?: boolean
}

const PaginationStyled = styled(Flex)`
  &:hover {
    cursor: pointer;
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

export const Pagination: React.FC<Props> = ({ count, variant, ...props }) => {
  return (
    <PaginationStyled
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      variant='auto'
      {...props}
    >
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <MdChevronLeft />
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          1
        </Text>
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          2
        </Text>
      </ItemPageStyled>
      <ItemPageStyled active alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          3
        </Text>
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          4
        </Text>
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          5
        </Text>
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <Text color='almostBlack' fontSize='default' cursor='pointer'>
          6
        </Text>
      </ItemPageStyled>
      <ItemPageStyled alignItems='center' justifyContent='center'>
        <MdChevronRight />
      </ItemPageStyled>
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
