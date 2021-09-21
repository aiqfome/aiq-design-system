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
exports.Switch = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const switchVariations = {
    default: styled_components_1.css `
    & > input {
      width: 40px;
      height: 15px;

      &::after {
        margin-top: -3px;
        width: 21px;
        height: 21px;
        right: 19px;
      }
    }
  `,
    small: styled_components_1.css `
    & > input {
      width: 25px;
      height: 10px;

      &::after {
        margin-top: -2px;
        width: 14px;
        height: 14px;
        right: 11px;
      }
    }
  `
};
const SwitchStyled = styled_components_1.default.label `
  ${styled_system_1.space}

  display: flex;
  align-items: center;

  ${({ variant }) => switchVariations[variant || 'default']}

  & > input {
    cursor: pointer;
    position: relative;
    margin: 0 10px 0 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 30px;
      height: 100%;
      transition: all 0.25s ease-in-out;
    }

    &::after {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      border-radius: 21px;
      box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.2s;
    }

    &:not(:checked):not(:disabled):hover::before {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }

    &:checked::after {
      right: 0;
    }

    &:checked::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:disabled {
      cursor: default;
    }

    &:disabled::after {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.mediumGrey};
    }

    &:disabled::before {
      background-color: ${({ theme }) => theme.colors.mediumGrey};
      border-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
    }

    &:disabled:checked::before {
      background-color: ${({ theme }) => theme.colors.mediumGrey};
    }

    &:disabled:checked:after {
      background-color: ${({ theme }) => theme.colors.primaryLight};
      box-shadow: none;
    }

    label {
      display: block;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`;
exports.Switch = react_1.default.forwardRef((_a, ref) => {
    var { variant = 'default', className } = _a, props = __rest(_a, ["variant", "className"]);
    return (react_1.default.createElement(SwitchStyled, { variant: variant, className: className, "data-testid": 'switch' },
        react_1.default.createElement("input", Object.assign({ ref: ref, type: 'checkbox', "data-testid": 'input' }, props))));
});
exports.Switch.displayName = 'Switch';
exports.Switch.propTypes = {
    checked: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['default', 'small']),
    className: prop_types_1.default.string
};
