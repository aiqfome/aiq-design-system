"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Badge_1 = require("./Badge");
describe('Badge', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Badge_1.Badge, null, "hello"));
        expect(component).toBeTruthy();
    });
    it('should have text content equal prop count', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Badge_1.Badge, { count: 100 }, "test"));
        expect(getByTestId('badge')).toHaveTextContent('100');
    });
    it('should have text content equal children when count is null', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Badge_1.Badge, null, "ol\u00E1"));
        expect(getByTestId('badge')).toHaveTextContent('olá');
    });
    it('should have value content less than overflowCount, when overflowCount is not null and is bigger then count', () => {
        const overflowCount = 500;
        const { getByTestId } = render_1.render(react_1.default.createElement(Badge_1.Badge, { overflowCount: overflowCount, count: 50 }));
        expect(getByTestId('badge')).toHaveTextContent(`50`);
    });
    it('should have class __badge-label when variant equal label', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Badge_1.Badge, { variant: 'label', count: 50 }));
        expect(getByTestId('badge')).toHaveClass('__badge-label');
    });
    it('should have class __badge-default when variant equal default or null', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Badge_1.Badge, { count: 50 }));
        expect(getByTestId('badge')).toHaveClass('__badge-default');
    });
});
