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
exports.InputTags = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Button_1 = require("../Button");
const Box_1 = require("../Box");
const Text_1 = require("../Text");
const InputErrorMessage_1 = require("../InputErrorMessage");
const InputStyled = styled_components_1.default.input `
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.color}
  border: none;
`;
const Tag = styled_components_1.default.div `
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;
const ContainerInput = styled_components_1.default(Box_1.Box) `
  display: flex;
  max-height: 37px;
  align-items: center;
  flex-direction: row;
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
exports.InputTags = (_a) => {
    var { errorForm, errorMessage, type = 'text', placeholder, backgroundColor, border, width, maxWidth, value, onChange, nativeAutoComplete } = _a, props = __rest(_a, ["errorForm", "errorMessage", "type", "placeholder", "backgroundColor", "border", "width", "maxWidth", "value", "onChange", "nativeAutoComplete"]);
    const [inputValue, setInputValue] = react_1.useState('');
    const [inputSelected, setInputSelected] = react_1.useState(false);
    const [tags, setTags] = react_1.useState(value ? value.split(',') : []);
    const boxStyled = {
        backgroundColor,
        border,
        width,
        maxWidth
    };
    function addTag() {
        setTags([...tags, inputValue]);
        setInputValue('');
        if (onChange) {
            onChange(tags);
        }
    }
    function removeTag(index) {
        const newTags = tags;
        newTags.splice(index, 1);
        setTags([...newTags]);
        if (onChange) {
            onChange(tags);
        }
    }
    function handleInputKeyDown(e) {
        if (e.keyCode === 13) {
            addTag();
        }
    }
    return (react_1.default.createElement(ContainerInput, Object.assign({ inputSelected: inputSelected, onClick: () => setInputSelected(true), onBlur: () => setInputSelected(false), flexDirection: 'column', "data-testid": 'input-tags' }, boxStyled),
        react_1.default.createElement("input", Object.assign({ type: 'hidden', value: tags.toString() }, props)),
        react_1.default.createElement(Box_1.Box, { display: 'flex' }, tags.map((tag, index) => (react_1.default.createElement(Tag, { key: index },
            react_1.default.createElement(Text_1.Text, { fontSize: 'small', mr: 1, color: 'white' }, tag),
            react_1.default.createElement(Button_1.Button, { onClick: () => removeTag(index) },
                react_1.default.createElement(md_1.MdClose, { color: '#fff', size: 12 })))))),
        react_1.default.createElement(InputStyled, Object.assign({ onKeyDown: handleInputKeyDown, placeholder: placeholder, type: type, onChange: e => setInputValue(e.target.value), value: inputValue, autoComplete: nativeAutoComplete }, boxStyled)),
        errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
};
exports.InputTags.propTypes = {
    name: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    type: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    value: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    backgroundColor: prop_types_1.default.any,
    border: prop_types_1.default.any,
    width: prop_types_1.default.any,
    maxWidth: prop_types_1.default.any,
    nativeAutoComplete: prop_types_1.default.oneOf(['on', 'disabled'])
};
