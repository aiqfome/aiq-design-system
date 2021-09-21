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
exports.Popover = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const rc_dropdown_1 = __importDefault(require("rc-dropdown"));
const styled_components_1 = __importStar(require("styled-components"));
const Flex_1 = require("../Flex");
const GlobalStyle = styled_components_1.createGlobalStyle `
  .popover .rc-dropdown-arrow {
    border-color: ${({ notificationBackgroundColor, placement, theme }) => placement === 'topLeft' ||
    placement === 'topRight' ||
    placement === 'topCenter'
    ? `transparent ${theme.colors[notificationBackgroundColor || 'white']}${theme.colors[notificationBackgroundColor || 'white']} transparent !important`
    : `${theme.colors[notificationBackgroundColor || 'white']} transparent transparent ${theme.colors[notificationBackgroundColor || 'white']} !important`};
  }
`;
const PopoverStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
  margin: 0;
  text-align: left;
  background-clip: padding-box;
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;

  & > * {
    padding: 10px;
  }
`;
exports.Popover = (_a) => {
    var { content, children, arrow = false, keepOpen = true, onVisibleChange, trigger = 'hover', isVisible = false, placement = 'bottomCenter', notificationBackgroundColor = '#fff', notificationTextColor = '#000' } = _a, props = __rest(_a, ["content", "children", "arrow", "keepOpen", "onVisibleChange", "trigger", "isVisible", "placement", "notificationBackgroundColor", "notificationTextColor"]);
    const [visible, setVisible] = react_1.useState(isVisible);
    react_1.useEffect(() => setVisible(isVisible), [isVisible]);
    const child = react_1.default.Children.only(children);
    const onChangeVisibility = value => {
        if (onVisibleChange)
            onVisibleChange(value);
        setVisible(value);
    };
    const getOverlay = () => {
        let overlayNode;
        if (typeof content === 'function') {
            overlayNode = content();
        }
        else {
            overlayNode = content;
        }
        overlayNode = react_1.default.Children.only(typeof overlayNode === 'string' ? react_1.default.createElement("span", null, overlayNode) : overlayNode);
        return (react_1.default.createElement(PopoverStyled, Object.assign({ "data-testid": 'popover-content', backgroundColor: notificationBackgroundColor, color: notificationTextColor }, props), overlayNode));
    };
    if (keepOpen) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalStyle, { notificationBackgroundColor: notificationBackgroundColor, notificationTextColor: notificationTextColor, placement: placement }),
            react_1.default.createElement(rc_dropdown_1.default, { arrow: arrow, visible: visible, trigger: [trigger], overlay: getOverlay, placement: placement, overlayClassName: 'popover', onVisibleChange: onChangeVisibility }, child)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyle, { notificationBackgroundColor: notificationBackgroundColor, notificationTextColor: notificationTextColor, placement: placement }),
        react_1.default.createElement(rc_dropdown_1.default, { arrow: arrow, trigger: [trigger], overlay: getOverlay, placement: placement, overlayClassName: 'popover' }, child)));
};
exports.Popover.propTypes = {
    arrow: prop_types_1.default.bool,
    content: prop_types_1.default.any,
    keepOpen: prop_types_1.default.bool,
    isVisible: prop_types_1.default.bool,
    children: prop_types_1.default.node.isRequired,
    trigger: prop_types_1.default.oneOf(['click', 'hover', 'contextMenu']),
    notificationBackgroundColor: prop_types_1.default.string,
    notificationTextColor: prop_types_1.default.string,
    onVisibleChange: prop_types_1.default.func,
    placement: prop_types_1.default.oneOf([
        'topRight',
        'topLeft',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
    ])
};
