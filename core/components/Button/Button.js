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
exports.Button = exports.ButtonStyled = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Icon_1 = require("../Icon");
const Text_1 = require("../Text");
exports.ButtonStyled = styled_components_1.default.button `
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  max-height: 42px;
  cursor: pointer;

  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.border}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}

  &:active {
    opacity: 0.5;
  }

  ${({ disabled }) => disabled &&
    styled_components_1.css `
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}

  ${({ fullWidth }) => fullWidth &&
    styled_components_1.css `
      width: 100%;
    `}

    
  &.__button-text {
    border: none;
    background: none;
    padding: 0;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }

    &.__button-text-primary {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.__button-text-error {
      color: ${({ theme }) => theme.colors.error};
    }

    &.__button-text-secondary {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.__button-text-neutral {
      color: ${({ theme }) => theme.colors.almostBlack};
    }
  }

  &.__button-contained {
    text-transform: uppercase;
    border: none;
    justify-content: center;
    transition: 0.5s;

    &.__button-contained-primary {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryMedium};
      }
    }

    &.__button-contained-error {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.error};

      &:hover {
        background: ${({ theme }) => theme.colors.error};
      }
    }

    &.__button-contained-secondary {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background: ${({ theme }) => theme.colors.secondaryMedium};
      }
    }

    &.__button-contained-neutral {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.almosBlack};
      border: 1px solid ${({ theme }) => theme.colors.almostBlack};
    }
  }

  &.__button-outlined {
    text-transform: uppercase;
    justify-content: center;
    transition: 0.5s;

    &.__button-outlined-primary {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      background: none;

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &.__button-outlined-error {
      border: 1px solid ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.error};
      background: none;

      &:hover {
        background: ${({ theme }) => theme.colors.error};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &.__button-outlined-secondary {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};
      background: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryDark};
      }
    }

    &.__button-outlined-neutral {
      border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
      color: ${({ theme }) => theme.colors.almostBlack};
      background: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
      }
    }
  }

  &.__button-fab {
    text-transform: uppercase;
    justify-content: center;
    border-radius: 24px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 14px 21px;
    transition: 0.5s;

    &.__button-fab-icon {
      border-radius: 50%;
      padding: 0;
      min-height: 50px;
      min-width: 50px;
    }

    &.__button-fab-primary {
      background: ${({ theme }) => theme.colors.primary};
    }

    &.__button-fab-error {
      background: ${({ theme }) => theme.colors.error};
    }

    &.__button-fab-secondary {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &.__button-fab-neutral {
      color: ${({ theme }) => theme.colors.almostBlack};
      background: ${({ theme }) => theme.colors.white};
    }
  }

  &.__button-icon {
    text-transform: uppercase;
    justify-content: center;
    border: none;
    background: none;
    padding: 8px;
    border-radius: 50%;
    transition: 0.5s;

    background-position: center;
    transition: background 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.lightGrey}
        radial-gradient(
          circle,
          transparent 1%,
          ${({ theme }) => theme.colors.lightGrey} 1%
        )
        center/15000%;
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.grey};
      background-size: 100%;
      transition: background 0s;
      opacity: 0.5;
    }
  }
`;
exports.Button = (_a) => {
    var { children, prefix, sufix, palette = 'primary', variant = 'text', variantType, type = 'button', className } = _a, props = __rest(_a, ["children", "prefix", "sufix", "palette", "variant", "variantType", "type", "className"]);
    const getClassName = react_1.useCallback(() => {
        return `${className} __button-${variant} __button-${variant}-${palette} ${variantType && `__button-${variant}-${variantType}`}`;
    }, [palette, variant, variantType, className]);
    if (sufix && prefix) {
        return (react_1.default.createElement(exports.ButtonStyled, Object.assign({ className: getClassName(), type: type }, props),
            react_1.default.createElement(Icon_1.Icon, { "data-testid": 'button-prefix', cursor: 'pointer', mr: 5 }, prefix),
            react_1.default.createElement(Text_1.Text, { fontSize: 'medium' }, children),
            react_1.default.createElement(Icon_1.Icon, { "data-testid": 'button-sufix', cursor: 'pointer', ml: 5 }, sufix)));
    }
    if (prefix) {
        return (react_1.default.createElement(exports.ButtonStyled, Object.assign({ className: getClassName(), type: type }, props),
            react_1.default.createElement(Icon_1.Icon, { "data-testid": 'button-prefix', cursor: 'pointer', mr: 5 }, prefix),
            react_1.default.createElement(Text_1.Text, { fontSize: 'medium' }, children)));
    }
    if (sufix) {
        return (react_1.default.createElement(exports.ButtonStyled, Object.assign({ className: getClassName(), type: type }, props),
            react_1.default.createElement(Text_1.Text, { fontSize: 'medium' }, children),
            react_1.default.createElement(Icon_1.Icon, { "data-testid": 'button-sufix', cursor: 'pointer', ml: 5 }, sufix)));
    }
    return (react_1.default.createElement(exports.ButtonStyled, Object.assign({ type: type, className: getClassName() }, props),
        react_1.default.createElement(Text_1.Text, { fontSize: 'medium' }, children)));
};
exports.Button.propTypes = {
    children: prop_types_1.default.any,
    prefix: prop_types_1.default.any,
    className: prop_types_1.default.string,
    sufix: prop_types_1.default.any,
    refButton: prop_types_1.default.any,
    palette: prop_types_1.default.oneOf(['primary', 'error', 'secondary', 'neutral']),
    variantType: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(['text', 'contained', 'outlined', 'fab', 'icon']),
    disabled: prop_types_1.default.bool,
    fontWeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    onClick: prop_types_1.default.func,
    type: prop_types_1.default.oneOf(['button', 'submit', 'reset'])
};
