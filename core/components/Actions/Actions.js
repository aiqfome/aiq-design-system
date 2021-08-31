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
exports.Actions = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const rc_dropdown_1 = __importDefault(require("rc-dropdown"));
const styled_components_1 = __importStar(require("styled-components"));
const Divider_1 = require("../Divider");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
const Popover_1 = require("../Popover");
const Text_1 = require("../Text");
const ActionsStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
`;
const MenuItem = styled_components_1.default(Flex_1.Flex) `
  ${({ disabled }) => {
    if (disabled) {
        return styled_components_1.css `
        color: ${({ theme }) => theme.colors.grey};

        svg {
          opacity: 0.33;
        }

        &:hover {
          cursor: not-allowed;

          span {
            cursor: not-allowed;
          }
        }
      `;
    }
    return styled_components_1.css `
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.mediumGrey};

        span {
          cursor: pointer;
        }
      }
    `;
}}

  &:first-child {
    padding-top: 8px;
  }
`;
exports.Actions = (_a) => {
    var { title, items, header, children, arrow = false, keepOpen = true, trigger = 'hover', placement = 'bottomRight' } = _a, props = __rest(_a, ["title", "items", "header", "children", "arrow", "keepOpen", "trigger", "placement"]);
    const [visible, setVisible] = react_1.useState(false);
    const child = react_1.default.Children.only(children);
    const getOverlay = () => {
        return (react_1.default.createElement(ActionsStyled, Object.assign({ flexDirection: 'column', "data-testid": 'actions-content' }, props),
            header && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Flex_1.Flex, { p: '10px', flexDirection: 'column' }, header),
                react_1.default.createElement(Divider_1.Divider, { mx: '10px', mb: '4px' }))),
            react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
                title && (react_1.default.createElement(Text_1.Text, { m: '3px 10px 0px', fontSize: 'small', color: 'darkGrey', textAlign: 'left' }, title)), items === null || items === void 0 ? void 0 :
                items.map((_a, index) => {
                    var { icon, action, description, visible = true, disabled = false, disabledMessage } = _a, itemProps = __rest(_a, ["icon", "action", "description", "visible", "disabled", "disabledMessage"]);
                    return visible ? (!disabled || (disabled && !disabledMessage) ? (react_1.default.createElement(MenuItem, Object.assign({}, itemProps, { py: 3, px: 5, key: index, disabled: disabled, alignItems: 'center', onClick: e => {
                            e.stopPropagation();
                            if (!disabled) {
                                setVisible(false);
                                if (action)
                                    action(e);
                            }
                        } }),
                        icon && (react_1.default.createElement(Icon_1.Icon, { mr: 4, color: 'primary' }, icon)),
                        react_1.default.createElement(Text_1.Text, { fontSize: 'medium', whiteSpace: 'nowrap' }, description))) : (react_1.default.createElement(Popover_1.Popover, { placement: 'bottomLeft', arrow: true, content: disabledMessage, notificationBackgroundColor: 'almostBlack', notificationTextColor: 'white' },
                        react_1.default.createElement(MenuItem, { py: 3, px: 5, key: index, disabled: true, alignItems: 'center' },
                            icon && (react_1.default.createElement(Icon_1.Icon, { mr: 4, color: 'primary' }, icon)),
                            react_1.default.createElement(Text_1.Text, { fontSize: 'medium', whiteSpace: 'nowrap' }, description))))) : null;
                }))));
    };
    if (keepOpen) {
        return (react_1.default.createElement(rc_dropdown_1.default, { arrow: arrow, visible: visible, trigger: [trigger], overlay: getOverlay, placement: placement, overlayClassName: 'actions', onVisibleChange: setVisible }, child));
    }
    return (react_1.default.createElement(rc_dropdown_1.default, { arrow: arrow, trigger: [trigger], overlay: getOverlay, placement: placement, overlayClassName: 'actions' }, child));
};
exports.Actions.propTypes = {
    title: prop_types_1.default.any,
    arrow: prop_types_1.default.bool,
    header: prop_types_1.default.any,
    items: prop_types_1.default.array,
    keepOpen: prop_types_1.default.bool,
    children: prop_types_1.default.node.isRequired,
    trigger: prop_types_1.default.oneOf(['click', 'hover', 'contextMenu']),
    placement: prop_types_1.default.oneOf([
        'topRight',
        'topLeft',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
    ])
};
