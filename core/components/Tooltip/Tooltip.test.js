"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Tooltip_1 = require("./Tooltip");
const render_1 = require("../utils/test/render");
describe('Tooltip', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Tooltip_1.Tooltip, { body: 'body' },
            react_1.default.createElement("div", null, "content")));
        expect(component).toBeTruthy();
    });
    it('should have content when has children', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Tooltip_1.Tooltip, { body: 'body' },
            react_1.default.createElement("div", null, "content")));
        const div = getByText('content');
        expect(div).toBeTruthy();
    });
    it('should show tooltip content when trigger is actived', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Tooltip_1.Tooltip, { body: 'title' },
            react_1.default.createElement("div", null, "content")));
        const tooltipChild = container.querySelectorAll('div');
        react_2.fireEvent.mouseEnter(tooltipChild[0]);
        const tooltipContent = getByTestId('tooltip-content');
        expect(tooltipContent).toBeTruthy();
    });
});
