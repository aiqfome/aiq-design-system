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
exports.InputNeutral = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Button_1 = require("../Button");
const Flex_1 = require("../Flex");
const Box_1 = require("../Box");
const InputErrorMessage_1 = require("../InputErrorMessage");
const InputStyled = styled_components_1.default.input `
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
const ContainerSufix = styled_components_1.default(Box_1.Box) `
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
const InputSufixed = styled_components_1.default.input `
  ${styled_system_1.layout}
  ${styled_system_1.color}

  border: none;
`;
const InputPrefixed = styled_components_1.default.input `
  ${styled_system_1.layout}
  ${styled_system_1.color}
  
  border: none;
  margin-left: 16px;
`;
exports.InputNeutral = (_a) => {
    var { name, inputRef, errorForm, errorMessage, type = 'text', sufix, prefix, value, placeholder, containerProps, nativeAutoComplete } = _a, props = __rest(_a, ["name", "inputRef", "errorForm", "errorMessage", "type", "sufix", "prefix", "value", "placeholder", "containerProps", "nativeAutoComplete"]);
    const [inputSelected, setInputSelected] = react_1.useState(false);
    const [passwordVisible, setPasswordVisible] = react_1.useState(false);
    const { backgroundColor, border, width, maxWidth, boxProps } = props;
    const boxStyled = Object.assign({ backgroundColor,
        border,
        width,
        maxWidth }, boxProps);
    if (sufix) {
        return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps, { flexDirection: 'column' }),
            react_1.default.createElement(ContainerSufix, Object.assign({}, boxStyled, { inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false) }),
                react_1.default.createElement(InputSufixed, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, value: value, errorForm: errorForm, errorMessage: errorMessage, "data-testid": 'input', autoComplete: nativeAutoComplete }, props)),
                sufix),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    if (prefix) {
        return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps),
            react_1.default.createElement(ContainerSufix, Object.assign({}, boxStyled, { inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false) }),
                prefix,
                react_1.default.createElement(InputPrefixed, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, value: value, errorForm: errorForm, errorMessage: errorMessage, "data-testid": 'input', autoComplete: nativeAutoComplete }, props))),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    if (type === 'password') {
        return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps, { flexDirection: 'column' }),
            react_1.default.createElement(ContainerSufix, Object.assign({}, boxStyled, { inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false) }),
                react_1.default.createElement(InputSufixed, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: passwordVisible ? 'text' : 'password', value: value, errorForm: errorForm, errorMessage: errorMessage, "data-testid": 'input', autoComplete: nativeAutoComplete }, props)),
                react_1.default.createElement(Button_1.Button, { palette: 'primary', mr: 5, onClick: () => setPasswordVisible(!passwordVisible) }, passwordVisible ? (react_1.default.createElement(md_1.MdVisibilityOff, { size: 22 })) : (react_1.default.createElement(md_1.MdVisibility, { size: 22 })))),
            errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
    }
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, containerProps, { flexDirection: 'column' }),
        react_1.default.createElement(InputStyled, Object.assign({ name: name, ref: inputRef, placeholder: placeholder, type: type, sufix: sufix, value: value, errorForm: errorForm, errorMessage: errorMessage, "data-testid": 'input', autoComplete: nativeAutoComplete }, props)),
        errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
};
InputStyled.propTypes = {
    inputRef: prop_types_1.default.any,
    value: prop_types_1.default.string,
    nativeAutoComplete: prop_types_1.default.oneOf(['on', 'disabled'])
};
exports.InputNeutral.propTypes = {
    name: prop_types_1.default.string,
    inputRef: prop_types_1.default.any,
    errorForm: prop_types_1.default.bool,
    type: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    sufix: prop_types_1.default.any,
    prefix: prop_types_1.default.any,
    value: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    containerProps: prop_types_1.default.object,
    boxProps: prop_types_1.default.object,
    nativeAutoComplete: prop_types_1.default.oneOf(['on', 'disabled']),
    backgroundColor: prop_types_1.default.any,
    border: prop_types_1.default.any,
    width: prop_types_1.default.any,
    maxWidth: prop_types_1.default.any
};
