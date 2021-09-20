"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const InputNumber_1 = require("./InputNumber");
exports.default = {
    component: InputNumber_1.InputNumber,
    title: 'InputNumber',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(InputNumber_1.InputNumber, { errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito') })));
