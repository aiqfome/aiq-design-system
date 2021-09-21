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
exports.MultiSelectStatic = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const md_1 = require("react-icons/md");
const downshift_1 = require("downshift");
const Flex_1 = require("../Flex");
const Box_1 = require("../Box");
const Text_1 = require("../Text");
const Divider_1 = require("../Divider");
const Button_1 = require("../Button");
const InputErrorMessage_1 = require("../InputErrorMessage");
const MultiSelectStyled = styled_components_1.default(Box_1.Box) `
  &:hover {
    cursor: text;
  }

  & input::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
const ContainerInput = styled_components_1.default(Box_1.Box) `
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  padding: 4px 10px;
  border: ${({ errorForm, theme }) => errorForm
    ? `1px solid ${theme.colors.error}`
    : `1px solid ${theme.colors.mediumGrey}`};

  input {
    background: none;
    border: none;
    height: 25px;
    font-family: inherit;
  }

  input::placeholder {
    font-family: inherit;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
const Overflow = styled_components_1.default(Flex_1.Flex) `
  position: absolute;
  min-width: 100%;
  width: max-content;
  z-index: 99;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 3px 10px;

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
const Itens = styled_components_1.default(Box_1.Box) `
  max-height: 250px;
  overflow: auto;

  .highlighted {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const SelectedItem = styled_components_1.default(Text_1.Text) `
  white-space: nowrap;
`;
exports.MultiSelectStatic = (_a) => {
    var { items, maxWidth, filters = [], onChange, value = [], placeholder, errorForm, errorMessage, emptyMessage = 'item não encontrado ou já adicionado', isDependent = false, dependentMessage = 'este campo tem alguma dependência' } = _a, props = __rest(_a, ["items", "maxWidth", "filters", "onChange", "value", "placeholder", "errorForm", "errorMessage", "emptyMessage", "isDependent", "dependentMessage"]);
    const [inputValue, setInputValue] = react_1.useState('');
    const [refBadges, setRefBadges] = react_1.useState(null);
    const [itemLimit, setItemLimit] = react_1.useState(undefined);
    const [refContainer, setRefContainer] = react_1.useState(null);
    const inputRef = react_1.useRef(document.createElement('input'));
    const { getSelectedItemProps, getDropdownProps, selectedItems = [] } = downshift_1.useMultipleSelection({
        selectedItems: value,
        initialSelectedItems: value,
        onSelectedItemsChange: event => {
            onChange && onChange(event);
        }
    });
    react_1.useEffect(() => {
        const resizeListener = () => setItemLimit(undefined);
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);
    react_1.useEffect(() => {
        if (refBadges !== null && refContainer !== null) {
            if (selectedItems.length > 1) {
                const containerSize = refContainer.offsetWidth;
                let total = 0;
                let limit = -1;
                refBadges.childNodes.forEach((badge, index) => {
                    total = total + (badge === null || badge === void 0 ? void 0 : badge.offsetWidth);
                    if (total >= containerSize * 0.9 - 60 && limit === -1) {
                        limit = index;
                        return false;
                    }
                });
                if (containerSize * 0.9 - 60 <= total && !itemLimit && limit >= 0) {
                    if (itemLimit !== limit)
                        setItemLimit(limit);
                }
            }
        }
    }, [
        refBadges,
        itemLimit,
        refContainer,
        selectedItems,
        refContainer === null || refContainer === void 0 ? void 0 : refContainer.offsetWidth
    ]);
    const getFilteredItems = () => items.filter(item => selectedItems.indexOf(item) < 0 &&
        item.name.toLowerCase().startsWith(inputValue.toLowerCase()));
    const clear = () => {
        setItemLimit(undefined);
        onChange({ selectedItems: [] });
    };
    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, openMenu } = downshift_1.useCombobox({
        inputValue,
        defaultHighlightedIndex: 0,
        selectedItem: null,
        items: isDependent ? [] : getFilteredItems(),
        stateReducer: (state, actionAndChanges) => {
            const { changes, type } = actionAndChanges;
            switch (type) {
                case downshift_1.useCombobox.stateChangeTypes.InputKeyDownEnter:
                case downshift_1.useCombobox.stateChangeTypes.ItemClick:
                    return Object.assign(Object.assign({}, changes), { isOpen: true });
            }
            return changes;
        },
        onStateChange: ({ inputValue, type, selectedItem }) => {
            switch (type) {
                case downshift_1.useCombobox.stateChangeTypes.InputChange:
                    setInputValue(inputValue || '');
                    break;
                case downshift_1.useCombobox.stateChangeTypes.InputKeyDownEnter:
                case downshift_1.useCombobox.stateChangeTypes.ItemClick:
                case downshift_1.useCombobox.stateChangeTypes.InputBlur:
                    if (selectedItem) {
                        setInputValue('');
                        onChange({
                            selectedItems: [...selectedItems, selectedItem]
                        });
                    }
                    break;
                default:
                    break;
            }
        }
    });
    const filterItems = filter => {
        if (filter.clear) {
            clear();
        }
        if (filter.allItems) {
            onChange({
                selectedItems: items
            });
        }
        if (filter.items) {
            onChange({
                selectedItems: items.filter((_, i) => { var _a; return (_a = filter === null || filter === void 0 ? void 0 : filter.items) === null || _a === void 0 ? void 0 : _a.includes(i); })
            });
        }
    };
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column', flex: 1 },
        react_1.default.createElement(MultiSelectStyled, Object.assign({ position: 'relative', maxWidth: maxWidth, "data-testid": 'multiselect-static', onClick: () => inputRef.current.focus() }, props),
            react_1.default.createElement(ContainerInput, { backgroundColor: 'white', borderRadius: 4, display: 'flex', flexDirection: 'row', errorForm: errorForm, refBox: el => {
                    var _a;
                    (_a = getComboboxProps()) === null || _a === void 0 ? void 0 : _a.ref(el);
                    setRefContainer(el || null);
                } },
                react_1.default.createElement(Flex_1.Flex, { maxWidth: '90%', overflow: 'hidden', ref: el => setRefBadges(el || null) },
                    selectedItems.slice(0, itemLimit).map((selectedItem, index) => (react_1.default.createElement(Flex_1.Flex, { minWidth: selectedItems.length === 1 ? 0 : undefined, py: 2, key: `selected-item-${index}`, px: 4, mr: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'primary', borderRadius: '3px', "data-testid": 'select-selected-item' },
                        react_1.default.createElement(SelectedItem, Object.assign({ truncate: true }, getSelectedItemProps({
                            selectedItem,
                            index
                        }), { color: 'white' }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.select) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name)),
                        react_1.default.createElement(Button_1.Button, { onClick: e => {
                                e.stopPropagation();
                                onChange({
                                    selectedItems: selectedItems.filter(e => e.id !== selectedItem.id)
                                });
                            }, ml: 6 },
                            react_1.default.createElement(md_1.MdClose, { color: '#fff' }))))),
                    itemLimit !== undefined && selectedItems.length > itemLimit && (react_1.default.createElement(Flex_1.Flex, { py: 2, px: 4, mr: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'primary', borderRadius: '3px' },
                        react_1.default.createElement(Text_1.Text, { color: 'white' }, `+${selectedItems.length - itemLimit}`)))),
                react_1.default.createElement("input", Object.assign({ type: 'text', placeholder: placeholder, "data-testid": 'select-input', style: { width: '100%', flex: 1, paddingLeft: '5px' } }, getInputProps(getDropdownProps({
                    ref: inputRef,
                    preventKeyAction: isOpen,
                    onFocus: () => {
                        if (!isOpen) {
                            openMenu();
                        }
                    }
                })), { autoComplete: 'disabled' }))),
            react_1.default.createElement(Overflow, { isOpen: isOpen, mt: 13, py: 7, flexDirection: 'column', backgroundColor: 'white', border: '1px solid #dedede' },
                !isDependent && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("ul", null, filters.map((filter, index) => (react_1.default.createElement("li", { key: `filter-${index}`, "data-testid": 'select-filter', onClick: () => filterItems(filter) },
                        react_1.default.createElement(Text_1.Text, { cursor: 'pointer' }, filter.name))))),
                    react_1.default.createElement(Divider_1.Divider, { mx: 5, my: 4 }))),
                react_1.default.createElement(Itens, null,
                    react_1.default.createElement("ul", Object.assign({}, getMenuProps()),
                        isOpen &&
                            !isDependent &&
                            getFilteredItems().map((item, index) => (react_1.default.createElement("li", Object.assign({ className: highlightedIndex === index ? 'highlighted' : '', key: `${item}${index}`, "data-testid": 'select-item' }, getItemProps({ item, index }), { onClick: e => {
                                    getItemProps({ item, index }).onClick(e);
                                    setItemLimit(undefined);
                                } }), item.name))),
                        isDependent && react_1.default.createElement("li", null, dependentMessage),
                        isOpen && !isDependent && getFilteredItems().length === 0 && (react_1.default.createElement("li", null, emptyMessage)))))),
        errorForm && react_1.default.createElement(InputErrorMessage_1.InputErrorMessage, { errorMessage: errorMessage })));
};
exports.MultiSelectStatic.propTypes = {
    items: prop_types_1.default.array.isRequired,
    maxWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    filters: prop_types_1.default.array,
    onChange: prop_types_1.default.func,
    value: prop_types_1.default.array,
    isLoading: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    errorMessage: prop_types_1.default.string,
    isDependent: prop_types_1.default.bool,
    emptyMessage: prop_types_1.default.string,
    dependentMessage: prop_types_1.default.string
};
