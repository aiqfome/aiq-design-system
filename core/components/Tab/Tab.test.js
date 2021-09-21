"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Tab_1 = require("./Tab");
describe('Tab', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Tab_1.Tab, { value: 1, index: 1 }, "o design system do app mais fominha da interne\u0302!"));
        expect(component).toBeTruthy();
    });
    it('should have content when has children', () => {
        const { container } = render_1.render(react_1.default.createElement(Tab_1.Tab, { value: 1, index: 1 }, "o design system do app mais fominha da interne\u0302!"));
        expect(container).toHaveTextContent('o design system do app mais fominha da internê!');
    });
});
