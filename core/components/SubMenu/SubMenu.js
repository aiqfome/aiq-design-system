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
exports.SubMenu = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const rc_menu_1 = __importDefault(require("rc-menu"));
const Flex_1 = require("../Flex");
const styled_components_1 = __importDefault(require("styled-components"));
const ItemStyled = styled_components_1.default(rc_menu_1.default.Item) `
  border-radius: 8px;
  padding: 13px !important;
  border: 1px solid #dedede;
  box-shadow: 0px 1px 6px #0000001a;
`;
let clicked = false;
exports.SubMenu = (_a) => {
    var { content, children, menuProps = {}, popoverProps = {} } = _a, props = __rest(_a, ["content", "children", "menuProps", "popoverProps"]);
    const [keys, setKeys] = react_1.useState(['submenu']);
    const onOpenChange = keys => {
        if (!clicked)
            setKeys(keys);
        else
            clicked = false;
    };
    const onClick = () => (clicked = true);
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({}, props),
        react_1.default.createElement(rc_menu_1.default, Object.assign({ onOpenChange: onOpenChange }, menuProps),
            react_1.default.createElement(rc_menu_1.default.SubMenu, { key: 'menu', title: children, onClick: onClick, expandIcon: react_1.default.createElement(Flex_1.Flex, null) }, keys.includes('menu') && (react_1.default.createElement(ItemStyled, Object.assign({ key: 'submenu' }, popoverProps), content))))));
};
exports.SubMenu.propTypes = {
    content: prop_types_1.default.node,
    children: prop_types_1.default.node,
    menuProps: prop_types_1.default.object,
    popoverProps: prop_types_1.default.object
};
