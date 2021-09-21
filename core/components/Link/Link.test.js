"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Link_1 = require("../Link");
describe('Link', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Link_1.Link, { href: 'https://aiqfome.com/' }));
        expect(component).toBeTruthy();
    });
    it('should have to render a link external when variant is null', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Link_1.Link, { href: 'https://aiqfome.com/' }));
        const link = getByTestId('link-external');
        expect(link).toBeTruthy();
    });
    it('should have to render a link external when variant is equal external', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Link_1.Link, { variant: 'external', href: 'https://aiqfome.com/' }));
        const link = getByTestId('link-external');
        expect(link).toBeTruthy();
    });
    it('should have to render a link internal when variant is equal internal', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Link_1.Link, { variant: 'internal', href: '/food' }));
        const link = getByTestId('link-internal');
        expect(link).toBeTruthy();
    });
    it('should have to render a content when has children', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Link_1.Link, { href: 'https://aiqfome.com/' }, "Aiqfome!"));
        const link = getByTestId('link-external');
        expect(link).toHaveTextContent('Aiqfome!');
    });
});
