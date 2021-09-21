"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const theme_1 = __importDefault(require("./theme"));
const wrapper = ({ children }) => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default }, children)));
};
const customRender = (ui, options) => react_2.render(ui, Object.assign({ wrapper }, options));
exports.render = customRender;
