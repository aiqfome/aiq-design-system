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
exports.DisabledChecked = exports.Disabled = exports.Checked = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const Checkbox_1 = require("./Checkbox");
exports.default = {
    component: Checkbox_1.Checkbox,
    title: 'Checkbox',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const [checked, setChecked] = react_1.useState(false);
    function handleOnChangeChange(event) {
        setChecked(event.target.checked);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Checkbox_1.Checkbox, { onChange: handleOnChangeChange, checked: checked, disabled: addon_knobs_1.boolean('disabled', false), label: addon_knobs_1.text('text', 'Aiqfome'), labelColor: 'primary' })));
};
exports.Checked = () => {
    const [checked, setChecked] = react_1.useState(true);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Checkbox_1.Checkbox, { onChange: event => setChecked(event.target.checked), checked: checked, label: addon_knobs_1.text('text', 'Aiqfome') })));
};
exports.Disabled = () => {
    const [checked, setChecked] = react_1.useState(false);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Checkbox_1.Checkbox, { onChange: event => setChecked(event.target.checked), disabled: true, checked: checked, label: addon_knobs_1.text('text', 'Aiqfome') })));
};
exports.DisabledChecked = () => {
    const [checked, setChecked] = react_1.useState(true);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Checkbox_1.Checkbox, { onChange: event => setChecked(event.target.checked), disabled: true, checked: checked, label: addon_knobs_1.text('text', 'Aiqfome') })));
};
