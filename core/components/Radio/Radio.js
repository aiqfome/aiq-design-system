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
exports.Radio = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const Text_1 = require("../Text");
const Box_1 = require("../Box");
const radioVariations = {
    default: styled_components_1.css `
    min-height: 21px;
    padding-left: 35px;
    div {
      height: 20px;
      width: 20px;
    }

    div:after {
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
    }
  `,
    small: styled_components_1.css `
    min-height: 17px;
    padding-left: 28px;
    div {
      height: 16px;
      width: 16px;
    }

    div:after {
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
    }
  `
};
const RadioStyled = styled_components_1.default.label `
  ${styled_system_1.margin}

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  input:checked ~ div {
    background-color: #fff;
  }

  div:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ div:after {
    display: block;
  }

  div:after {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ variant }) => radioVariations[variant || 'default']}
`;
exports.Radio = react_1.default.forwardRef((_a, ref) => {
    var { name, value, disabled = false, checked = false, label, variant = 'default', onChange = () => {
        // do nothing.
    }, className, mx, my, m, mr, ml } = _a, props = __rest(_a, ["name", "value", "disabled", "checked", "label", "variant", "onChange", "className", "mx", "my", "m", "mr", "ml"]);
    const [isChecked, setIsChecked] = react_1.useState(checked);
    react_1.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);
    const onChangeRadio = e => {
        if (!disabled) {
            setIsChecked(!checked);
            if (onChange)
                onChange(e);
        }
    };
    return (react_1.default.createElement(RadioStyled, { mx: mx, my: my, variant: variant, m: m, mr: mr, ml: ml, className: className, disabled: disabled, "data-testid": 'radio-container' },
        react_1.default.createElement("input", Object.assign({ ref: ref, type: 'radio', disabled: disabled, name: name, onChange: onChangeRadio, checked: isChecked, value: value, "data-testid": 'radio-input' }, props)),
        react_1.default.createElement(Box_1.Box, null),
        label && react_1.default.createElement(Text_1.Text, null, label)));
});
exports.Radio.displayName = 'Radio';
exports.Radio.propTypes = {
    name: prop_types_1.default.string.isRequired,
    value: prop_types_1.default.any.isRequired,
    disabled: prop_types_1.default.bool,
    checked: prop_types_1.default.bool,
    onChange: prop_types_1.default.func,
    label: prop_types_1.default.string,
    className: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(['small', 'default']),
    mx: prop_types_1.default.any,
    my: prop_types_1.default.any,
    m: prop_types_1.default.any,
    mr: prop_types_1.default.any,
    ml: prop_types_1.default.any
};
