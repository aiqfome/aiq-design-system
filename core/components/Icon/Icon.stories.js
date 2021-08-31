"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursor = exports.fullCentralized = exports.centralized = exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const addon_knobs_1 = require("@storybook/addon-knobs");
const Icon_1 = require("./Icon");
exports.default = {
    component: Icon_1.Icon,
    title: 'Icon',
    decorators: [addon_knobs_1.withKnobs]
};
exports.basic = () => (react_1.default.createElement(Icon_1.Icon, { cursor: addon_knobs_1.text('Cursor', '') },
    react_1.default.createElement(md_1.MdHome, null)));
exports.centralized = () => (react_1.default.createElement(Icon_1.Icon, { variant: 'centralized' },
    react_1.default.createElement(md_1.MdHome, null)));
exports.fullCentralized = () => (react_1.default.createElement(Icon_1.Icon, { variant: 'fullCentralized' },
    react_1.default.createElement(md_1.MdHome, null)));
exports.cursor = () => (react_1.default.createElement(Icon_1.Icon, { cursor: 'pointer' },
    react_1.default.createElement(md_1.MdHome, null)));
