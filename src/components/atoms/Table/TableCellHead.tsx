import styled from 'styled-components'

export const TableCellHead = styled.th`
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  text-align: start;
  padding: 4px 18px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
`
