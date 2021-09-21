"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Radio_1 = require("../Radio");
const render_1 = require("../utils/test/render");
describe('Radio', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Radio_1.Radio, { value: 'test', name: 'radio' }));
        expect(component).toBeTruthy();
    });
    it('should render label when have label prop', () => {
        const content = 'My label';
        const { getByTestId } = render_1.render(react_1.default.createElement(Radio_1.Radio, { value: 'test', name: 'radio', label: content }));
        const radio = getByTestId('radio-container');
        expect(radio).toBeTruthy();
        expect(radio).toHaveTextContent('My label');
    });
    it('should render initial value correctly', () => {
        const value = 'test';
        const { getByTestId } = render_1.render(react_1.default.createElement(Radio_1.Radio, { name: 'radio', value: value, onChange: () => undefined }));
        const radio = getByTestId('radio-input');
        expect(radio).toBeTruthy();
        expect(radio).toHaveAttribute('value', 'test');
    });
    it('should render name correctly', () => {
        const name = 'radio';
        const { getByTestId } = render_1.render(react_1.default.createElement(Radio_1.Radio, { name: name, value: 'test', onChange: () => undefined }));
        const radio = getByTestId('radio-input');
        expect(radio).toBeTruthy();
        expect(radio).toHaveAttribute('name', 'radio');
    });
    it('should render change of value correctly', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Radio_1.Radio, { name: 'radio', value: 'test' }));
        react_2.fireEvent.click(getByTestId('radio-input'));
        const input = container.querySelector('input');
        expect(input === null || input === void 0 ? void 0 : input.checked).toBe(true);
    });
    it('should call onChange when click on radio', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Radio_1.Radio, { name: 'radio', value: 'test', onChange: handleOnClick }));
        react_2.fireEvent.click(getByTestId('radio-input'));
        expect(handleOnClick).toBeCalled();
    });
    it('should not call onChange when click on step if it is disabled', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Radio_1.Radio, { name: 'radio', value: 'test', onChange: handleOnClick, disabled: true }));
        react_2.fireEvent.click(getByTestId('radio-input'));
        expect(handleOnClick).not.toBeCalled();
    });
});
