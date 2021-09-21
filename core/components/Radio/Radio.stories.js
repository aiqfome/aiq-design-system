"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sizes = exports.Label = exports.CheckedDisabled = exports.Checked = exports.Disabled = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Radio_1 = require("./Radio");
const Flex_1 = require("../Flex");
exports.default = {
    component: Radio_1.Radio,
    title: 'Radio',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { disabled: addon_knobs_1.boolean('disabled', false), checked: addon_knobs_1.boolean('checked', true), mx: 10, name: 'radioBasic', value: '01' }),
    react_1.default.createElement(Radio_1.Radio, { name: 'radioBasic', value: '02' })));
exports.Disabled = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { mx: 10, disabled: true, name: 'radioDisabled', value: '01' })));
exports.Checked = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { mx: 10, checked: true, name: 'radioChecked', value: '01' })));
exports.CheckedDisabled = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { mx: 10, disabled: true, checked: true, name: 'radioCheckedDisabled', value: '01' })));
exports.Label = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { mx: 10, checked: true, label: 'aiq', name: 'radio', value: 'aiq' }),
    react_1.default.createElement(Radio_1.Radio, { mx: 10, checked: false, label: 'fome', name: 'radio', value: 'fome' })));
exports.Sizes = () => (react_1.default.createElement(Flex_1.Flex, null,
    react_1.default.createElement(Radio_1.Radio, { mx: 10, variant: 'default', label: 'default', checked: true, name: 'radio1', value: 'default' }),
    react_1.default.createElement(Radio_1.Radio, { mx: 10, checked: true, variant: 'small', label: 'small', name: 'radio2', value: 'small' })));
