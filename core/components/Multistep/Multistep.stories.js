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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledClickStep = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const Flex_1 = require("../Flex");
const Button_1 = require("../Button");
const Multistep_1 = require("./Multistep");
exports.default = {
    component: Multistep_1.Multistep,
    title: 'Multistep'
};
// eslint-disable-next-line react/prop-types
const Step = ({ children }) => {
    return react_1.default.createElement("h1", null, children);
};
exports.Basic = () => {
    const [stepCurrent, setStepCurrent] = react_1.useState(0);
    const steps = [
        { name: 'StepOne', component: react_1.default.createElement(Step, null, "One") },
        { name: 'StepTwo', component: react_1.default.createElement(Step, null, "Two") },
        { name: 'StepThree', component: react_1.default.createElement(Step, null, "Three") },
        { name: 'StepFour', component: react_1.default.createElement(Step, null, "Four") }
    ];
    function handleClickBtnNext() {
        setStepCurrent(stepCurrent + 1);
    }
    function handleClickBtnLast() {
        setStepCurrent(stepCurrent - 1);
    }
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Multistep_1.Multistep, { stepCurrent: stepCurrent, steps: steps }),
        react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', marginTop: '16px', variant: 'centralized' },
            react_1.default.createElement(Button_1.Button, { onClick: handleClickBtnLast, variant: 'contained', palette: 'primary', marginRight: '16px' }, "Last"),
            react_1.default.createElement(Button_1.Button, { onClick: handleClickBtnNext, variant: 'contained', palette: 'primary' }, "Next"))));
};
exports.DisabledClickStep = () => {
    const [stepCurrent, setStepCurrent] = react_1.useState(0);
    const steps = [
        { name: 'StepOne', component: react_1.default.createElement(Step, null, "One") },
        { name: 'StepTwo', component: react_1.default.createElement(Step, null, "Two") },
        { name: 'StepThree', component: react_1.default.createElement(Step, null, "Three") },
        { name: 'StepFour', component: react_1.default.createElement(Step, null, "Four") }
    ];
    function handleClickBtnNext() {
        setStepCurrent(stepCurrent + 1);
    }
    function handleClickBtnLast() {
        setStepCurrent(stepCurrent - 1);
    }
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Multistep_1.Multistep, { disabledClickStep: true, stepCurrent: stepCurrent, steps: steps }),
        react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', marginTop: '16px', variant: 'centralized' },
            react_1.default.createElement(Button_1.Button, { onClick: handleClickBtnLast, variant: 'contained', palette: 'primary', marginRight: '16px' }, "Last"),
            react_1.default.createElement(Button_1.Button, { onClick: handleClickBtnNext, variant: 'contained', palette: 'primary' }, "Next"))));
};
