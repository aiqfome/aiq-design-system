"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Input_1 = require("../Input");
const render_1 = require("../utils/test/render");
describe('Input', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Input_1.Input, null));
        expect(component).toBeTruthy();
    });
    it("with variant 'outlined' should have 'input-outlined' id", () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { variant: 'outlined' }));
        const input = getByTestId('input-outlined');
        expect(input).toBeTruthy();
    });
    it("with variant 'tags' should have 'input-tags' id", () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { variant: 'tags' }));
        const input = getByTestId('input-tags');
        expect(input).toBeTruthy();
    });
    it('should render placeholder when have placeholder prop', () => {
        const content = 'My placeholder';
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { placeholder: content }));
        const input = getByTestId('input');
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute('placeholder', 'My placeholder');
    });
    it('should render prefix when have prefix prop', () => {
        const prefix = react_1.default.createElement("div", null, "Prefix");
        const { getByText } = render_1.render(react_1.default.createElement(Input_1.Input, { prefix: prefix }));
        const input = getByText('Prefix');
        expect(input).toBeTruthy();
    });
    it('should render sufix when have sufix prop', () => {
        const sufix = react_1.default.createElement("div", null, "Sufix");
        const { getByText } = render_1.render(react_1.default.createElement(Input_1.Input, { sufix: sufix }));
        const input = getByText('Sufix');
        expect(input).toBeTruthy();
    });
    it('should render initial value correctly', () => {
        const value = 'test';
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { value: value, onChange: () => undefined }));
        const input = getByTestId('input');
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute('value', 'test');
    });
    it('should render name when have name prop', () => {
        const content = 'name-test';
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { name: content }));
        const input = getByTestId('input');
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute('name', 'name-test');
    });
    it('should have a error message when have error on form', () => {
        const content = 'My Error';
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { errorForm: true, errorMessage: content }));
        const textContainer = getByTestId('input-error');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My Error');
    });
    it("should render label when have label prop and variant 'outlined'", () => {
        const content = 'label-test';
        const { getByTestId } = render_1.render(react_1.default.createElement(Input_1.Input, { variant: 'outlined', label: content }));
        const input = getByTestId('input-label');
        expect(input).toBeTruthy();
        expect(input).toHaveTextContent('label-test');
    });
    it('should render change of value correctly', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Input_1.Input, null));
        react_2.fireEvent.change(getByTestId('input'), {
            target: { value: 'Good Day' }
        });
        const input = container.querySelector('input');
        expect(input === null || input === void 0 ? void 0 : input.value).toBe('Good Day');
    });
    it('should render change of value correctly with type number', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Input_1.Input, { type: 'number' }));
        react_2.fireEvent.change(getByTestId('input'), {
            target: { value: 'Good Day' }
        });
        const input = container.querySelector('input');
        expect(input === null || input === void 0 ? void 0 : input.value).toBe('');
        react_2.fireEvent.change(getByTestId('input'), {
            target: { value: 444 }
        });
        expect(input === null || input === void 0 ? void 0 : input.value).toBe('444');
    });
});
