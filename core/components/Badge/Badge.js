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
exports.Badge = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const Text_1 = require("../Text");
const Tooltip_1 = require("../Tooltip");
const BadgeStyled = styled_components_1.default(Text_1.Text) `
  display: inline-flex;
  align-items: center;

  &.__badge-default {
    padding: 1px 8px;
    margin-right: 16px;
    border-radius: 12px;
    width: fit-content;
    font-size: 14px;

    ${styled_system_1.color}
    ${styled_system_1.space}
    ${styled_system_1.border}
    ${styled_system_1.layout}
    ${styled_system_1.fontSize}
    ${styled_system_1.fontWeight}
  }

  &.__badge-label {
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 14px;
    width: fit-content;
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    ${styled_system_1.color}
    ${styled_system_1.space}
    ${styled_system_1.border}
    ${styled_system_1.layout}
    ${styled_system_1.fontSize}
    ${styled_system_1.fontWeight}
  }

  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.border}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
`;
const getCounter = (value, overflow) => {
    if (value >= 0) {
        if (overflow && !isNaN(value) && value > overflow) {
            return (react_1.default.createElement(Tooltip_1.Tooltip, { "data-testid": 'badge-tooltip', body: value, variant: 'bottomRight' },
                react_1.default.createElement("span", null, `${overflow}+`)));
        }
        return value.toString();
    }
    return '';
};
exports.Badge = (_a) => {
    var { count, variant, children, overflowCount, className } = _a, props = __rest(_a, ["count", "variant", "children", "overflowCount", "className"]);
    const findClassName = react_1.useCallback(() => {
        switch (variant) {
            case 'label':
                return '__badge-label';
            default:
                return '__badge-default';
        }
    }, [variant]);
    return (react_1.default.createElement(BadgeStyled, Object.assign({ "data-testid": 'badge', className: `${className} ${findClassName()}` }, props), getCounter(count, overflowCount) || children));
};
exports.Badge.propTypes = {
    className: prop_types_1.default.string,
    count: prop_types_1.default.number,
    children: prop_types_1.default.node,
    statusColor: prop_types_1.default.string,
    overflowCount: prop_types_1.default.number,
    variant: prop_types_1.default.oneOf(['label', 'default'])
};
exports.Badge.defaultProps = {
    variant: 'default',
    color: '#262626',
    backgroundColor: '#dedede'
};
