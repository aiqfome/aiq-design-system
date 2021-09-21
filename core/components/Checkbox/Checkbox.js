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
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const Label = styled_components_1.default.label `
  ${styled_system_1.color}

  display: flex;
  align-items: center;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
const HiddenCheckbox = styled_components_1.default.input `
  border: 0;
  display: none;
`;
const BoxCheckbox = styled_components_1.default.div `
  display: inline-block;
  margin-right: 12px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  transition: all 0.2s;

  background: transparent;

  ${HiddenCheckbox}:checked + & {
    background: ${({ theme }) => theme.colors.primary};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`;
const Icon = styled_components_1.default.svg `
  display: none;
  fill: none;
  stroke: white;
  stroke-width: 4px;
  transition: all 0.2s;

  ${HiddenCheckbox}:checked ~ div >  & {
    display: block;
  }
`;
exports.Checkbox = react_1.default.forwardRef((_a, ref) => {
    var { label, style, labelColor, disabled } = _a, props = __rest(_a, ["label", "style", "labelColor", "disabled"]);
    return (react_1.default.createElement(Label, { "data-testid": 'checkbox', color: labelColor, style: style, disabled: disabled },
        react_1.default.createElement(HiddenCheckbox, Object.assign({ disabled: disabled, type: 'checkbox', ref: ref }, props)),
        react_1.default.createElement(BoxCheckbox, null,
            react_1.default.createElement(Icon, { viewBox: '0 0 24 24' },
                react_1.default.createElement("polyline", { points: '20 6 9 17 4 12' }))),
        label));
});
exports.Checkbox.displayName = 'Checkbox';
exports.Checkbox.propTypes = {
    checked: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    labelColor: prop_types_1.default.string,
    style: prop_types_1.default.any,
    disabled: prop_types_1.default.bool
};
