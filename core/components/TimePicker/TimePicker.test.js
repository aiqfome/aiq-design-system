"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("react-dates/initialize");
const react_2 = require("@testing-library/react");
const TimePicker_1 = require("./TimePicker");
const render_1 = require("../utils/test/render");
describe('TimePicker', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(TimePicker_1.TimePicker, null));
        expect(component).toBeTruthy();
    });
    it('should render a default value', () => {
        var _a;
        const value = '10:00';
        const { getByTestId } = render_1.render(react_1.default.createElement(TimePicker_1.TimePicker, { value: value }));
        expect((_a = getByTestId('timepicker').querySelector('input')) === null || _a === void 0 ? void 0 : _a.value).toBe(value);
    });
    it('should have a error message when have error on form', () => {
        const content = 'My Error';
        const { getByTestId } = render_1.render(react_1.default.createElement(TimePicker_1.TimePicker, { errorForm: true, errorMessage: content }));
        const textContainer = getByTestId('input-error');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My Error');
    });
    it('should have a text when have a placeholder prop', () => {
        const content = 'My placeholder';
        const { getByTestId } = render_1.render(react_1.default.createElement(TimePicker_1.TimePicker, { placeholder: content }));
        const input = getByTestId('input');
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute('placeholder', 'My placeholder');
    });
    it('should open timepicker after trigger on input', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(TimePicker_1.TimePicker, null));
        const container = getByTestId('timepicker');
        react_2.fireEvent.mouseOver(container);
        const dialogBox = getByTestId('timepicker-open');
        expect(dialogBox).toBeTruthy();
    });
});
