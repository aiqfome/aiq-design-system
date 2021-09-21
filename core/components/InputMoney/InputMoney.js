"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputMoney = void 0;
const react_1 = __importDefault(require("react"));
const InputNumber_1 = require("../InputNumber");
exports.InputMoney = props => {
    const numericOptions = {
        decimalPlaces: 2,
        allowDecimalPadding: true,
        currencySymbol: 'R$ '
    };
    return react_1.default.createElement(InputNumber_1.InputNumber, Object.assign({}, numericOptions, props));
};
