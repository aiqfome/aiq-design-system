import React, { Fragment, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useTable } from 'react-table'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'

import { TableRow } from './TableRow'
import { TableHead } from './TableHead'
import { TableCell } from './TableCell'

export interface TableProps {
  scroll?: string
  data: Array<any>
  columns: Array<any>
  hoverable?: boolean
  onClickRow?: (record: any) => any
  expandedRowRender?: (record: any) => any
}

export interface FlexProps extends SpaceProps, LayoutProps {
  showScroll: boolean
}

const TableStyled = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  ${({ scroll }) =>
    scroll &&
    css`
      min-width: ${scroll};
    `};
`

const FlexWrapper = styled.div<FlexProps>`
  flex: 1;
  display: block;
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: ${({ showScroll }) => (showScroll ? 'scroll' : 'hidden')};

  &::-webkit-scrollbar {
    height: 5px;
    padding-top: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar-thumb:active,
  &::-webkit-scrollbar-thumb:hover {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.darkGrey};
  }

  ${layout}
  ${space}
`

export const Table: React.FC<TableProps> = ({
  scroll,
  hoverable,
  data = [],
  onClickRow,
  columns = [],
  expandedRowRender,
  ...props
}) => {
  const {
    rows,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    columns: tableColumns
  } = useTable({ columns, data })

  const [selectedRows, setSelectedRows] = useState<Array<string>>([])

  const [showScroll, setShowScroll] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (ref && ref.scrollWidth > ref.clientWidth) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    if (ref) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
  }, [ref])

  const getRowAction = useCallback(
    row => {
      if (expandedRowRender) {
        if (selectedRows.includes(row.id)) {
          setSelectedRows(rows => rows.filter(r => r !== row.id))
        } else {
          setSelectedRows(rows => rows.concat([row.id]))
        }
      }

      if (onClickRow) {
        onClickRow(data[row.index])
      }
    },
    [expandedRowRender, data, selectedRows, onClickRow]
  )

  return (
    <FlexWrapper
      showScroll={showScroll}
      ref={el => setRef(el || null)}
      {...props}
    >
      <TableStyled scroll={scroll} {...getTableProps()}>
        <thead>
          <TableRow hoverable={false}>
            {tableColumns.map(column => (
              <TableHead
                {...column}
                key={column.id}
                textAlign={column.align || 'left'}
                {...column.getHeaderProps()}
              >
                {column.name ? column.render('name') : column.render('Header')}
              </TableHead>
            ))}
          </TableRow>
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <Fragment key={row.id}>
                <TableRow
                  hoverable={hoverable}
                  onClick={() => getRowAction(row)}
                  hasAction={expandedRowRender || onClickRow}
                  {...row.getRowProps()}
                >
                  {row.cells.map(cell => {
                    return (
                      <TableCell
                        {...cell.column}
                        key={`${row.id}-${cell.value}`}
                        textAlign={cell.column.align || 'left'}
                        {...cell.getCellProps()}
                      >
                        {cell.column.renderCell
                          ? cell.column.renderCell(
                              cell.value,
                              data[cell.row.index]
                            )
                          : cell.render('Cell')}
                      </TableCell>
                    )
                  })}
                </TableRow>

                {expandedRowRender && selectedRows.includes(row.id) && (
                  <TableRow expanded>
                    <TableCell colspan={tableColumns.length}>
                      {expandedRowRender(row.values)}
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </TableStyled>
    </FlexWrapper>
  )
}

Table.propTypes = {
  scroll: PropTypes.string,
  hoverable: PropTypes.bool,
  onClickRow: PropTypes.func,
  data: PropTypes.array.isRequired,
  expandedRowRender: PropTypes.func,
  columns: PropTypes.array.isRequired
}
