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
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_input_mask_1 = __importDefault(require("react-input-mask"));
const InputOutlined_1 = require("./InputOutlined");
const InputNeutral_1 = require("./InputNeutral");
const InputTags_1 = require("./InputTags");
exports.Input = (_a) => {
    var { name, inputRef, label, errorForm, type = 'text', errorMessage, sufix, prefix, value, variant, placeholder, mask, onChange, disabled, nativeAutoComplete = 'on' } = _a, props = __rest(_a, ["name", "inputRef", "label", "errorForm", "type", "errorMessage", "sufix", "prefix", "value", "variant", "placeholder", "mask", "onChange", "disabled", "nativeAutoComplete"]);
    if (variant === 'outlined') {
        if (mask) {
            return (react_1.default.createElement(react_input_mask_1.default, { mask: mask, value: value, onChange: onChange, disabled: disabled }, inputProps => (react_1.default.createElement(InputOutlined_1.InputOutlined, Object.assign({ name: name, inputRef: inputRef, label: label, errorForm: errorForm, type: type, errorMessage: errorMessage, sufix: sufix, "data-testid": 'input-container', placeholder: placeholder, disabled: disabled, nativeAutoComplete: nativeAutoComplete }, props, inputProps)))));
        }
        return (react_1.default.createElement(InputOutlined_1.InputOutlined, Object.assign({ name: name, inputRef: inputRef, label: label, errorForm: errorForm, type: type, errorMessage: errorMessage, sufix: sufix, value: value, "data-testid": 'input-container', placeholder: placeholder, onChange: onChange, disabled: disabled, nativeAutoComplete: nativeAutoComplete }, props)));
    }
    if (variant === 'tags') {
        return (react_1.default.createElement(InputTags_1.InputTags, Object.assign({ name: name, errorForm: errorForm, type: type, errorMessage: errorMessage, value: value, placeholder: placeholder, onChange: onChange, "data-testid": 'input-container', nativeAutoComplete: nativeAutoComplete }, props)));
    }
    if (mask) {
        return (react_1.default.createElement(react_input_mask_1.default, { mask: mask, value: value, onChange: onChange, disabled: disabled }, inputProps => (react_1.default.createElement(InputNeutral_1.InputNeutral, Object.assign({ name: name, inputRef: inputRef, errorForm: errorForm, type: type, errorMessage: errorMessage, sufix: sufix, prefix: prefix, placeholder: placeholder, "data-testid": 'input-container', nativeAutoComplete: nativeAutoComplete }, inputProps, props)))));
    }
    return (react_1.default.createElement(InputNeutral_1.InputNeutral, Object.assign({ name: name, inputRef: inputRef, errorForm: errorForm, type: type, errorMessage: errorMessage, sufix: sufix, prefix: prefix, value: value, placeholder: placeholder, onChange: onChange, "data-testid": 'input-container', disabled: disabled, nativeAutoComplete: nativeAutoComplete }, props)));
};
exports.Input.propTypes = {
    name: prop_types_1.default.string,
    inputRef: prop_types_1.default.any,
    label: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    type: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    sufix: prop_types_1.default.any,
    prefix: prop_types_1.default.any,
    value: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(['outlined', 'default', 'tags']),
    placeholder: prop_types_1.default.string,
    containerProps: prop_types_1.default.object,
    boxProps: prop_types_1.default.object,
    backgroundColor: prop_types_1.default.any,
    border: prop_types_1.default.any,
    width: prop_types_1.default.any,
    maxWidth: prop_types_1.default.any,
    mask: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    disabled: prop_types_1.default.bool,
    nativeAutoComplete: prop_types_1.default.oneOf(['on', 'disabled'])
};
