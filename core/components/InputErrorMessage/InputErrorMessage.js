"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputErrorMessage = void 0;
const react_1 = __importDefault(require("react"));
const Text_1 = require("../Text");
exports.InputErrorMessage = ({ errorMessage }) => {
    return (react_1.default.createElement(Text_1.Text, { "data-testid": 'input-error', color: 'grey', fontSize: 'small', mt: 2 }, errorMessage));
};
