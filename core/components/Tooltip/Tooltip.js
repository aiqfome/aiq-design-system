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
exports.Tooltip = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const rc_tooltip_1 = __importDefault(require("rc-tooltip"));
const rc_dropdown_1 = __importDefault(require("rc-dropdown"));
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../Flex");
const PopoverStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
  margin: 0;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 12px;
  outline: none;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
`;
const TooltipStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
  margin: 0;
  text-align: left;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
`;
exports.Tooltip = (_a) => {
    var { body, children, type = 'default', variant = 'bottomLeft' } = _a, props = __rest(_a, ["body", "children", "type", "variant"]);
    const child = react_1.default.Children.only(react_1.default.createElement("div", { "data-testid": 'tooltip-child' }, children));
    const getOverlayBalloon = () => (react_1.default.createElement(TooltipStyled, Object.assign({ flexDirection: 'column' }, props), body));
    const getOverlay = () => (react_1.default.createElement(PopoverStyled, Object.assign({ flexDirection: 'column', "data-testid": 'tooltip-content' }, props), body));
    const getTooltipVariant = () => {
        if (variant === 'bottomCenter')
            return 'bottom';
        if (variant === 'topCenter')
            return 'top';
        return variant;
    };
    if (type === 'default') {
        return (react_1.default.createElement(rc_dropdown_1.default, Object.assign({ arrow: false, trigger: ['hover'], placement: variant, overlay: getOverlay, overlayClassName: 'popover' }, props), child));
    }
    return (react_1.default.createElement(rc_tooltip_1.default, Object.assign({ arrowContent: true, trigger: ['hover'], overlayClassName: 'tooltip', overlay: getOverlayBalloon, placement: getTooltipVariant() }, props), child));
};
exports.Tooltip.propTypes = {
    body: prop_types_1.default.any,
    children: prop_types_1.default.node.isRequired,
    type: prop_types_1.default.oneOf(['default', 'balloon']),
    variant: prop_types_1.default.oneOf([
        'topRight',
        'topLeft',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
    ])
};
