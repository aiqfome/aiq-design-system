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
exports.Pagination = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importStar(require("styled-components"));
const Flex_1 = require("../Flex");
const Text_1 = require("../Text");
const PaginationItem_1 = require("./PaginationItem");
const PaginationStyled = styled_components_1.default(Flex_1.Flex) `
  flex-wrap: wrap;

  ${({ disabled }) => disabled &&
    styled_components_1.css `
      opacity: 0.5;
      &:hover {
        pointer-events: none;
      }

      & > Button,
      & span {
        cursor: not-allowed !important;
      }
    `}
`;
exports.Pagination = (_a) => {
    var { size, variant, count = 0, defaultPage = 1, nextPage, prevPage, disabled = false, onChange = () => {
        // do nothing.
    } } = _a, props = __rest(_a, ["size", "variant", "count", "defaultPage", "nextPage", "prevPage", "disabled", "onChange"]);
    const [pages, setPages] = react_1.useState([]);
    const [pagesToShow, setPagesToShow] = react_1.useState([]);
    const [currentPage, setCurrentPage] = react_1.useState(1);
    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };
    react_1.useEffect(() => {
        const newPages = range(1, count);
        setPages(newPages);
    }, [count]);
    react_1.useEffect(() => {
        setCurrentPage(defaultPage);
    }, [defaultPage]);
    react_1.useEffect(() => {
        let startPage = currentPage - 2;
        let endPage = currentPage + 2;
        if (variant === 'default') {
            if (startPage <= 1) {
                endPage -= startPage - 1;
                startPage = 1;
            }
            if (endPage > count - 2) {
                startPage = count - 5 || 1;
                endPage = count - 1;
            }
            if (startPage <= 1) {
                startPage = 1;
            }
            setPagesToShow(pages.slice(startPage, endPage));
        }
        else {
            endPage = currentPage + 1;
            startPage = currentPage - 1;
            if (startPage <= 1) {
                startPage = 2;
                endPage = startPage + 1;
            }
            setPagesToShow(range(startPage, endPage));
        }
    }, [pages, count, variant, currentPage]);
    function handleClickPage(page) {
        if (page > 0 && (variant === 'noCount' || (count && page <= count))) {
            setCurrentPage(page);
            onChange(page);
        }
    }
    return (react_1.default.createElement(PaginationStyled, Object.assign({ alignItems: 'center', flexDirection: 'row', disabled: disabled, justifyContent: 'center' }, props),
        variant === 'default' && count > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PaginationItem_1.PaginationItem, { "data-testid": 'pagination-item-return', size: size, cursor: currentPage === 1 ? 'not-allowed' : '', onClick: disabled ? undefined : () => handleClickPage(currentPage - 1) },
                react_1.default.createElement(md_1.MdChevronLeft, null)),
            react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, "data-testid": 'pagination-item-1', active: currentPage === 1, onClick: disabled ? undefined : () => handleClickPage(1) },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, "1")),
            currentPage - 2 > 0 && count > 6 && (react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, cursor: 'auto' },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, "..."))),
            pagesToShow.map(page => (react_1.default.createElement(PaginationItem_1.PaginationItem, { "data-testid": `pagination-item-${page}`, size: size, key: page.toString(), active: page === currentPage, onClick: disabled ? undefined : () => handleClickPage(page) },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, page)))),
            currentPage + 3 < pages[pages.length - 1] && count > 6 && (react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, cursor: 'auto' },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, "..."))),
            pages.length > 1 && (react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, "data-testid": `pagination-item-${pages[pages.length - 1]}`, active: currentPage === pages[pages.length - 1], onClick: disabled
                    ? undefined
                    : () => handleClickPage(pages[pages.length - 1]) },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, pages[pages.length - 1]))),
            react_1.default.createElement(PaginationItem_1.PaginationItem, { "data-testid": 'pagination-item-next', size: size, onClick: disabled ? undefined : () => handleClickPage(currentPage + 1), cursor: currentPage === pages[pages.length - 1] ? 'not-allowed' : '' },
                react_1.default.createElement(md_1.MdChevronRight, null)))),
        variant === 'noCount' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, "data-testid": 'pagination-item-noCunt-return', cursor: currentPage === 1 ? 'not-allowed' : '', onClick: () => handleClickPage(currentPage - 1), disabled: !prevPage },
                react_1.default.createElement(md_1.MdChevronLeft, null)),
            react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, active: currentPage === 1, onClick: disabled ? undefined : () => handleClickPage(1) },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, "1")),
            currentPage - 2 > 0 && (react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, cursor: 'auto' },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, "..."))),
            currentPage > 1 && (react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, active: true },
                react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'default' }, currentPage))),
            react_1.default.createElement(PaginationItem_1.PaginationItem, { size: size, "data-testid": 'pagination-item-noCunt-next', onClick: () => handleClickPage(currentPage + 1), cursor: !nextPage ? 'not-allowed' : '', disabled: !nextPage },
                react_1.default.createElement(md_1.MdChevronRight, null))))));
};
exports.Pagination.defaultProps = {
    variant: 'default'
};
exports.Pagination.propTypes = {
    page: prop_types_1.default.number,
    count: prop_types_1.default.number,
    color: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    disabled: prop_types_1.default.bool,
    defaultPage: prop_types_1.default.number,
    size: prop_types_1.default.oneOf(['default', 'small', 'large']),
    variant: prop_types_1.default.oneOf(['default', 'noCount']),
    nextPage: prop_types_1.default.any,
    prevPage: prop_types_1.default.any
};
