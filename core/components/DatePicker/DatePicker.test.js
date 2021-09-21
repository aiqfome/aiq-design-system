"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const moment_1 = __importDefault(require("moment"));
require("react-dates/initialize");
const react_2 = require("@testing-library/react");
const DatePicker_1 = require("./DatePicker");
const render_1 = require("../utils/test/render");
describe('DatePicker', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, null));
        expect(component).toBeTruthy();
    });
    it('should render a default value', () => {
        const value = moment_1.default();
        const date = value.format('DD/MMMM/YYYY');
        const { getByTestId } = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, { value: [value] }));
        expect(getByTestId('datepicker-single').querySelector('span')).toHaveTextContent(date);
    });
    it('should render a default value with range variant', () => {
        const value = moment_1.default();
        const date = value.format('DD/MM - DD/MM');
        const { getByTestId } = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'range', value: [value, value] }));
        expect(getByTestId('datepicker-range').querySelector('span')).toHaveTextContent(date);
    });
    it('should have a error message when have error on form', () => {
        const content = 'My Error';
        const { getByTestId } = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, { errorForm: true, errorMessage: content }));
        const textContainer = getByTestId('datepicker-error');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My Error');
    });
    it('should have a text when have a placeholder prop', () => {
        const content = 'My placeholder';
        const { getByTestId } = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, { placeholder: content }));
        const textContainer = getByTestId('datepicker-placeholder');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My placeholder');
    });
    it('should open datepicker after clicking on input', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(DatePicker_1.DatePicker, null));
        const container = getByTestId('datepicker-single-input');
        react_2.fireEvent.click(container);
        const dialogBox = getByTestId('datepicker-open');
        expect(dialogBox).toBeTruthy();
    });
});
