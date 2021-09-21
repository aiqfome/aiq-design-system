"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const LoaderBox_1 = require("./LoaderBox");
exports.default = {
    component: LoaderBox_1.LoaderBox,
    title: 'LoaderBox'
};
exports.basic = () => react_1.default.createElement(LoaderBox_1.LoaderBox, null);
