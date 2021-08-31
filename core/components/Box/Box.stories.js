"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const Box_1 = require("./Box");
exports.default = {
    component: Box_1.Box,
    title: 'Box'
};
exports.basic = () => (react_1.default.createElement(Box_1.Box, { marginBottom: 10, color: 'blue' }, "Design System"));
