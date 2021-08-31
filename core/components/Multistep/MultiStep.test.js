"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Multistep_1 = require("../Multistep");
const render_1 = require("../utils/test/render");
const steps = [
    { component: react_1.default.createElement("div", { "data-testid": 'div' }, "component"), name: 'component' },
    {
        component: react_1.default.createElement("div", { "data-testid": 'div-1' }, "component 1"),
        name: 'component 1'
    },
    { component: react_1.default.createElement("div", { "data-testid": 'div-2' }, "component 2"), name: 'component 2' }
];
describe('Multistep', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { steps: steps }));
        expect(component).toBeTruthy();
    });
    it('should have to render content according with stepCurrent prop', () => {
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { stepCurrent: 2, steps: steps }));
        expect(container).toBeTruthy();
        const content = getByTestId('div-2');
        expect(content).toBeTruthy();
    });
    it('should have the same amount steps of the array', () => {
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { steps: steps }));
        expect(getAllByTestId('steps-step').length).toBe(steps.length);
    });
    it('should open step content when clicking in one', () => {
        const { getAllByTestId, getByTestId } = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { steps: steps }));
        let content = getByTestId('div');
        expect(content).toBeTruthy();
        const list = getAllByTestId('step-button');
        react_2.fireEvent.click(list[1]);
        content = getByTestId('div-1');
        expect(content).toBeTruthy();
    });
    it('should call onChange when click on step', () => {
        const handleOnClick = jest.fn();
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { steps: steps, onClickStep: handleOnClick }));
        const list = getAllByTestId('step-button');
        react_2.fireEvent.click(list[1]);
        expect(handleOnClick).toBeCalled();
    });
    it('should not call onChange when click on step if it is disabled', () => {
        const handleOnClick = jest.fn();
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Multistep_1.Multistep, { steps: steps, onClickStep: handleOnClick, disabledClickStep: true }));
        const list = getAllByTestId('step-button');
        react_2.fireEvent.click(list[1]);
        expect(handleOnClick).not.toBeCalled();
    });
});
