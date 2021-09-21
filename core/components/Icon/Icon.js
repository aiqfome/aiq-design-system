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
exports.Icon = exports.IconStyled = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const Flex_1 = require("../Flex");
exports.IconStyled = styled_components_1.default(Flex_1.Flex) `
  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.layout}

  cursor: ${props => props.cursor};
`;
exports.Icon = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return react_1.default.createElement(exports.IconStyled, Object.assign({}, props), children);
};
exports.Icon.propTypes = {
    color: prop_types_1.default.string,
    cursor: prop_types_1.default.string,
    children: prop_types_1.default.any
};
exports.Icon.defaultProps = {
    alignItems: 'center'
};
