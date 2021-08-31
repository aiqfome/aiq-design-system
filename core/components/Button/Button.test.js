"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const fa_1 = require("react-icons/fa");
const render_1 = require("../utils/test/render");
const Button_1 = require("./Button");
describe('Button', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'contained', palette: 'primary' }, "Test"));
        expect(component).toBeTruthy();
    });
    it('should have to render a button', () => {
        const { container } = render_1.render(react_1.default.createElement(Button_1.Button, null, "Test"));
        const button = container.querySelector('button');
        expect(button).toBeInTheDocument();
    });
    it('should have to call onClick when click on button', () => {
        const handleOnClick = jest.fn();
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { onClick: handleOnClick }, "Test"));
        const button = getByRole('button');
        react_2.fireEvent.click(button);
        expect(handleOnClick).toHaveBeenCalled();
    });
    it('should not have to call onClick when click on button disabled', () => {
        const handleOnClick = jest.fn();
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { disabled: true, onClick: handleOnClick }, "Test"));
        const button = getByRole('button');
        react_2.fireEvent.click(button);
        expect(handleOnClick).not.toHaveBeenCalled();
    });
    it('should have classes __button-text and __button-text-primary when variant and palette is null', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, null, "Test"));
        expect(getByRole('button')).toHaveClass('__button-text');
        expect(getByRole('button')).toHaveClass('__button-text-primary');
    });
    it('should have class __button-text when variant equal text', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'text', palette: 'primary' }, "Test"));
        expect(getByRole('button')).toHaveClass('__button-text');
    });
    it('should have class __button-contained when variant equal contained', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'contained' }, "Test"));
        const button = getByRole('button');
        expect(button).toHaveClass('__button-contained');
        expect(button).toHaveClass('__button-contained-primary');
    });
    it('should have class __button-outlined when variant equal outlined', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'outlined' }, "Test"));
        const button = getByRole('button');
        expect(button).toHaveClass('__button-outlined');
        expect(button).toHaveClass('__button-outlined-primary');
    });
    it('should have class __button-fab when variant equal fab', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'fab' }, "Test"));
        const button = getByRole('button');
        expect(button).toHaveClass('__button-fab');
        expect(button).toHaveClass('__button-fab-primary');
    });
    it('should have class __button-icon when variant equal icon', () => {
        const { getByRole } = render_1.render(react_1.default.createElement(Button_1.Button, { variant: 'icon' }, "Test"));
        const button = getByRole('button');
        expect(button).toHaveClass('__button-icon');
        expect(button).toHaveClass('__button-icon-primary');
    });
    it('should have render a sufix when prop sufix exists', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Button_1.Button, { sufix: react_1.default.createElement(fa_1.FaHamburger, null), variant: 'icon' }, "Test"));
        const sufix = getByTestId('button-sufix');
        expect(sufix).toBeTruthy();
    });
    it('should have render a prefix when prop prefix exists', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Button_1.Button, { prefix: react_1.default.createElement(fa_1.FaHamburger, null) }, "Test"));
        const prefix = getByTestId('button-prefix');
        expect(prefix).toBeTruthy();
    });
});
