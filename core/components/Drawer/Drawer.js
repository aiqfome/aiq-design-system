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
exports.Drawer = exports.DrawerStyled = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Flex_1 = require("../Flex");
const Loading_1 = require("../Loading");
const drawerVariations = {
    right: styled_components_1.css `
    right: 0;

    ${({ opened }) => opened &&
        styled_components_1.css `
        transform: translateX(0);
      `}

    ${({ opened }) => !opened &&
        styled_components_1.css `
        display: none;
        transform: translateX(100%);
      `}
  `,
    left: styled_components_1.css `
    left: 0;

    ${({ opened }) => opened &&
        styled_components_1.css `
        transform: translateX(0);
      `}

    ${({ opened }) => !opened &&
        styled_components_1.css `
        display: none;
        transform: translateX(-100%);
      `}
  `
};
const Mask = styled_components_1.default.div `
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;
exports.DrawerStyled = styled_components_1.default.div `
  max-width: 760px;
  ${styled_system_1.layout}
  ${styled_system_1.shadow}
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.mediumGrey};
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 2000;
  transition: transform 0.8s;
  ${styled_system_1.layout}
  ${styled_system_1.shadow}
  ${styled_system_1.margin}
  ${styled_system_1.padding}

  ${({ variation }) => drawerVariations[variation || 'right']}
`;
exports.Drawer = (_a) => {
    var { loading = false, onClose, opened = false, variation = 'right', children } = _a, props = __rest(_a, ["loading", "onClose", "opened", "variation", "children"]);
    const [bodyOverflow, setBodyOverflow] = react_1.useState(false);
    react_1.useEffect(() => {
        if (opened) {
            if (document.body.style.overflow !== 'hidden') {
                document.body.style.overflow = 'hidden';
                setBodyOverflow(true);
            }
        }
        else {
            if (bodyOverflow)
                document.body.style.overflow = 'auto';
        }
        return () => {
            if (bodyOverflow) {
                document.body.style.overflow = 'auto';
            }
        };
    }, [opened, bodyOverflow]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        onClose && opened && (react_1.default.createElement(Mask, { "data-testid": 'drawer-mask', onClick: onClose })),
        react_1.default.createElement(exports.DrawerStyled, Object.assign({ opened: opened, variation: variation, "data-testid": 'drawer-content', className: opened ? 'drawer-open' : 'drawer-close' }, props),
            react_1.default.createElement(Flex_1.Flex, { overflow: 'auto', height: '100%', flexDirection: 'column' }, loading ? (react_1.default.createElement(Flex_1.Flex, { flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center' },
                react_1.default.createElement(Loading_1.Loading, null))) : (children)))));
};
exports.Drawer.propTypes = {
    loading: prop_types_1.default.bool,
    onClose: prop_types_1.default.func,
    opened: prop_types_1.default.bool.isRequired,
    variation: prop_types_1.default.oneOf(['right', 'left']),
    children: prop_types_1.default.node
};
