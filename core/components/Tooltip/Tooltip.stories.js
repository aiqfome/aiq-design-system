"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = exports.Types = exports.Variants = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Tooltip_1 = require("./Tooltip");
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
exports.default = {
    component: Tooltip_1.Tooltip,
    title: 'Tooltip'
};
exports.Basic = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Tooltip_1.Tooltip, { body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { cursor: 'pointer' }, "Hamburguer"))));
};
exports.Variants = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'topRight', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Right-Top")),
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'topCenter', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Center-Top")),
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'topLeft', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Left-Top")),
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'bottomRight', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Right-Bottom")),
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'bottomCenter', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Center-Bottom")),
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'bottomLeft', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Left-Bottom"))));
};
exports.Types = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Tooltip_1.Tooltip, { type: 'default', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Default")),
        react_1.default.createElement(Tooltip_1.Tooltip, { type: 'balloon', variant: 'bottomCenter', body: "I'm hungry" },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Balloon"))));
};
exports.Body = () => {
    const Menu = () => {
        return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
            react_1.default.createElement(Text_1.Text, null, "1 Item"),
            react_1.default.createElement(Text_1.Text, null, "2 Item"),
            react_1.default.createElement(Text_1.Text, null, "3 Item"),
            react_1.default.createElement(Text_1.Text, null, "4 Item")));
    };
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Tooltip_1.Tooltip, { variant: 'bottomRight', body: react_1.default.createElement(Menu, null) },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "Body"))));
};
