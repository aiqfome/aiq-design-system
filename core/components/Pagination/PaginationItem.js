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
exports.PaginationItem = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const ItemPageStyled = styled_components_1.default.button `
  background: #fff;
  border: 1px solid #dedede;
  color: #8c8c8c;

  &.__pagination-size-large {
    height: 42px;
    min-width: 42px;
  }
  &.__pagination-size-default {
    height: 34px;
    min-width: 34px;
  }
  &.__pagination-size-small {
    height: 28px;
    min-width: 28px;
  }
  &.__button-text {
    padding: 0 8px;
    border: 1px solid #dedede;
  }

  ${({ active, theme }) => active &&
    styled_components_1.css `
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      span {
        color: ${theme.colors.white};
      }
    `}

  border-radius: 0;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:hover {
    outline: none;
    text-decoration: none;
  }

  cursor: ${({ cursor }) => cursor || 'pointer'};

  & span {
    cursor: ${({ cursor }) => cursor || 'pointer'};
  }
`;
exports.PaginationItem = (_a) => {
    var { children, size = 'default', className, active } = _a, props = __rest(_a, ["children", "size", "className", "active"]);
    return (react_1.default.createElement(ItemPageStyled, Object.assign({ active: active, className: `${className} __pagination-item __pagination-size-${size}`, size: size }, props), children));
};
exports.PaginationItem.propTypes = {
    children: prop_types_1.default.any,
    size: prop_types_1.default.oneOf(['default', 'small', 'large']),
    className: prop_types_1.default.string,
    active: prop_types_1.default.bool
};
