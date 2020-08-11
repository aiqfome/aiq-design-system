import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { Text } from '../Text'

export interface TableContainerProps extends DefaultTheme {
  title?: string
  children?: any
}

const TableContainerStyled = styled.div<TableContainerProps>`
  background: #fff;
  padding: 32px 18px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 8px;
`

export const TableContainer: React.FC<TableContainerProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <TableContainerStyled {...props}>
      {title && (
        <Text
          fontSize='xxlarge'
          color='almostBlack'
          marginLeft='10px'
          paddingBottom='32px'
        >
          {title}
        </Text>
      )}
      {children}
    </TableContainerStyled>
  )
}

TableContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
