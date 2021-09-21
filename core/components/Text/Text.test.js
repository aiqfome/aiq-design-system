"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Text_1 = require("./Text");
describe('Text', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Text_1.Text, { color: 'primary', fontSize: 'medium', width: '100%', cursor: 'pointer', fontWeight: 'semiBold', textAlign: 'center', truncate: true }, "o design system do app mais fominha da interne\u0302!"));
        expect(component).toBeTruthy();
    });
    it('should have content when has children', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Text_1.Text, { color: 'primary', fontSize: 'medium', width: '100%', cursor: 'pointer', fontWeight: 'semiBold', textAlign: 'center', truncate: true }, "o design system do app mais fominha da interne\u0302!"));
        const div = getByText('o design system do app mais fominha da internê!');
        expect(div).toBeTruthy();
    });
});
