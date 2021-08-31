"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Popover_1 = require("./Popover");
const render_1 = require("../utils/test/render");
const react_2 = require("@testing-library/react");
describe('Popover', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Popover_1.Popover, { arrow: true },
            react_1.default.createElement("div", null, "content")));
        expect(component).toBeTruthy();
    });
    it('should show popover content when trigger is actived', () => {
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Popover_1.Popover, { arrow: true, trigger: 'click', content: 'test' },
            react_1.default.createElement("div", null, "content")));
        const popoverChild = container.querySelectorAll('div');
        react_2.fireEvent.click(popoverChild[0]);
        const popoverContent = getByTestId('popover-content');
        expect(popoverContent).toBeTruthy();
    });
    it('should hide popover when click outside the content', () => {
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Popover_1.Popover, { arrow: true, trigger: 'click', content: 'test' },
            react_1.default.createElement("div", null, "content")));
        const popoverChild = container.querySelectorAll('div');
        react_2.fireEvent.click(popoverChild[0]);
        expect(popoverChild[0]).toHaveClass('rc-dropdown-open');
        const popoverContent = getByTestId('popover-content');
        expect(popoverContent).toBeTruthy();
        react_2.fireEvent.click(popoverChild[0]);
        expect(popoverChild[0]).not.toHaveClass('rc-dropdown-open');
    });
    it('should call onClick when click on div inside Popover, also openning it', () => {
        const handleOnClick = jest.fn();
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Popover_1.Popover, { arrow: true, trigger: 'click', content: 'test' },
            react_1.default.createElement("div", { onClick: handleOnClick }, "content")));
        const popoverChild = container.querySelectorAll('div');
        react_2.fireEvent.click(popoverChild[0]);
        expect(popoverChild[0]).toHaveClass('rc-dropdown-open');
        const popoverContent = getByTestId('popover-content');
        expect(popoverContent).toBeTruthy();
        expect(handleOnClick).toBeCalled();
    });
});
