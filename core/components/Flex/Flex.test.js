"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const render_1 = require("../utils/test/render");
const Flex_1 = require("../Flex");
describe('Flex', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row' }));
        expect(component).toBeTruthy();
    });
    it('should have to render a div', () => {
        const { container } = render_1.render(react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row' }));
        const div = container.querySelector('div');
        expect(div).toBeInTheDocument();
    });
    it('should have to call onClick when click on div', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Flex_1.Flex, { onClick: handleOnClick, flexDirection: 'row' }));
        const div = getByTestId('flex');
        react_2.fireEvent.click(div);
        expect(handleOnClick).toHaveBeenCalled();
    });
    it('should have content when has children', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row' }, "Flex!"));
        const div = getByText('Flex!');
        expect(div).toBeTruthy();
    });
    it('should have class __flex-variant-centralized when variant equal centralized', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Flex_1.Flex, { variant: 'centralized' }));
        const div = getByTestId('flex');
        expect(div).toHaveClass('__flex-variant-centralized');
    });
    it('should have class __flex-variant-fullCentralized when variant equal fullCentralized', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' }));
        const div = getByTestId('flex');
        expect(div).toHaveClass('__flex-variant-fullCentralized');
    });
    it('should have class __fle-fullHeight when have prop fullHeight', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Flex_1.Flex, { fullHeight: true }));
        const div = getByTestId('flex');
        expect(div).toHaveClass('__flex-fullHeight');
    });
    it('should have the same class that was pass to prop', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Flex_1.Flex, { className: 'test' }));
        const div = getByTestId('flex');
        expect(div).toHaveClass('test');
    });
});
