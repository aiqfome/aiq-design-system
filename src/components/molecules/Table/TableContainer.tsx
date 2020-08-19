import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../../atoms/Text'
import { Flex, Props as FlexProps } from '../../atoms/Flex'

export interface TableContainerProps extends FlexProps, DefaultTheme {
  title?: string
  children?: any
}

const TableContainerStyled = styled(Flex)<TableContainerProps>`
  background: #fff;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 8px;
  width: 100%;

  overflow: hidden;

  &:hover {
    overflow: auto;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffff;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;

    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(218, 215, 215, 0.5);
  }
`

export const TableContainer: React.FC<TableContainerProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <TableContainerStyled flexDirection='column' {...props}>
      {title && (
        <Flex marginBottom='32px' marginTop='8px'>
          <Text fontSize='xxlarge' color='almostBlack' marginLeft='10px'>
            {title}
          </Text>
        </Flex>
      )}
      {children}
    </TableContainerStyled>
  )
}

TableContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
