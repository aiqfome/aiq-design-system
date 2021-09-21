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
exports.Divider = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_system_1 = require("styled-system");
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../Flex");
const LineStyled = styled_components_1.default.hr `
  ${styled_system_1.layout}
  ${styled_system_1.space}
  ${styled_system_1.color}
  border: none;
`;
exports.Divider = (_a) => {
    var { children, height = '1px', color = 'mediumGrey' } = _a, props = __rest(_a, ["children", "height", "color"]);
    if (children) {
        return (react_1.default.createElement(Flex_1.Flex, { "data-testid": 'divider-wrapper', width: '100%', alignItems: 'center', justifyContent: 'center' },
            react_1.default.createElement(LineStyled, Object.assign({ height: height, backgroundColor: color }, props)),
            children,
            react_1.default.createElement(LineStyled, Object.assign({ height: height, backgroundColor: color }, props))));
    }
    return react_1.default.createElement(LineStyled, Object.assign({ height: height, backgroundColor: color }, props));
};
exports.Divider.propTypes = {
    children: prop_types_1.default.any,
    color: prop_types_1.default.string,
    height: prop_types_1.default.any
};
