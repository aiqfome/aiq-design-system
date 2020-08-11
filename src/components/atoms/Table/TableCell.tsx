import styled from 'styled-components'

export const TableCell = styled.td`
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 18px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
