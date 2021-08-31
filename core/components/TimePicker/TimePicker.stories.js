"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeMinSec = exports.HasSeconds = exports.Outlined = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const TimePicker_1 = require("./TimePicker");
const Flex_1 = require("../Flex");
exports.default = {
    component: TimePicker_1.TimePicker,
    title: 'TimePicker'
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(TimePicker_1.TimePicker, { onChange: value => console.log(value), placeholder: 'aiqfome', maxWidth: '100px', value: '12:30' })));
exports.Outlined = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(TimePicker_1.TimePicker, { variant: 'outlined', label: 'aiqfome', maxWidth: '120px' })));
exports.HasSeconds = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(TimePicker_1.TimePicker, { hasSeconds: true, label: 'aiqfome', variant: 'outlined' })));
exports.TypeMinSec = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', flexDirection: 'column' },
    react_1.default.createElement(TimePicker_1.TimePicker, { type: 'minSec', label: 'aiqfome', variant: 'outlined' }),
    react_1.default.createElement(TimePicker_1.TimePicker, { type: 'minSec', label: 'valor formatado', variant: 'outlined', getValue: input => {
            const values = input.split(':');
            if (values.length < 2)
                return '';
            return `${values[0]}m ${values[1]}s`;
        } })));
