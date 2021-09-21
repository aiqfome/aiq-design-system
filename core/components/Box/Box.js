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
exports.Box = exports.BoxStyled = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
exports.BoxStyled = styled_components_1.default.div `
  ${styled_system_1.flexbox}
  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
  ${styled_system_1.border}
  ${styled_system_1.position}
  ${styled_system_1.boxShadow}
`;
exports.Box = (_a) => {
    var { refBox } = _a, props = __rest(_a, ["refBox"]);
    return react_1.default.createElement(exports.BoxStyled, Object.assign({ "data-testid": 'box', ref: refBox }, props));
};
exports.Box.propTypes = {
    refBox: prop_types_1.default.any
};
