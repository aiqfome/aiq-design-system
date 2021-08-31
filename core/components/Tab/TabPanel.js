"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPanel = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../Flex");
const TabPanelStyled = styled_components_1.default(Flex_1.Flex) `
  display: block;
`;
exports.TabPanel = (_a) => {
    var { children, value, index } = _a, props = __rest(_a, ["children", "value", "index"]);
    return value === index ? (react_1.default.createElement(TabPanelStyled, Object.assign({}, props), children)) : null;
};
exports.TabPanel.propTypes = {
    value: prop_types_1.default.number.isRequired,
    index: prop_types_1.default.number.isRequired,
    children: prop_types_1.default.any
};
