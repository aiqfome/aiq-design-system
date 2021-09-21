"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Internal = exports.External = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Link_1 = require("./Link");
exports.default = {
    component: Link_1.Link,
    title: 'Link'
};
exports.Basic = () => (react_1.default.createElement(Link_1.Link, { color: 'primary', href: 'https://aiqfome.com/' }, "Aiqfome"));
exports.External = () => (react_1.default.createElement(Link_1.Link, { color: 'primary', variant: 'external', href: 'https://aiqfome.com/' }, "Aiqfome"));
exports.Internal = () => (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(Link_1.Link, { color: 'primary', variant: 'internal', href: '/food' }, "Aiqfome")));
