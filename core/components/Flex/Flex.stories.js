"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Row = exports.flexFullHeight = exports.fullCentralized = exports.centralized = exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("./Flex");
const Text_1 = require("../Text");
exports.default = {
    component: Flex_1.Flex,
    title: 'Flex',
    decorators: [addon_knobs_1.withKnobs]
};
exports.basic = () => (react_1.default.createElement(Flex_1.Flex, { justifyContent: addon_knobs_1.select('justifyContent', { FlexStart: 'flex-start', FlexEnd: 'flex-end', Center: 'center' }, 'flex-start'), alignItems: addon_knobs_1.select('alignItems', { FlexStart: 'flex-start', FlexEnd: 'flex-end', Center: 'center' }, 'flex-start'), backgroundColor: addon_knobs_1.text('backgroundColor', '#fff'), variant: addon_knobs_1.select('Variant', { Centralized: 'centralized', FullCentralized: 'fullCentralized' }, 'centralized') },
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
exports.centralized = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'centralized' },
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
exports.fullCentralized = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
exports.flexFullHeight = () => (react_1.default.createElement(Flex_1.Flex, { fullHeight: true },
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
exports.Row = () => (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row' },
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
exports.Column = () => (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!"),
    react_1.default.createElement(Text_1.Text, null, "Flex!")));
