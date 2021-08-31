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
exports.Tab = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_system_1 = require("styled-system");
const styled_components_1 = __importStar(require("styled-components"));
const tabVariations = {
    default: styled_components_1.css `
    padding: 8px 21px;
    ${({ active, theme }) => active
        ? styled_components_1.css `
            font-weight: ${theme.fontWeights.medium};
            color: ${theme.colors.primary};
            &::before {
              background: ${theme.colors.primary};
              animation: show 0.25s;
              @keyframes show {
                from {
                  transform: scale(0);
                }
                to {
                  transform: scale(1);
                }
              }
            }
          `
        : styled_components_1.css `
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
            &::before {
              background: transparent;
            }
          `}
  `,
    contained: styled_components_1.css `
    padding: 10px 17px;
    ${({ active, theme }) => active
        ? styled_components_1.css `
            font-weight: ${theme.fontWeights.semiBold};
            color: ${theme.colors.black};
            background: ${theme.colors.white};
            border-radius: 5px;
            border: 1px solid ${theme.colors.mediumGrey};
          `
        : styled_components_1.css `
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
          `}
  `,
    card: styled_components_1.css `
    padding: 10px 17px;
    ${({ active, theme }) => active
        ? styled_components_1.css `
            color: ${theme.colors.almostBlack};
            background: ${theme.colors.white};
            border-radius: 5px 5px 0 0;
            border: 1px solid ${theme.colors.mediumGrey};
            border-bottom: 0px;
            color: ${theme.colors.primary};
            font-weight: ${theme.fontWeights.medium};

            &::before {
              background: ${theme.colors.white};
            }
          `
        : styled_components_1.css `
            font-weight: ${theme.fontWeights.regular};
            color: ${theme.colors.darkGrey};
          `}
  `
};
const TabStyled = styled_components_1.default.li `
  ${styled_system_1.space}

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: max-content;

  &:hover {
    cursor: pointer;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -1px;
    width: 100%;
    height: 3px;
    border-radius: 3px 3px 0 0;
  }

  ${({ variant }) => tabVariations[variant || 'default']}
`;
exports.Tab = (_a) => {
    var { children, value = 0, index } = _a, props = __rest(_a, ["children", "value", "index"]);
    function handleClick(event) {
        event.currentTarget.parentNode.setAttribute('data-id', index);
    }
    return (react_1.default.createElement(TabStyled, Object.assign({ "data-testid": 'tab', onClick: handleClick, active: index === value }, props), children));
};
exports.Tab.propTypes = {
    index: prop_types_1.default.number.isRequired,
    children: prop_types_1.default.any.isRequired,
    value: prop_types_1.default.number,
    variant: prop_types_1.default.oneOf(['default', 'contained', 'card'])
};
exports.Tab.defaultProps = {
    variant: 'default'
};
