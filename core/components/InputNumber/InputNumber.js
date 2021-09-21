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
exports.InputNumber = exports.NeutralInputStyled = void 0;
const react_1 = __importStar(require("react"));
const react_numeric_1 = __importDefault(require("react-numeric"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Box_1 = require("../Box");
const Flex_1 = require("../Flex");
const Text_1 = require("../Text");
const InputErrorMessage_1 = require("../InputErrorMessage");
exports.NeutralInputStyled = styled_components_1.default(react_numeric_1.default) `
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  padding: 10px 12px;
  font-family: inherit;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;

  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.color}
  ${styled_system_1.border}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, errorForm }) => errorForm &&
    styled_components_1.css `
      border-color: ${theme.colors.error};
    `};
`;
const NeutralContainerSufix = styled_components_1.default(Box_1.Box) `
  display: flex;
  align-items: center;

  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 4px;

  ${({ inputSelected }) => inputSelected &&
    styled_components_1.css `
      border-color: ${({ theme }) => theme.colors.primary};

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}

  ${({ theme, errorForm }) => errorForm &&
    styled_components_1.css `
      border-color: ${theme.colors.error};
    `};
  ${styled_system_1.border}
`;
const NeutralInputSufixed = styled_components_1.default(react_numeric_1.default) `
  ${styled_system_1.layout}
  ${styled_system_1.color}

  border: none;
`;
const NeutralInputPrefixed = styled_components_1.default(react_numeric_1.default) `
  ${styled_system_1.layout}
  ${styled_system_1.color}
  
  border: none;
  margin-left: 16px;
`;
const OutlinedContainer = styled_components_1.default(Box_1.Box) `
  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
`;
const OutlinedLabelStyled = styled_components_1.default.label `
  position: relative;
  top: -6px;
  padding-top: 6px;
  line-height: 1.5;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > input {
    max-height: 37px;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    border: solid 1px
      ${({ theme, errorForm }) => errorForm ? theme.colors.error : theme.colors.mediumGrey};
    border-top-color: ${({ label }) => (label ? 'transparent' : 'interiht')};

    border-radius: 4px;
    padding: 9px 13px 9px;
    caret-color: ${({ theme }) => theme.colors.almostBlack};
    color: ${({ theme }) => theme.colors.almostBlack};
    width: 100%;
    height: inherit;
    box-shadow: none;
    line-height: inherit;
    transition: border 0.2s, box-shadow 0.2s;
    background: ${({ theme, disabled }) => disabled ? theme.colors.lightGrey : theme.colors.white};

    ${({ placeholder, theme, errorForm }) => {
    if (placeholder === ' ' || placeholder === '') {
        return styled_components_1.css `
          &:not(:focus):placeholder-shown {
            border-top-color: ${errorForm
            ? theme.colors.error
            : theme.colors.mediumGrey};
          }

          &:not(:focus):placeholder-shown + span {
            font-size: inherit;
            line-height: 53px !important;
            color: ${theme.colors.grey};
          }
        `;
    }
    return styled_components_1.css ``;
}};

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      border-top-color: transparent;
      box-shadow: inset 1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset -1px 0 ${({ theme }) => theme.colors.primaryLight},
        inset 0 -1px ${({ theme }) => theme.colors.primaryLight};
      outline: none;
    }

    &:focus + span {
      color: ${({ theme }) => theme.colors.primary} !important;
    }

    &:focus + span::before,
    &:focus + span::after {
      border-top-color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: inset 0 1px ${({ theme }) => theme.colors.primaryLight};
    }

    & + span,
    &:focus + span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      max-height: 100%;
      font-size: 75%;
      line-height: 15px !important;
      cursor: text;
      transition: color 0.2s, font-size 0.2s, line-height 0.2s;
      color: ${({ theme }) => theme.colors.almostBlack};

      &::before,
      &::after {
        content: '';
        display: block;
        box-sizing: border-box;
        margin-top: 6px;
        border-top: solid 1px;
        min-width: 10px;
        height: 8px;
        pointer-events: none;
        box-shadow: inset 0 1px transparent;
        transition: border-color 0.2s, box-shadow 0.2s;
        border-top-color: ${({ theme, errorForm }) => errorForm ? theme.colors.error : theme.colors.mediumGrey};
      }

      &::before {
        margin-right: 4px;
        border-left: solid 1px transparent;
        border-radius: 4px 0;
      }

      &::after {
        flex-grow: 1;
        margin-left: 4px;
        border-right: solid 1px transparent;
        border-radius: 0 4px;
      }
    }
  }

  & > button,
  & > div.sufix {
    right: 0;
    margin-right: 5px;
    position: absolute;
    background: none;
    border: none;
  }
