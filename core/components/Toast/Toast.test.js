"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("react-dates/initialize");
const react_2 = require("@testing-library/react");
const Flex_1 = require("../Flex");
const Button_1 = require("../Button");
const render_1 = require("../utils/test/render");
const index_1 = require("./index");
const ContentToast = () => {
    const { addToast } = index_1.useToast();
    function showToast() {
        addToast({
            type: 'success',
            title: 'Hi ✌️',
            description: 'I am a success toast'
        });
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Button_1.Button, { palette: 'primary', variant: 'contained', "data-testid": 'action', onClick: showToast }, "Show Toast")));
};
describe('Toast', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(index_1.ToastProvider, null,
            react_1.default.createElement(ContentToast, null)));
        expect(component).toBeTruthy();
    });
    it('should render a toast', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(index_1.ToastProvider, null,
            react_1.default.createElement(ContentToast, null)));
        const button = getByTestId('action');
        react_2.fireEvent.click(button);
        expect(getByTestId('toast-container')).toBeTruthy();
    });
    it('should render toast content correctly', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(index_1.ToastProvider, null,
            react_1.default.createElement(ContentToast, null)));
        const button = getByTestId('action');
        react_2.fireEvent.click(button);
        expect(getByTestId('toast-content')).toHaveTextContent('I am a success toast');
    });
    it('should render 3 toasts', () => {
        const { getByTestId, getAllByTestId } = render_1.render(react_1.default.createElement(index_1.ToastProvider, null,
            react_1.default.createElement(ContentToast, null)));
        const button = getByTestId('action');
        react_2.fireEvent.click(button);
        react_2.fireEvent.click(button);
        react_2.fireEvent.click(button);
        expect(getAllByTestId('toast-content')).toHaveLength(3);
    });
});
