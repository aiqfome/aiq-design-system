"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixed = exports.warning = exports.error = exports.success = exports.info = exports.basic = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
const Button_1 = require("../Button");
exports.default = {
    component: index_1.ToastProvider,
    title: 'Toast',
    decorators: [addon_knobs_1.withKnobs]
};
exports.basic = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                title: addon_knobs_1.text('title', 'Hi ✌️'),
                description: addon_knobs_1.text('description', 'I am a toast'),
                type: addon_knobs_1.select('type', { Info: 'info', Success: 'success', Error: 'error' }, 'text')
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
exports.info = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                type: 'info',
                title: 'Hi ✌️',
                description: 'I am an info toast'
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
exports.success = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                type: 'success',
                title: 'Hi ✌️',
                description: 'I am a success toast'
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
exports.error = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                type: 'error',
                title: 'Hi ✌️',
                description: 'I am an error toast'
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
exports.warning = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                type: 'warning',
                title: 'Hi ✌️',
                description: 'I am a warning toast'
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
exports.fixed = () => {
    const ContentToast = () => {
        const { addToast } = index_1.useToast();
        function showToast() {
            addToast({
                title: 'Hi ✌️',
                description: 'I am a fixed toast',
                fixed: true
            });
        }
        return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
            react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', onClick: showToast }, "Show Toast")));
    };
    return (react_1.default.createElement(index_1.ToastProvider, null,
        react_1.default.createElement(ContentToast, null)));
};
