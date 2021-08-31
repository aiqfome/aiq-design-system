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
exports.Multistep = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Box_1 = require("../Box");
const Divider_1 = require("../Divider");
const StepButton = styled_components_1.default.button `
  border: none;
  display: flex;
  background: none;
  align-items: center;
  flex-direction: column;
  min-width: max-content !important;

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;
const DividerLeftStyled = styled_components_1.default(Divider_1.Divider) `
  position: absolute;
  top: 12px;
  width: 100%;
  right: calc(50% + 25px);
`;
const DividerRightStyled = styled_components_1.default(Divider_1.Divider) `
  position: absolute;
  top: 12px;
  width: 100%;
  left: calc(50% + 25px);
`;
exports.Multistep = (_a) => {
    var { steps, stepCurrent = 0, disabledClickStep = 0, onClickStep } = _a, props = __rest(_a, ["steps", "stepCurrent", "disabledClickStep", "onClickStep"]);
    const theme = react_1.useContext(styled_components_1.ThemeContext);
    const [stepActive, setStepActive] = react_1.useState(stepCurrent);
    react_1.useEffect(() => {
        if (stepCurrent >= 0 && stepCurrent < steps.length) {
            setStepActive(stepCurrent);
        }
    }, [stepCurrent, steps]);
    function handleClickStep(newStepActive) {
        if (!disabledClickStep) {
            onClickStep && onClickStep(newStepActive);
            setStepActive(newStepActive);
        }
    }
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({ width: '100%', alignItems: 'center', flexDirection: 'column' }, props),
        react_1.default.createElement(Flex_1.Flex, { width: '100%' }, steps.map((step, index) => (react_1.default.createElement(Flex_1.Flex, Object.assign({ flex: 1, mb: '32px', key: index, width: 'auto', alignItems: 'center', flexDirection: 'row', "data-testid": 'steps-step' }, step),
            react_1.default.createElement(Flex_1.Flex, { width: '100%', overflow: 'hidden', position: 'relative', justifyContent: 'center' },
                index > 0 && (react_1.default.createElement(DividerLeftStyled, { color: stepActive >= index
                        ? theme.colors.primary
                        : theme.colors.mediumGrey })),
                react_1.default.createElement(StepButton, Object.assign({}, step, { type: 'button', "data-testid": 'step-button', disabled: !!disabledClickStep, onClick: () => handleClickStep(index) }),
                    step.icon || (react_1.default.createElement(Flex_1.Flex, { backgroundColor: stepActive >= index
                            ? theme.colors.primary
                            : theme.colors.mediumGrey, height: '24px', width: '24px', justifyContent: 'center', alignItems: 'center', marginBottom: '12px', borderRadius: '50px' },
                        react_1.default.createElement(Text_1.Text, { color: 'white', cursor: disabledClickStep ? 'auto' : 'pointer' }, index + 1))),
                    react_1.default.createElement(Text_1.Text, { fontSize: 'medium', fontWeight: 'medium', cursor: disabledClickStep ? 'auto' : 'pointer', color: stepActive >= index
                            ? theme.colors.primary
                            : theme.colors.mediumGrey }, step.name)),
                steps.length - 1 > index && (react_1.default.createElement(DividerRightStyled, { color: stepActive > index
                        ? theme.colors.primary
                        : theme.colors.mediumGrey }))))))),
        steps.map((step, index) => stepActive === index && react_1.default.createElement(Box_1.Box, { key: 'index' }, step.component))));
};
exports.Multistep.propTypes = {
    steps: prop_types_1.default.array.isRequired,
    stepCurrent: prop_types_1.default.number,
    disabledClickStep: prop_types_1.default.bool,
    onClickStep: prop_types_1.default.func
};
