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
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const Box_1 = require("../Box");
const BoxStyled = styled_components_1.default(Box_1.Box) `
  position: relative;
`;
const DropdownStyled = styled_components_1.default.div `
  ${styled_system_1.size}
  ${styled_system_1.margin}
  ${styled_system_1.layout}

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }

  border: 1px solid ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.almostBlack};
  padding: 5px 5px 5px 16px;
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[3]};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    flex: 1;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    height: 24px;
  }
`;
const ItensStyled = styled_components_1.default.ul `
  ${styled_system_1.layout}
  list-style: none;
  border: 1px solid ${props => props.theme.colors.mediumGrey};
  color: ${props => props.theme.colors.almostBlack};
  border-radius: 4px;
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[3]};

  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  width: 100%;
  top: 38px;

  li {
    padding: 8px;

    &:hover {
      cursor: pointer;
      background: #fdeaf4;
    }
  }
`;
exports.Dropdown = (_a) => {
    var { label, opened, itens, maxWidth, selected, disabled = false, onChange = () => {
        // do nothing.
    } } = _a, props = __rest(_a, ["label", "opened", "itens", "maxWidth", "selected", "disabled", "onChange"]);
    const [isOpen, setIsOpen] = react_1.useState(opened);
    const [itemSelected, setItemSelect] = react_1.useState({ value: null, label: '' });
    react_1.useEffect(() => {
        if (selected) {
            const indexItem = itens.findIndex(item => item.value === selected);
            if (indexItem > -1)
                setItemSelect(itens[indexItem]);
        }
    }, [itens, selected]);
    function handleClickDropdown() {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    }
    function handleClickItem(item) {
        if (!disabled) {
            setIsOpen(false);
            onChange(item);
            setItemSelect(item);
        }
    }
    return (react_1.default.createElement(BoxStyled, Object.assign({ maxHeight: '37px', maxWidth: maxWidth }, props),
        react_1.default.createElement(DropdownStyled, { "data-testid": 'dropdown', onClick: handleClickDropdown, disabled: disabled },
            react_1.default.createElement("span", null, itemSelected.value != null ? itemSelected.label : label),
            react_1.default.createElement("button", { type: 'button' }, isOpen ? react_1.default.createElement(md_1.MdArrowDropUp, { size: 24 }) : react_1.default.createElement(md_1.MdArrowDropDown, { size: 24 }))),
        isOpen && (react_1.default.createElement(ItensStyled, { maxWidth: maxWidth }, itens.map(item => (react_1.default.createElement("li", { "data-testid": 'dropdown-item', onClick: () => handleClickItem(item), key: item.value }, item.label)))))));
};
exports.Dropdown.propTypes = {
    label: prop_types_1.default.string.isRequired,
    itens: prop_types_1.default.array.isRequired,
    selected: prop_types_1.default.any,
    opened: prop_types_1.default.bool,
    maxWidth: prop_types_1.default.number,
    width: prop_types_1.default.any,
    onChange: prop_types_1.default.func,
    disabled: prop_types_1.default.bool
};
