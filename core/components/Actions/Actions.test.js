"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Actions_1 = require("./Actions");
describe('Actions', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Actions_1.Actions, { arrow: true, title: 'title' },
            react_1.default.createElement("div", null, "content")));
        expect(component).toBeTruthy();
    });
    it('should show actions content when trigger is actived', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Actions_1.Actions, { arrow: true, title: 'title', trigger: 'click' },
            react_1.default.createElement("div", null, "content")));
        const actionsChild = container.querySelectorAll('div');
        actionsChild[0].click();
        const actionsContent = getByTestId('actions-content');
        expect(actionsContent).toBeTruthy();
    });
    it('should hide actions when click outside the content', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Actions_1.Actions, { arrow: true, title: 'title', trigger: 'click' },
            react_1.default.createElement("div", null, "content")));
        const actionsChild = container.querySelectorAll('div');
        actionsChild[0].click();
        expect(actionsChild[0]).toHaveClass('rc-dropdown-open');
        const actionsContent = getByTestId('actions-content');
        expect(actionsContent).toBeTruthy();
        actionsChild[0].click();
        expect(actionsChild[0]).not.toHaveClass('rc-dropdown-open');
    });
    it('should call onClick when click on div inside Actions, also openning it', () => {
        const handleOnClick = jest.fn();
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Actions_1.Actions, { arrow: true, title: 'title', trigger: 'click' },
            react_1.default.createElement("div", { onClick: handleOnClick }, "content")));
        const actionsChild = container.querySelectorAll('div');
        actionsChild[0].click();
        expect(actionsChild[0]).toHaveClass('rc-dropdown-open');
        const actionsContent = getByTestId('actions-content');
        expect(actionsContent).toBeTruthy();
        expect(handleOnClick).toBeCalled();
    });
});
