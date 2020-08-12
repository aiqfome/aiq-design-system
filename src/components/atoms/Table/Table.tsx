import styled, { css } from 'styled-components'
import {
  layout,
  LayoutProps,
  color,
  ColorProps,
  padding,
  PaddingProps,
  space,
  SpaceProps,
  border,
  BorderProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    PaddingProps,
    BorderProps,
    ColorProps,
    LayoutProps {
  children?: any
  whiteSpace?: 'nowrap' | 'normal' | 'pre'
}

const styledCommon = css<Props>`
  ${layout}
  ${space}
  ${padding}
  ${border}
  ${color}

  white-space: ${({ whiteSpace }) => whiteSpace || 'normal'};
`

export const Table = styled.table<Props>`
  ${styledCommon}

  border-collapse: collapse;
  background: #fff;
  width: 100%;
`

export const TableHead = styled.thead<Props>`
  ${styledCommon}
`

export const TableCellHead = styled.th<Props>`
  ${styledCommon}

  border-collapse: collapse;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  text-align: start;
  padding: 4px 18px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const TableBody = styled.tbody<Props>`
  ${styledCommon}
`

export const TableCell = styled.td<Props>`
  ${styledCommon}
  border-collapse: collapse;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 18px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const TableRow = styled.tr<Props>`
  /* justify-content: space-between; */
  /* width: 100%; */
`
