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
exports.InputOutlined = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Button_1 = require("../Button");
const Text_1 = require("../Text");
const Box_1 = require("../Box");
const InputErrorMessage_1 = require("../InputErrorMessage");
const Container = styled_components_1.default(Box_1.Box) `
  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
`;
const LabelStyled = styled_components_1.default.label `
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
exports.InputOutlined = (_a) => {
    var { name, inputRef, label, placeholder = '', errorForm, type = 'text', errorMessage, sufix, value, backgroundColor, maxWidth, marginRight, marginLeft, containerProps, disabled, nativeAutoComplete } = _a, props = __rest(_a, ["name", "inputRef", "label", "placeholder", "errorForm", "type", "errorMessage", "sufix", "value", "backgroundColor", "maxWidth", "marginRight", "marginLeft", "containerProps", "disabled", "nativeAutoComplete"]);
    const [showPassword, setShowPassword] = react_1.useState(false);
    const styledContainer = {
        backgroundColor,
        maxWidth,
        marginRight,
        marginLeft
    };
    if (type === 'password') {
        return (react_1.default.createElement(Container, Object.assign({ "data-testid": 'input-outlined-password' }, containerProps, styledContainer),
            react_1.default.createElement(LabelStyled, { type: type, label: label, errorForm: errorForm, disabled: disabled, placeholder: placeholder || ' ' },
                react_1.default.createElement("input", Object.assign({}, props, { placeholder: placeholder || ' ', type: showPassword ? 'text' : 'password', ref: inputRef, name: name, disabled: disabled, "data-testid": 'input', autoComplete: nativeAutoComplete })),
                label && react_1.default.createElement(Text_1.Text, { "data-testid": 'input-label' }, label),
                react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: () => setShowPassword(!showPassword) }, showPassword ? (react_1.default.createElement(md_1.MdVisibilityOff, { size: 22 })) : (react_1.default.createElement(md_1.MdVisibility, { size: 22 })))),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    if (sufix) {
        return (react_1.default.createElement(Container, Object.assign({ "data-testid": 'input-outlined-sufix' }, containerProps, styledContainer),
            react_1.default.createElement(LabelStyled, { label: label, errorForm: errorForm, disabled: disabled, placeholder: placeholder || ' ' },
                react_1.default.createElement("input", Object.assign({}, props, { placeholder: placeholder || ' ', type: type, value: value, ref: inputRef, name: name, disabled: disabled, autoComplete: 'disabled', "data-testid": 'input' })),
                label && react_1.default.createElement(Text_1.Text, { "data-testid": 'input-label' }, label),
                sufix && react_1.default.createElement("div", { className: 'sufix' }, sufix)),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    return (react_1.default.createElement(Container, Object.assign({}, styledContainer, containerProps, { "data-testid": 'input-outlined' }),
        react_1.default.createElement(LabelStyled, { label: label, errorForm: errorForm, disabled: disabled, placeholder: placeholder || ' ' },
            react_1.default.createElement("input", Object.assign({}, props, { value: value, placeholder: placeholder || ' ', name: name, type: type, ref: inputRef, disabled: disabled, "data-testid": 'input', autoComplete: nativeAutoComplete })),
            label && react_1.default.createElement(Text_1.Text, { "data-testid": 'input-label' }, label)),
        errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
};
exports.InputOutlined.propTypes = {
    name: prop_types_1.default.string,
    inputRef: prop_types_1.default.any,
    label: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    type: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    sufix: prop_types_1.default.any,
    value: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    backgroundColor: prop_types_1.default.any,
    maxWidth: prop_types_1.default.any,
    marginLeft: prop_types_1.default.any,
    marginRight: prop_types_1.default.any,
    containerProps: prop_types_1.default.any,
    disabled: prop_types_1.default.bool,
    nativeAutoComplete: prop_types_1.default.oneOf(['on', 'disabled'])
};
