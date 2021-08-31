"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithHeader = exports.WithTitle = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const Avatar_1 = require("../Avatar");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
const Actions_1 = require("./Actions");
exports.default = {
    component: Actions_1.Actions,
    title: 'Actions'
};
const items = [
    {
        description: 'menu 1',
        action: () => console.log('menu 1'),
        icon: react_1.default.createElement(md_1.MdSubdirectoryArrowRight, { size: 15 })
    },
    {
        description: 'menu 2',
        icon: react_1.default.createElement(md_1.MdCall, { size: 15 }),
        action: () => console.log('menu 2')
    }
];
exports.Basic = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Actions_1.Actions, { items: items },
            react_1.default.createElement(Icon_1.Icon, { color: 'primary', fontSize: 'xlarge' },
                react_1.default.createElement(md_1.MdSettings, null)))));
};
exports.WithTitle = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Actions_1.Actions, { title: 'MENU:', items: items },
            react_1.default.createElement(Icon_1.Icon, { color: 'primary', fontSize: 'xlarge' },
                react_1.default.createElement(md_1.MdSettings, null)))));
};
exports.WithHeader = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Actions_1.Actions, { title: 'MENU:', items: items, header: react_1.default.createElement(Flex_1.Flex, { alignItems: 'center' },
                react_1.default.createElement(Avatar_1.Avatar, { palette: 'primary', alt: 'Avatar', variant: 'rounded', mr: '5px' }),
                "eu sou um header") },
            react_1.default.createElement(Icon_1.Icon, { color: 'primary', fontSize: 'xlarge' },
                react_1.default.createElement(md_1.MdSettings, null)))));
};
