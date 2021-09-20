"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const InputMoney_1 = require("./InputMoney");
exports.default = {
    component: InputMoney_1.InputMoney,
    title: 'InputMoney',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(InputMoney_1.InputMoney, { errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito') })));
