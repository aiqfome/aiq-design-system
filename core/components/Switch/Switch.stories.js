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
exports.Variants = exports.DisabledChecked = exports.Checked = exports.BasicDisabled = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const Switch_1 = require("./Switch");
exports.default = {
    component: Switch_1.Switch,
    title: 'Switch',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const [checked, setChecked] = react_1.useState(false);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Switch_1.Switch, { checked: checked, onChange: e => {
                setChecked(e.target.checked);
            } })));
};
exports.BasicDisabled = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Switch_1.Switch, { disabled: true, onChange: e => {
            console.log(e);
        } })));
exports.Checked = () => {
    const [checked, setChecked] = react_1.useState(true);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Switch_1.Switch, { checked: checked, onChange: e => {
                setChecked(e.target.checked);
            } })));
};
exports.DisabledChecked = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Switch_1.Switch, { disabled: true, checked: true, onChange: e => {
            console.log(e);
        } })));
exports.Variants = () => {
    const [checked1, setChecked1] = react_1.useState(false);
    const [checked2, setChecked2] = react_1.useState(false);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Switch_1.Switch, { checked: checked1, onChange: e => {
                setChecked1(e.target.checked);
            }, variant: 'default' }),
        react_1.default.createElement(Switch_1.Switch, { checked: checked2, onChange: e => {
                setChecked2(e.target.checked);
            }, variant: 'small' })));
};
