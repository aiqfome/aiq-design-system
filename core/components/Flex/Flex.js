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
exports.Flex = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_system_1 = require("styled-system");
const FlexStyled = styled_components_1.default.div `
  ${styled_system_1.space}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
  ${styled_system_1.border}
  ${styled_system_1.position}
  ${styled_system_1.color}
  ${styled_system_1.flexbox}
  ${styled_system_1.flex}
  ${styled_system_1.textAlign}
  ${styled_system_1.shadow}

  display: flex;

  &.__flex-variant-centralized {
    justify-content: center;
    align-items: center;
  }

  &.__flex-variant-fullCentralized {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  &.__flex-fullHeight {
    height: 100vh;
  }

  ${styled_system_1.layout}

  ${({ isClickable }) => isClickable &&
    styled_components_1.css `
      &:active {
        opacity: 0.8;
        user-select: none;
      }
    `}
`;
exports.Flex = react_1.default.forwardRef((_a, ref) => {
    var { children, color, variant = 'auto', fullHeight, className } = _a, props = __rest(_a, ["children", "color", "variant", "fullHeight", "className"]);
    return (react_1.default.createElement(FlexStyled, Object.assign({ "data-testid": 'flex', className: `${className} __flex-variant-${variant} ${fullHeight && '__flex-fullHeight'}`, ref: ref, color: color }, props), children));
});
exports.Flex.displayName = 'Flex';
exports.Flex.propTypes = {
    color: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(['auto', 'centralized', 'fullCentralized']),
    fullHeight: prop_types_1.default.bool,
    className: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    children: prop_types_1.default.node
};
