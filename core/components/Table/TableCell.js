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
exports.TableCell = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const TableCellStyled = styled_components_1.default.td `
  padding: 12px 10px;
  font-size: medium;

  ${({ wrap }) => wrap &&
    styled_components_1.css `
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${styled_system_1.layout}
  ${styled_system_1.space}
  ${styled_system_1.typography}
`;
exports.TableCell = (_a) => {
    var { children, colspan, wrap = false } = _a, props = __rest(_a, ["children", "colspan", "wrap"]);
    return (react_1.default.createElement(TableCellStyled, Object.assign({ colSpan: colspan, wrap: wrap ? 1 : 0, "data-testid": 'table-cell' }, props), children));
};
exports.TableCell.propTypes = {
    wrap: prop_types_1.default.bool,
    children: prop_types_1.default.node,
    colspan: prop_types_1.default.number
};
