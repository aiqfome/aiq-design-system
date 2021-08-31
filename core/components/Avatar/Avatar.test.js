"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Avatar_1 = require("./Avatar");
describe('Avatar', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Avatar_1.Avatar, { alt: 'avatar component!' }));
        expect(component).toBeTruthy();
    });
    it('should have to render with first letter of alt prop', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Avatar_1.Avatar, { alt: 'avatar component!' }));
        expect(getByTestId('name')).toHaveTextContent('A');
    });
    it('should have to render a url when prop src is not null', () => {
        const url = 'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ';
        const { getByTestId } = render_1.render(react_1.default.createElement(Avatar_1.Avatar, { src: url, alt: 'avatar component!' }));
        expect(getByTestId('src')).toBeVisible();
        expect(getByTestId('src')).toHaveAttribute('src', url);
    });
});
