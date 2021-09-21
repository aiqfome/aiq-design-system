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
exports.TimePicker = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const TimePickerAll_1 = require("./TimePickerAll");
const TimePickerMinSec_1 = require("./TimePickerMinSec");
exports.TimePicker = (_a) => {
    var { type = 'all' } = _a, props = __rest(_a, ["type"]);
    if (type === 'minSec') {
        return react_1.default.createElement(TimePickerMinSec_1.TimePickerMinSec, Object.assign({}, props));
    }
    return react_1.default.createElement(TimePickerAll_1.TimePickerAll, Object.assign({}, props));
};
exports.TimePicker.displayName = 'TimePicker';
exports.TimePicker.propTypes = {
    sufix: prop_types_1.default.any,
    name: prop_types_1.default.string,
    label: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    getValue: prop_types_1.default.func,
    errorForm: prop_types_1.default.bool,
    hasSeconds: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    type: prop_types_1.default.oneOf(['minSec', 'all']),
    variant: prop_types_1.default.oneOf(['outlined', 'default']),
    maxWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
