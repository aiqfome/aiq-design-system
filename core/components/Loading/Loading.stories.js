"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const Loading_1 = require("./Loading");
const Flex_1 = require("../Flex");
exports.default = {
    component: Loading_1.Loading,
    title: 'Loading'
};
exports.basic = () => (react_1.default.createElement(Flex_1.Flex, { justifyContent: 'center', alignItems: 'center', height: '100vh' },
    react_1.default.createElement(Loading_1.Loading, null)));
