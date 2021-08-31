"use strict";
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
exports.DatePicker = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const DatePickerRange_1 = require("./DatePickerRange");
const DatePickerSingle_1 = require("./DatePickerSingle");
exports.DatePicker = (_a) => {
    var { value, onChange, errorForm, placeholder, errorMessage, variant = 'single' } = _a, props = __rest(_a, ["value", "onChange", "errorForm", "placeholder", "errorMessage", "variant"]);
    if (variant === 'range') {
        return (react_1.default.createElement(DatePickerRange_1.DatePickerRange, Object.assign({ value: value, onChange: onChange, errorForm: errorForm, placeholder: placeholder, errorMessage: errorMessage }, props)));
    }
    return (react_1.default.createElement(DatePickerSingle_1.DatePickerSingle, Object.assign({ value: value, onChange: onChange, errorForm: errorForm, placeholder: placeholder, errorMessage: errorMessage }, props)));
};
exports.DatePicker.propTypes = {
    variant: prop_types_1.default.oneOf(['single', 'range']),
    value: prop_types_1.default.array,
    onChange: prop_types_1.default.func.isRequired,
    name: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string
};
