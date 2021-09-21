"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truncated = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Text_1 = require("./Text");
const Flex_1 = require("../Flex");
exports.default = {
    component: Text_1.Text,
    title: 'Text',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Text_1.Text, { color: addon_knobs_1.text('color', 'primary'), fontSize: addon_knobs_1.number('fontSize', 22), width: addon_knobs_1.text('width', '100%'), cursor: addon_knobs_1.text('cursor', ''), fontWeight: addon_knobs_1.text('fontWeight', 'semiBold'), truncate: addon_knobs_1.boolean('truncate', false), textAlign: 'center' }, addon_knobs_1.text('text', 'o design system do app mais fominha da internê!'))));
exports.Truncated = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Text_1.Text, { color: 'primary', fontWeight: '700', width: '180px', whiteSpace: 'nowrap', truncate: true }, "o texto truncado fica assim!")));
