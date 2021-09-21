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
exports.TableRow = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const TableRowStyled = styled_components_1.default.tr `
  cursor: default;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  background: ${({ theme, background }) => theme.colors[background || '']} !important;

  &.expanded-father {
    border-bottom: none;
  }

  ${({ hasAction }) => hasAction &&
    styled_components_1.css `
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.lightGrey};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.grey};
        opacity: 0.7;
      }
    `}

  ${({ expanded }) => expanded &&
    styled_components_1.css `
      cursor: default;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    `}

  ${({ hoverable }) => hoverable &&
    styled_components_1.css `
      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
    `}
`;
exports.TableRow = (_a) => {
    var { children, hoverable, background } = _a, props = __rest(_a, ["children", "hoverable", "background"]);
    return (react_1.default.createElement(TableRowStyled, Object.assign({ hoverable: hoverable, "data-testid": 'table-row', background: background || '' }, props), children));
};
exports.TableRow.defaultProps = {
    hoverable: true
};
exports.TableRow.propTypes = {
    expanded: prop_types_1.default.bool,
    children: prop_types_1.default.node,
    hasAction: prop_types_1.default.bool,
    hoverable: prop_types_1.default.bool,
    background: prop_types_1.default.string
};
