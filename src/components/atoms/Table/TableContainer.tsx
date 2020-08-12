import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text'
import { Flex } from '../Flex'

export interface TableContainerProps extends DefaultTheme {
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
