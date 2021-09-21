"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TableRow_1 = require("./TableRow");
const render_1 = require("../utils/test/render");
describe('TableRow', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(TableRow_1.TableRow, null, "o design system do app mais fominha da interne\u0302!"));
        expect(component).toBeTruthy();
    });
    it('should have content when has children', () => {
        const { container } = render_1.render(react_1.default.createElement(TableRow_1.TableRow, null, "o design system do app mais fominha da interne\u0302!"));
        expect(container).toHaveTextContent('o design system do app mais fominha da internê!');
    });
});