`;
exports.InputNumber = (_a) => {
    var { name, inputRef, label, errorForm, type = 'text', errorMessage, prefix, sufix, value, variant, placeholder, disabled, containerProps, nativeAutoComplete = 'disabled' } = _a, props = __rest(_a, ["name", "inputRef", "label", "errorForm", "type", "errorMessage", "prefix", "sufix", "value", "variant", "placeholder", "disabled", "containerProps", "nativeAutoComplete"]);
    const [inputSelected, setInputSelected] = react_1.useState(false);
    const { readOnly = false, backgroundColor, border, width, maxWidth, boxProps, marginLeft, marginRight } = props;
    const brazilianNumericOptions = {
        digitGroupSeparator: '.',
        decimalCharacter: ',',
        currencySymbolPlacement: 'p'
    };
    const numericOptions = Object.assign(Object.assign({}, brazilianNumericOptions), { readOnly, selectOnFocus: !readOnly, showWarnings: false, allowDecimalPadding: false, currencySymbol: '', isCancellable: false, minimumValue: '0', maximumValue: '9999999999', defaultValueOverride: '0', modifyValueOnWheel: false, onInvalidPaste: 'ignore', emptyInputBehavior: 'zero' });
    const neutralBoxStyled = Object.assign({ backgroundColor,
        border,
        width,
        maxWidth }, boxProps);
    const outlinedStyledContainer = {
        backgroundColor,
        maxWidth,
        marginLeft,
        marginRight
    };
    if (variant === 'outlined') {
        if (sufix) {
            return (react_1.default.createElement(OutlinedContainer, Object.assign({}, outlinedStyledContainer, containerProps),
                react_1.default.createElement(OutlinedLabelStyled, { label: label, errorForm: errorForm, disabled: disabled, placeholder: placeholder || ' ' },
                    react_1.default.createElement(react_numeric_1.default, Object.assign({ value: value, placeholder: placeholder || ' ', name: name, type: type, ref: inputRef, disabled: disabled, autoComplete: nativeAutoComplete }, numericOptions, props)),
                    label && react_1.default.createElement(Text_1.Text, null, label),
                    sufix && react_1.default.createElement("div", { className: 'sufix' }, sufix)),
                errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
        }
        return (react_1.default.createElement(OutlinedContainer, Object.assign({}, outlinedStyledContainer, containerProps),
            react_1.default.createElement(OutlinedLabelStyled, { label: label, errorForm: errorForm, disabled: disabled, placeholder: placeholder || ' ' },
                react_1.default.createElement(react_numeric_1.default, Object.assign({ value: value, placeholder: placeholder || ' ', name: name, type: type, ref: inputRef, disabled: disabled, autoComplete: nativeAutoComplete }, numericOptions, props)),
                label && react_1.default.createElement(Text_1.Text, null, label)),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    if (sufix) {
        return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps, { flexDirection: 'column' }),
            react_1.default.createElement(NeutralContainerSufix, Object.assign({}, neutralBoxStyled, { inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false) }),
                react_1.default.createElement(NeutralInputSufixed, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, value: value, errorForm: errorForm, errorMessage: errorMessage, autoComplete: nativeAutoComplete }, numericOptions, props)),
                sufix),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    if (prefix) {
        return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps),
            react_1.default.createElement(NeutralContainerSufix, Object.assign({}, neutralBoxStyled, { inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false) }),
                prefix,
                react_1.default.createElement(NeutralInputPrefixed, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, value: value, errorForm: errorForm, errorMessage: errorMessage, autoComplete: nativeAutoComplete }, numericOptions, props))),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps, { flexDirection: 'column' }),
        react_1.default.createElement(exports.NeutralInputStyled, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, sufix: sufix, value: value, errorForm: errorForm, errorMessage: errorMessage, autoComplete: nativeAutoComplete }, numericOptions, props)),
        errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
};
