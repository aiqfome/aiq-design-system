import React, {
  useMemo,
  Fragment,
  useState,
  useEffect,
  useCallback
} from 'react'
import styled, { css } from 'styled-components'

import { useTable, useSortBy } from 'react-table'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'

import { TableRow } from './TableRow'
import { TableHead } from './TableHead'
import { TableCell } from './TableCell'

export interface TableProps {
  scroll?: string
  data: Array<any>
  onHoverRow?: any
  columns: Array<any>
  hoverable?: boolean
  renderExpanded?: boolean
  onClickRow?: (record: any) => any
  expandedRowRender?: (record: any) => any
  onRowBackground?: (record: any) => string
}

export type FlexProps = SpaceProps &
  LayoutProps & {
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
    width: 9px;
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
  renderExpanded,
  expandedRowRender,
  onHoverRow = () => '',
  onRowBackground = () => '',
  ...props
}) => {
  const renderedData = useMemo(() => {
    return data.reduce((accumulator, current) => {
      if (renderExpanded && expandedRowRender && expandedRowRender(current)) {
        return [
          ...accumulator,
          current,
          { expanded: true, value: expandedRowRender(current) }
        ]
      }

      return [...accumulator, current]
    }, [])
  }, [data, renderExpanded, expandedRowRender])

  const {
    rows,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    columns: tableColumns
  } = useTable(
    {
      columns,
      data: renderedData
    },
    useSortBy
  )

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
      if (!renderExpanded && expandedRowRender) {
        if (selectedRows.includes(row.id)) {
          setSelectedRows(rows => rows.filter(r => r !== row.id))
        } else {
          setSelectedRows(rows => rows.concat([row.id]))
        }
      }

      if (onClickRow) {
        onClickRow(renderedData[row.index])
      }
    },
    [expandedRowRender, renderExpanded, renderedData, selectedRows, onClickRow]
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
            {tableColumns.map(column => {
              if (column.sort) {
                return (
                  <TableHead
                    {...column}
                    key={column.id}
                    textAlign={column.align || 'left'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.name
                      ? column.render('name')
                      : column.render('Header')}
                  </TableHead>
                )
              }

              return (
                <TableHead
                  {...column}
                  key={column.id}
                  textAlign={column.align || 'left'}
                  {...column.getHeaderProps()}
                >
                  {column.name
                    ? column.render('name')
                    : column.render('Header')}
                </TableHead>
              )
            })}
          </TableRow>
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <Fragment key={row.id || index}>
                {renderExpanded &&
                expandedRowRender &&
                renderedData[index].expanded ? (
                  <TableRow expanded>
                    <TableCell colspan={tableColumns.length}>
                      {renderedData[index].value}
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    <TableRow
                      hoverable={hoverable}
                      onClick={() => getRowAction(row)}
                      background={onRowBackground(renderedData[index])}
                      onMouseOut={() => onHoverRow(renderedData[index])}
                      onMouseOver={() => onHoverRow(renderedData[index], true)}
                      hasAction={
                        (!!expandedRowRender && !renderExpanded) || !!onClickRow
                      }
                      className={
                        renderExpanded &&
                        expandedRowRender &&
                        renderedData[index + 1]?.expanded
                          ? 'expanded-father'
                          : ''
                      }
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
                                  renderedData[index]
                                )
                              : cell.render('Cell')}
                          </TableCell>
                        )
                      })}
                    </TableRow>

                    {!renderExpanded &&
                      expandedRowRender &&
                      selectedRows.includes(row.id) && (
                        <TableRow expanded>
                          <TableCell colspan={tableColumns.length}>
                            {expandedRowRender(renderedData[index])}
                          </TableCell>
                        </TableRow>
                      )}
                  </>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </TableStyled>
    </FlexWrapper>
  )
}
