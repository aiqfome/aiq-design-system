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
exports.BreadcrumbItem = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const md_1 = require("react-icons/md");
const Flex_1 = require("../Flex");
const BreadcrumbItemStyled = styled_components_1.default.li `
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:after {
      content: '';
    }
  }

  &:after {
    margin-right: 8px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.darkGrey};
    content: ' / ';
  }
`;
const OverlayStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
`;
const OverlayContentStyled = styled_components_1.default(Flex_1.Flex) `
  position: absolute;
  top: 18px;
  width: max-content;
  background: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  transition: opacity 300ms, visibility 300ms;

  &.__breadcrumb-item-overflow-hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.__breadcrumb-item-overflow-visible {
    visibility: visible;
    opacity: 1;
  }
`;
exports.BreadcrumbItem = (_a) => {
    var { overlay, children } = _a, props = __rest(_a, ["overlay", "children"]);
    const [classActiveOverflow, setClassActiveOverflow] = react_1.useState('__breadcrumb-item-overflow-hidden');
    const handleOnMouseOver = react_1.useCallback(() => {
        setClassActiveOverflow('__breadcrumb-item-overflow-visible');
    }, []);
    const handleOnMouseOut = react_1.useCallback(() => {
        setClassActiveOverflow('__breadcrumb-item-overflow-hidden');
    }, []);
    if (overlay) {
        return (react_1.default.createElement(BreadcrumbItemStyled, Object.assign({ onMouseOver: handleOnMouseOver, onMouseOut: handleOnMouseOut }, props),
            react_1.default.createElement(OverlayStyled, { "data-testid": 'crumb-item-overflow' },
                children,
                react_1.default.createElement(md_1.MdArrowDropDown, null),
                react_1.default.createElement(OverlayContentStyled, { "data-testid": 'overlay-content', className: classActiveOverflow }, overlay))));
    }
    return react_1.default.createElement(BreadcrumbItemStyled, Object.assign({}, props), children);
};
exports.BreadcrumbItem.propTypes = {
    children: prop_types_1.default.any,
    overlay: prop_types_1.default.any
};
