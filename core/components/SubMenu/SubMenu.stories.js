"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Text_1 = require("../Text");
const SubMenu_1 = require("./SubMenu");
const addon_knobs_1 = require("@storybook/addon-knobs");
exports.default = {
    title: 'SubMenu',
    component: SubMenu_1.SubMenu,
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    return (react_1.default.createElement(SubMenu_1.SubMenu, { content: 'item' },
        react_1.default.createElement(Text_1.Text, { color: 'primary' }, "submenu")));
};
