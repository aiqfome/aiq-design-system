"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const render_1 = require("../utils/test/render");
const Checkbox_1 = require("./Checkbox");
describe('Checkbox', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, null));
        expect(component).toBeTruthy();
    });
    it('should have to render a input with type checkbox', () => {
        const { container } = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, null));
        const input = container.querySelector('input[type=checkbox]');
        expect(input).toBeInTheDocument();
    });
    it('should have to call onChange when click on checkbox', () => {
        const handleOnchange = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, { checked: true, onChange: handleOnchange }));
        const checkbox = getByTestId('checkbox');
        react_2.fireEvent.click(checkbox);
        expect(handleOnchange).toHaveBeenCalled();
    });
    it('should not have to call onChange when click on checkbox disabled', () => {
        const handleOnchange = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, { disabled: true, checked: true, onChange: handleOnchange }));
        const checkbox = getByTestId('checkbox');
        react_2.fireEvent.click(checkbox);
        expect(handleOnchange).not.toHaveBeenCalled();
    });
    it('should have to change checked when clicked on checkbox', () => {
        var _a, _b;
        const { getByTestId } = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, null));
        const checkbox = getByTestId('checkbox');
        expect((_a = checkbox.querySelector('input')) === null || _a === void 0 ? void 0 : _a.checked).toBe(false);
        react_2.fireEvent.click(checkbox);
        expect((_b = checkbox.querySelector('input')) === null || _b === void 0 ? void 0 : _b.checked).toBe(true);
    });
    it('should have the same text that was passed for prop label', () => {
        const label = 'Trololo Sing Along!';
        const { getByText } = render_1.render(react_1.default.createElement(Checkbox_1.Checkbox, { label: label }));
        const component = getByText(label);
        expect(component).toBeTruthy();
    });
});
