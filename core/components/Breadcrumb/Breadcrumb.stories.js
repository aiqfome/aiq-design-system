"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIcons = exports.Overlay = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const Breadcrumb_1 = require("./Breadcrumb");
const Link_1 = require("../Link");
const Flex_1 = require("../Flex");
const Text_1 = require("../Text");
exports.default = {
    component: Breadcrumb_1.Breadcrumb,
    title: 'Breadcrumb'
};
exports.Basic = () => (react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: [
        {
            name: 'início',
            icon: react_1.default.createElement(md_1.MdHome, null)
        },
        {
            path: '#',
            name: 'relatório'
        },
        {
            path: '#',
            name: 'pedidos'
        }
    ] }));
exports.Overlay = () => {
    const menu = (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Link_1.Link, { padding: '4px', href: '#' }, "Item 1"),
        react_1.default.createElement(Link_1.Link, { padding: '4px', href: '#' }, "Item 2")));
    return (react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: [
            {
                name: 'início',
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                path: '#',
                overlay: menu,
                name: 'relatório'
            },
            {
                path: '#',
                name: 'pedidos'
            }
        ] }));
};
exports.WithIcons = () => {
    return (react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: [
            {
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                icon: react_1.default.createElement(md_1.MdWork, null),
                name: 'áreas'
            },
            {
                path: '#',
                name: 'pedidos'
            },
            {
                name: react_1.default.createElement(Text_1.Text, null, "Teste")
            }
        ] }));
};
