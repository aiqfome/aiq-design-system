"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const react_table_1 = require("react-table");
const styled_system_1 = require("styled-system");
const TableRow_1 = require("./TableRow");
const TableHead_1 = require("./TableHead");
const TableCell_1 = require("./TableCell");
const TableStyled = styled_components_1.default.table `
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  ${({ scroll }) => scroll &&
    styled_components_1.css `
      min-width: ${scroll};
    `};
`;
const FlexWrapper = styled_components_1.default.div `
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

  ${styled_system_1.layout}
  ${styled_system_1.space}
`;
exports.Table = (_a) => {
    var { scroll, hoverable, data = [], onClickRow, columns = [], renderExpanded, expandedRowRender, onHoverRow = () => '', onRowBackground = () => '' } = _a, props = __rest(_a, ["scroll", "hoverable", "data", "onClickRow", "columns", "renderExpanded", "expandedRowRender", "onHoverRow", "onRowBackground"]);
    const renderedData = react_1.useMemo(() => {
        return data.reduce((accumulator, current) => {
            if (renderExpanded && expandedRowRender && expandedRowRender(current)) {
                return [
                    ...accumulator,
                    current,
                    { expanded: true, value: expandedRowRender(current) }
                ];
            }
            return [...accumulator, current];
        }, []);
    }, [data, renderExpanded, expandedRowRender]);
    const { rows, prepareRow, getTableProps, getTableBodyProps, columns: tableColumns } = react_table_1.useTable({
        columns,
        data: renderedData
    }, react_table_1.useSortBy);
    const [selectedRows, setSelectedRows] = react_1.useState([]);
    const [showScroll, setShowScroll] = react_1.useState(false);
    const [ref, setRef] = react_1.useState(null);
    react_1.useEffect(() => {
        const handleResize = () => {
            if (ref && ref.scrollWidth > ref.clientWidth) {
                setShowScroll(true);
            }
            else {
                setShowScroll(false);
            }
        };
        if (ref) {
            handleResize();
            window.addEventListener('resize', handleResize);
        }
    }, [ref]);
    const getRowAction = react_1.useCallback(row => {
        if (!renderExpanded && expandedRowRender) {
            if (selectedRows.includes(row.id)) {
                setSelectedRows(rows => rows.filter(r => r !== row.id));
            }
            else {
                setSelectedRows(rows => rows.concat([row.id]));
            }
        }
        if (onClickRow) {
            onClickRow(renderedData[row.index]);
        }
    }, [expandedRowRender, renderExpanded, renderedData, selectedRows, onClickRow]);
    return (react_1.default.createElement(FlexWrapper, Object.assign({ showScroll: showScroll, ref: el => setRef(el || null) }, props),
        react_1.default.createElement(TableStyled, Object.assign({ scroll: scroll }, getTableProps()),
            react_1.default.createElement("thead", null,
                react_1.default.createElement(TableRow_1.TableRow, { hoverable: false }, tableColumns.map(column => {
                    if (column.sort) {
                        return (react_1.default.createElement(TableHead_1.TableHead, Object.assign({}, column, { key: column.id, textAlign: column.align || 'left' }, column.getHeaderProps(column.getSortByToggleProps())), column.name
                            ? column.render('name')
                            : column.render('Header')));
                    }
                    return (react_1.default.createElement(TableHead_1.TableHead, Object.assign({}, column, { key: column.id, textAlign: column.align || 'left' }, column.getHeaderProps()), column.name
                        ? column.render('name')
                        : column.render('Header')));
                }))),
            react_1.default.createElement("tbody", Object.assign({}, getTableBodyProps()), rows.map((row, index) => {
                var _a;
                prepareRow(row);
                return (react_1.default.createElement(react_1.Fragment, { key: row.id || index }, renderExpanded &&
                    expandedRowRender &&
                    renderedData[index].expanded ? (react_1.default.createElement(TableRow_1.TableRow, { expanded: true },
                    react_1.default.createElement(TableCell_1.TableCell, { colspan: tableColumns.length }, renderedData[index].value))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(TableRow_1.TableRow, Object.assign({ hoverable: hoverable, onClick: () => getRowAction(row), background: onRowBackground(renderedData[index]), onMouseOut: () => onHoverRow(renderedData[index]), onMouseOver: () => onHoverRow(renderedData[index], true), hasAction: (!!expandedRowRender && !renderExpanded) || !!onClickRow, className: renderExpanded &&
                            expandedRowRender && ((_a = renderedData[index + 1]) === null || _a === void 0 ? void 0 : _a.expanded)
                            ? 'expanded-father'
                            : '' }, row.getRowProps()), row.cells.map(cell => {
                        return (react_1.default.createElement(TableCell_1.TableCell, Object.assign({}, cell.column, { key: `${row.id}-${cell.value}`, textAlign: cell.column.align || 'left' }, cell.getCellProps()), cell.column.renderCell
                            ? cell.column.renderCell(cell.value, renderedData[index])
                            : cell.render('Cell')));
                    })),
                    !renderExpanded &&
                        expandedRowRender &&
                        selectedRows.includes(row.id) && (react_1.default.createElement(TableRow_1.TableRow, { expanded: true },
                        react_1.default.createElement(TableCell_1.TableCell, { colspan: tableColumns.length }, expandedRowRender(renderedData[index]))))))));
            })))));
};
exports.Table.propTypes = {
    scroll: prop_types_1.default.string,
    hoverable: prop_types_1.default.bool,
    onClickRow: prop_types_1.default.func,
    onHoverRow: prop_types_1.default.func,
    renderExpanded: prop_types_1.default.bool,
    onRowBackground: prop_types_1.default.func,
    data: prop_types_1.default.array.isRequired,
    expandedRowRender: prop_types_1.default.func,
    columns: prop_types_1.default.array.isRequired
};
