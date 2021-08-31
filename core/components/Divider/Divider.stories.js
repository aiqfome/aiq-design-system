"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Height = exports.withChildren = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Divider_1 = require("./Divider");
exports.default = {
    component: Divider_1.Divider,
    title: 'Divider',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { width: addon_knobs_1.text('width', '100%') },
    react_1.default.createElement(Divider_1.Divider, { width: addon_knobs_1.text('width', '100%') })));
exports.withChildren = () => (react_1.default.createElement(Divider_1.Divider, { width: addon_knobs_1.text('width', '100%'), color: addon_knobs_1.color('color', 'primary') },
    react_1.default.createElement(Text_1.Text, { paddingRight: 10, paddingLeft: 10 }, "Aiqfome!")));
exports.Height = () => (react_1.default.createElement(Divider_1.Divider, { margin: 10, height: addon_knobs_1.number('height', 5), color: addon_knobs_1.color('color', 'secondary') }));
