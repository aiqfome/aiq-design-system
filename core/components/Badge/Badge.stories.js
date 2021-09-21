"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.BasicWithOverflow = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Badge_1 = require("./Badge");
const Flex_1 = require("../Flex");
exports.default = {
    component: Badge_1.Badge,
    title: 'Badge'
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { flex: 1, flexDirection: 'row' },
    react_1.default.createElement(Badge_1.Badge, { count: 10 }),
    react_1.default.createElement(Badge_1.Badge, { count: 1000, backgroundColor: 'primary' }),
    react_1.default.createElement(Badge_1.Badge, null, "ol\u00E1"),
    react_1.default.createElement(Badge_1.Badge, { count: 1000 }, "ol\u00E1")));
exports.BasicWithOverflow = () => (react_1.default.createElement(Badge_1.Badge, { count: 1000, overflowCount: 99 }));
exports.Label = () => (react_1.default.createElement(Flex_1.Flex, { flex: 1, flexDirection: 'column' },
    react_1.default.createElement(Badge_1.Badge, { variant: 'label' }, "burguerzin"),
    react_1.default.createElement(Badge_1.Badge, { variant: 'label', backgroundColor: 'primary' }, "pizza"),
    react_1.default.createElement(Badge_1.Badge, { variant: 'label', backgroundColor: 'info' }, "coquinha gelada")));
