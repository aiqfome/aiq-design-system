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
exports.DatePickerSingle = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const moment_1 = __importDefault(require("moment"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_dates_1 = require("react-dates");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
const Text_1 = require("../Text");
const md_1 = require("react-icons/md");
const DatePickerWrapper = styled_components_1.default(Flex_1.Flex) `
  background: #fff;
  position: absolute;
  top: 40px;
  z-index: 1;
`;
const ButtonDatePicker = styled_components_1.default(Flex_1.Flex) `
  &:hover {
    cursor: pointer;
  }
`;
const PlaceHolderText = styled_components_1.default(Text_1.Text) `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;
exports.DatePickerSingle = (_a) => {
    var { value = [moment_1.default()], onChange, errorMessage, errorForm, placeholder } = _a, props = __rest(_a, ["value", "onChange", "errorMessage", "errorForm", "placeholder"]);
    moment_1.default.locale('pt-BR');
    const [isChangeValue, setIsChangeValue] = react_1.useState(false);
    const [date, setDate] = react_1.useState(value);
    const [showDatePicker, setShowDatePicker] = react_1.useState(false);
    const [focused, setFocused] = react_1.useState(false);
    function onDateChange(date) {
        setDate([date]);
        if (onChange)
            onChange(date);
        setIsChangeValue(true);
    }
    function onFocusChange() {
        setFocused(true);
        setShowDatePicker(false);
    }
    return (react_1.default.createElement(Flex_1.Flex, { position: 'relative', flexDirection: 'column', "data-testid": 'datepicker-single' },
        react_1.default.createElement(ButtonDatePicker, { onClick: () => setShowDatePicker(!showDatePicker), "data-testid": 'datepicker-single-input', alignItems: 'center', px: '12px', py: '10px', maxHeight: '37px', justifyContent: 'space-between', width: '100%', maxWidth: '250px', backgroundColor: '#fff', border: errorForm ? '1px solid #DE4E51' : '1px solid #dedede', borderRadius: '4px' },
            isChangeValue || !placeholder ? (react_1.default.createElement(Text_1.Text, { fontSize: 'small', cursor: 'pointer' }, `${moment_1.default(date[0]).format('DD/MMMM/YYYY')}`)) : (react_1.default.createElement(PlaceHolderText, { color: '#bfbfbf', cursor: 'pointer', "data-testid": 'datepicker-placeholder' }, placeholder)),
            react_1.default.createElement(Icon_1.Icon, null,
                react_1.default.createElement(md_1.MdArrowDropDown, { size: 28 }))),
        errorForm && (react_1.default.createElement(Text_1.Text, { mt: 2, color: 'grey', fontSize: 'small', "data-testid": 'datepicker-error' }, errorMessage)),
        showDatePicker && (react_1.default.createElement(DatePickerWrapper, { "data-testid": 'datepicker-open' },
            react_1.default.createElement(react_dates_1.DayPickerSingleDateController, Object.assign({ initialVisibleMonth: () => moment_1.default() }, props, { onDateChange: onDateChange, onFocusChange: onFocusChange, focused: focused, date: date[0] }))))));
};
exports.DatePickerSingle.propTypes = {
    value: prop_types_1.default.array,
    onChange: prop_types_1.default.func.isRequired,
    name: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string
};
