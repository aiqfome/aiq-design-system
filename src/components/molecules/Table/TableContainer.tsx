import React, { useContext } from 'react'
import styled, { DefaultTheme, ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../../atoms/Text'
import { Flex, Props as FlexProps } from '../../atoms/Flex'

export interface TableContainerProps extends FlexProps, DefaultTheme {
  header?: any
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
  header,
  ...props
}) => {
  const theme = useContext(ThemeContext)

  return (
    <TableContainerStyled flexDirection='column' {...props}>
      {header && (
        <Flex
          mt='-16px'
          mx='-16px'
          mb='32px'
          py='18px'
          px='25px'
          borderBottom={`1px solid ${theme.colors.mediumGrey}`}
        >
          {typeof header === 'string' ? (
            <Text fontSize='xxlarge' color='almostBlack'>
              {header}
            </Text>
          ) : (
            header
          )}
        </Flex>
      )}
      {children}
    </TableContainerStyled>
  )
}

TableContainer.propTypes = {
  children: PropTypes.any,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}
