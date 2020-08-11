import React from 'react'
import PropTypes from 'prop-types'
import styled, { DefaultTheme } from 'styled-components'
import { space, SpaceProps, border, BorderProps } from 'styled-system'

export interface Props extends SpaceProps, BorderProps, DefaultTheme {
  children?: any
}

export const Table = styled.table`
  margin-top: 32px;
  border-collapse: collapse;
  background: #fff;
`

// const TableStyled = styled.table<Props>`
//   ${space}
//   ${border}

//   background: #fff;
//   border-collapse: collapse;

//   td,
//   th {
//     border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
//   }

//   th {
//     text-align: start;
//     padding: 4px 18px;
//     color: ${({ theme }) => theme.colors.grey};
//     font-size: ${({ theme }) => theme.fontSizes.small};
//   }

//   td {
//     padding: 20px 18px;
//     font-size: ${({ theme }) => theme.fontSizes.medium};
//   }
// `

// export const Table: React.FC<Props> = ({ children, ...props }) => {
//   return <TableStyled {...props}>{children}</TableStyled>
// }

// Table.propTypes = {
//   children: PropTypes.any
// }
