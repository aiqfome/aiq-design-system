"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const InputMoney_1 = require("./InputMoney");
exports.default = {
    component: InputMoney_1.InputMoney,
    title: 'InputMoney',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const [input, setInput] = react_1.useState(0);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(InputMoney_1.InputMoney, { value: input, errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito'), onChange: (_event, value) => {
                setInput(value);
            } })));
};
