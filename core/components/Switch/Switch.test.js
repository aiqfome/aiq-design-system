"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Switch_1 = require("../Switch");
const render_1 = require("../utils/test/render");
describe('Switch', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Switch_1.Switch, null));
        expect(component).toBeTruthy();
    });
    it('should render className when have className prop', () => {
        const className = 'class';
        const { getByTestId } = render_1.render(react_1.default.createElement(Switch_1.Switch, { className: className }));
        const container = getByTestId('switch');
        expect(container).toBeTruthy();
        expect(container).toHaveClass('class');
    });
    it('should render change of value correctly', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Switch_1.Switch, null));
        react_2.fireEvent.click(getByTestId('switch'));
        const input = container.querySelector('input');
        expect(input === null || input === void 0 ? void 0 : input.checked).toBe(true);
    });
    it('should call onChange when click on radio', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Switch_1.Switch, { onChange: handleOnClick }));
        react_2.fireEvent.click(getByTestId('switch'));
        expect(handleOnClick).toBeCalled();
    });
    it('should not call onChange when click on step if it is disabled', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Switch_1.Switch, { onChange: handleOnClick, disabled: true }));
        react_2.fireEvent.click(getByTestId('switch'));
        expect(handleOnClick).not.toBeCalled();
    });
});
