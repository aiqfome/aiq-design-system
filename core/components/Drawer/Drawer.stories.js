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
exports.right = exports.left = exports.WithLoading = exports.WithMask = exports.basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Text_1 = require("../Text");
const Drawer_1 = require("./Drawer");
const Button_1 = require("../Button");
exports.default = {
    component: Drawer_1.Drawer,
    title: 'Drawer',
    decorators: [addon_knobs_1.withKnobs]
};
exports.basic = () => (react_1.default.createElement(Drawer_1.Drawer, { opened: addon_knobs_1.boolean('opened', true), variation: addon_knobs_1.select('variation', { Right: 'right', Left: 'left' }, 'right') },
    react_1.default.createElement(Text_1.Text, null, addon_knobs_1.text('text', 'Design System'))));
exports.WithMask = () => {
    const [opened, setOpened] = react_1.useState(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.Button, { onClick: () => setOpened(true) }, "clique aqui para abrir"),
        react_1.default.createElement(Drawer_1.Drawer, { opened: opened, onClose: () => setOpened(false) },
            react_1.default.createElement(Text_1.Text, null, "Design System"))));
};
exports.WithLoading = () => {
    const [opened, setOpened] = react_1.useState(false);
    const [loading, setLoading] = react_1.useState(true);
    const openDrawer = () => {
        setOpened(true);
        setTimeout(() => setLoading(false), 2000);
    };
    const closeDrawer = () => {
        setOpened(false);
        setLoading(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.Button, { onClick: openDrawer }, "clique aqui para abrir"),
        react_1.default.createElement(Drawer_1.Drawer, { width: '50%', opened: opened, loading: loading, onClose: closeDrawer },
            react_1.default.createElement(Text_1.Text, null, "Design System"))));
};
exports.left = () => (react_1.default.createElement(Drawer_1.Drawer, { opened: true, variation: 'left' },
    react_1.default.createElement(Text_1.Text, null, "Design System")));
exports.right = () => (react_1.default.createElement(Drawer_1.Drawer, { opened: true, variation: 'right' },
    react_1.default.createElement(Text_1.Text, null, "Design System")));
