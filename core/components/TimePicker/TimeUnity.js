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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUnity = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const md_1 = require("react-icons/md");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
const Text_1 = require("../Text");
const Button = styled_components_1.default(Icon_1.Icon) `
  &:hover {
    cursor: pointer;
  }
`;
exports.TimeUnity = ({ max, min, label, value, onChange = () => {
    // do nothing.
} }) => {
    const [number, setNumber] = react_1.useState(0);
    react_1.useEffect(() => {
        setNumber(value);
    }, [value]);
    function upNumber() {
        if (max > number) {
            setNumber(number + 1);
            onChange(('00' + (number + 1)).slice(-2));
        }
        else {
            setNumber(min);
        }
    }
    function downNumber() {
        if (min < number) {
            setNumber(number - 1);
            onChange(('00' + (number - 1)).slice(-2));
        }
        else {
            setNumber(max);
        }
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', flexDirection: 'column' },
        react_1.default.createElement(Button, { onClick: upNumber, color: 'primary' },
            react_1.default.createElement(md_1.MdExpandLess, { size: 32 })),
        react_1.default.createElement(Text_1.Text, { fontSize: 'xlarge', fontWeight: 'medium' }, ('00' + number).slice(-2)),
        react_1.default.createElement(Button, { onClick: downNumber, color: 'primary' },
            react_1.default.createElement(md_1.MdExpandMore, { size: 32 })),
        react_1.default.createElement(Text_1.Text, { color: 'primary', fontSize: 'small', fontWeight: 'medium' }, label)));
};
exports.TimeUnity.propTypes = {
    max: prop_types_1.default.number.isRequired,
    min: prop_types_1.default.number.isRequired,
    label: prop_types_1.default.string.isRequired,
    value: prop_types_1.default.number.isRequired,
    onChange: prop_types_1.default.func
};
