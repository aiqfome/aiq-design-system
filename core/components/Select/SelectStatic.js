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
exports.SelectStatic = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const prop_types_1 = __importDefault(require("prop-types"));
const downshift_1 = require("downshift");
const io_1 = require("react-icons/io");
const Box_1 = require("../Box");
const Input_1 = require("../Input");
const Loading_1 = require("../Loading");
const Button_1 = require("../Button");
const Container = styled_components_1.default(Box_1.Box) `
  position: relative;

  input {
    cursor: auto;
    padding-right: 30px;
  }

  ul {
    box-shadow: 0px 3px 6px #00000029;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    list-style-type: none;
    position: absolute;
    top: ${({ variant }) => (variant === 'outlined' ? '39px' : '38px')};
    overflow: hidden;
    z-index: 1;
    min-width: 100%;
    width: max-content;
    padding: 0;
    margin: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    max-height: 300px;
    overflow-y: auto;

    li {
      cursor: pointer;
      padding: 6px 12px;
      width: max-content;
      min-width: 100%;
    }

    ${({ isOpen }) => !isOpen &&
    styled_components_1.css `
        display: none;
      `}
  }
`;
const Item = styled_components_1.default.li `
  background: ${({ highlighted, theme }) => highlighted ? theme.colors.primaryLight : '#fff'};
`;
const ButtonStyled = styled_components_1.default(Button_1.Button) `
  position: absolute;
  top: ${({ variantSelect }) => variantSelect === 'outlined' ? '13px' : '12px'};
  right: 14px;
`;
const LoadingBox = styled_components_1.default(Box_1.Box) `
  position: absolute;
  top: ${({ variantSelect }) => variantSelect === 'outlined' ? '13px' : '12px'};
  right: 14px;
`;
exports.SelectStatic = (_a) => {
    var { label, variant, items = [], placeholder, selectedItem, autoComplete = true, sufix, isLoading, errorMessage, errorForm, clearOnSelect = false, isDependent = false, dependentMessage = 'este campo tem alguma dependência', emptyMessage = 'item não encontrado', handleSelectedItemChange = () => {
        // do nothing.
    }, onChangeTextInput = () => {
        // do nothing.
    }, prefix, inputProps } = _a, props = __rest(_a, ["label", "variant", "items", "placeholder", "selectedItem", "autoComplete", "sufix", "isLoading", "errorMessage", "errorForm", "clearOnSelect", "isDependent", "dependentMessage", "emptyMessage", "handleSelectedItemChange", "onChangeTextInput", "prefix", "inputProps"]);
    const [inputItems, setInputItems] = react_1.useState(items);
    react_1.useEffect(() => setInputItems(items), [items]);
    const { backgroundColor, border, width, maxWidth } = props;
    const boxStyled = Object.assign({ backgroundColor,
        border,
        width,
        maxWidth }, inputProps);
    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getToggleButtonProps, openMenu, getItemProps, setInputValue } = downshift_1.useCombobox({
        onSelectedItemChange: handleSelectedItemChange,
        items: isDependent ? [] : inputItems,
        selectedItem,
        itemToString: item => (typeof item === 'string' ? item : item.name),
        onInputValueChange: ({ inputValue = '' }) => {
            if (autoComplete && typeof inputValue === 'string') {
                onChangeTextInput(inputValue);
                setInputItems(items.filter(item => {
                    const name = typeof item === 'string' ? item : item.select || item.name;
                    return name.toLowerCase().startsWith(inputValue.toLowerCase());
                }));
            }
        }
    });
    function handleClickInput() {
        if (!isOpen) {
            openMenu();
        }
    }
    return (react_1.default.createElement(Container, Object.assign({ isOpen: isOpen, variant: variant, "data-testid": 'select-static' }, props),
        react_1.default.createElement("ul", Object.assign({}, getMenuProps()),
            isOpen &&
                inputItems &&
                !isDependent &&
                inputItems.length > 0 &&
                inputItems.map((item, index) => (react_1.default.createElement(Item, Object.assign({ key: index, "data-testid": 'select-item', highlighted: highlightedIndex === index }, getItemProps({ item, index })), typeof item === 'string' ? item : item.name))),
            isDependent && react_1.default.createElement(Item, null, dependentMessage),
            isOpen && !isDependent && inputItems && inputItems.length === 0 && (react_1.default.createElement("li", null, emptyMessage))),
        react_1.default.createElement(Box_1.Box, { refBox: getComboboxProps().ref },
            react_1.default.createElement(Input_1.Input, Object.assign({ onChange: getInputProps().onChange, onBlur: getInputProps().onBlur, onKeyDown: getInputProps().onKeyDown, onClick: handleClickInput, value: getInputProps().value, inputRef: getInputProps().ref, variant: variant, label: label, errorMessage: errorMessage, errorForm: errorForm, readOnly: !autoComplete, prefix: prefix, placeholder: placeholder }, getInputProps({
                onClick: () => {
                    clearOnSelect && setInputValue('');
                    setInputItems(items);
                    openMenu();
                }
            }), { nativeAutoComplete: 'disabled' }, boxStyled)),
            isLoading && (react_1.default.createElement(LoadingBox, null,
                react_1.default.createElement(Loading_1.Loading, { size: 'small' }))),
            inputItems && !isLoading && (react_1.default.createElement(ButtonStyled, { type: 'button', palette: 'primary', variantSelect: variant, onClick: getToggleButtonProps().onClick, refButton: getToggleButtonProps().ref, "aria-label": 'toggle menu' }, sufix || react_1.default.createElement(io_1.IoIosArrowDown, null))))));
};
exports.SelectStatic.propTypes = {
    label: prop_types_1.default.string,
    items: prop_types_1.default.array,
    isOpen: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['outlined']),
    prefix: prop_types_1.default.any,
    placeholder: prop_types_1.default.string,
    handleSelectedItemChange: prop_types_1.default.func,
    onChangeTextInput: prop_types_1.default.func,
    selectedItem: prop_types_1.default.any,
    autoComplete: prop_types_1.default.bool,
    backgroundColor: prop_types_1.default.any,
    border: prop_types_1.default.any,
    width: prop_types_1.default.any,
    maxWidth: prop_types_1.default.any,
    sufix: prop_types_1.default.any,
    isLoading: prop_types_1.default.bool,
    errorForm: prop_types_1.default.bool,
    errorMessage: prop_types_1.default.string,
    inputProps: prop_types_1.default.object,
    clearOnSelect: prop_types_1.default.bool,
    isDependent: prop_types_1.default.bool,
    emptyMessage: prop_types_1.default.string,
    dependentMessage: prop_types_1.default.string
};
exports.SelectStatic.defaultProps = {
    items: []
};
