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
exports.TimePickerMinSec = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const Box_1 = require("../Box");
const Flex_1 = require("../Flex");
const Input_1 = require("../Input");
const TimeUnity_1 = require("./TimeUnity");
const Picker = styled_components_1.default(Box_1.Box) ``;
exports.TimePickerMinSec = react_1.default.forwardRef((_a, ref) => {
    var { name, value, label, sufix, variant, maxWidth, getValue, errorForm, placeholder, errorMessage, onChange = (e) => {
        console.log('input:', e);
    } } = _a, props = __rest(_a, ["name", "value", "label", "sufix", "variant", "maxWidth", "getValue", "errorForm", "placeholder", "errorMessage", "onChange"]);
    const [showPicker, setShowPicker] = react_1.useState(false);
    const [inputValue, setInputValue] = react_1.useState(value || '');
    const applyMask = (value = '') => {
        return value
            .replace(/[\D]+/g, '')
            .replace(/(\d{2})(\d)/, '$1:$2')
            .replace(/(:\d{2})\d+?$/, '$1');
    };
    const handleInputOnChange = e => {
        const { value = '' } = (e === null || e === void 0 ? void 0 : e.target) || {};
        if (getValue)
            return '';
        const valueSplited = applyMask(value).split(':');
        if (valueSplited.length > 0 && valueSplited[0]) {
            const number = Number(valueSplited[0]);
            if (number > 59)
                valueSplited[0] = '59';
        }
        if (valueSplited.length > 1 && valueSplited[1]) {
            const number = Number(valueSplited[1]);
            if (number > 59)
                valueSplited[1] = '59';
        }
        const time = valueSplited.join(':');
        setInputValue(time);
        onChange(time);
    };
    const getTime = (time = '') => {
        const valueSplited = inputValue.split(':');
        if (time === 'min' && valueSplited.length > 0) {
            return parseInt(valueSplited[0] || 0);
        }
        if (time === 'sec' && valueSplited.length > 1) {
            return parseInt(valueSplited[1] || 0);
        }
        return 0;
    };
    const handleOnChangeTime = (time = '', value = '') => {
        const valueSplited = inputValue.split(':');
        const newValues = ['00', '00'];
        if (valueSplited.length > 0 && valueSplited[0]) {
            newValues[0] = valueSplited[0];
        }
        if (valueSplited.length > 1 && valueSplited[1]) {
            newValues[1] = valueSplited[1];
        }
        if (time === 'min')
            newValues[0] = value;
        if (time === 'sec')
            newValues[1] = value;
        const formattedValue = `${newValues[0]}:${newValues[1]}`;
        setInputValue(formattedValue);
        onChange(formattedValue);
    };
    const getInputValue = react_1.useCallback(() => {
        if (getValue)
            return getValue(inputValue);
        return inputValue;
    }, [inputValue, getValue]);
    return (react_1.default.createElement(Picker, Object.assign({ position: 'relative', maxWidth: maxWidth, "data-testid": 'timepicker', onMouseEnter: () => setShowPicker(true), onMouseLeave: () => setShowPicker(false) }, props),
        react_1.default.createElement(Input_1.Input, { name: name, label: label, sufix: sufix, inputRef: ref, variant: variant, errorForm: errorForm, value: getInputValue(), placeholder: placeholder, errorMessage: errorMessage, onChange: handleInputOnChange }),
        showPicker && (react_1.default.createElement(Box_1.Box, { top: '38px', zIndex: 1, width: '100%', padding: '8px 16px', borderRadius: '8px', position: 'absolute', maxWidth: maxWidth, backgroundColor: '#fff', border: '1px solid #dedede', "data-testid": 'timepicker-open', boxShadow: '0px 3px 6px #00000017' },
            react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', justifyContent: 'space-between' },
                react_1.default.createElement(TimeUnity_1.TimeUnity, { min: 0, max: 59, label: 'min', value: getTime('min'), onChange: value => handleOnChangeTime('min', value) }),
                react_1.default.createElement(TimeUnity_1.TimeUnity, { min: 0, max: 59, label: 'seg', value: getTime('sec'), onChange: value => handleOnChangeTime('sec', value) }))))));
});
exports.TimePickerMinSec.displayName = 'TimePickerMinSec';
exports.TimePickerMinSec.propTypes = {
    value: prop_types_1.default.any,
    sufix: prop_types_1.default.any,
    name: prop_types_1.default.string,
    label: prop_types_1.default.string,
    getValue: prop_types_1.default.func,
    onChange: prop_types_1.default.func,
    errorForm: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(['outlined', 'default']),
    maxWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
