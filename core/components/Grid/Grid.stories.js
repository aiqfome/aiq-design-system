"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateColumns = exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const Grid_1 = require("./Grid");
const Text_1 = require("../Text");
exports.default = {
    component: Grid_1.Grid,
    title: 'Grid'
};
exports.basic = () => (react_1.default.createElement(Grid_1.Grid, { color: 'primary' },
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System")));
exports.templateColumns = () => (react_1.default.createElement(Grid_1.Grid, { color: 'primary', gridTemplateColumns: '1fr 2fr' },
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System"),
    react_1.default.createElement(Text_1.Text, null, "Design System")));
