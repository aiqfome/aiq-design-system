"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const react_router_dom_1 = require("react-router-dom");
const Sidebar_1 = require("./Sidebar");
const addon_knobs_1 = require("@storybook/addon-knobs");
const Flex_1 = require("../Flex");
exports.default = {
    component: Sidebar_1.Sidebar,
    title: 'Sidebar',
    decorators: [addon_knobs_1.withKnobs]
};
const sidebarData = [
    {
        icon: react_1.default.createElement(md_1.MdHome, { size: 18 }),
        name: 'dashboard',
        href: '/dashboard',
        badge: 1
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        icon: react_1.default.createElement(md_1.MdStorage, { size: 18 }),
        name: 'store',
        itens: [
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem',
                badge: 18
            }
        ]
    },
    {
        icon: react_1.default.createElement(md_1.MdStorage, { size: 18 }),
        name: 'itens',
        itens: [
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item',
                href: '/subItem'
            },
            {
                name: 'Sub Item END',
                href: '/subItem'
            }
        ]
    },
    {
        icon: react_1.default.createElement(md_1.MdBookmark, { size: 18 }),
        name: 'aiqfome',
        href: 'https://aiqfome.com/',
        type: 'external'
    },
    {
        icon: react_1.default.createElement(md_1.MdExitToApp, { size: 18 }),
        name: 'sair',
        callback: () => {
            console.log('logout');
        }
    }
];
const Header = () => {
    return (react_1.default.createElement(Flex_1.Flex, { style: {
            overflowX: 'hidden'
        }, py: '8px', alignItems: 'center' }));
};
exports.Basic = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Flex_1.Flex, { backgroundColor: '#E1E1E1', justifyContent: 'row' },
            react_1.default.createElement(Sidebar_1.Sidebar, { header: react_1.default.createElement(Header, null), opened: addon_knobs_1.boolean('opened', true), data: sidebarData }),
            react_1.default.createElement("h1", null, "test"))));
};
