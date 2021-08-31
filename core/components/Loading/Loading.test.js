"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Loading_1 = require("../Loading");
describe('Loading', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Loading_1.Loading, null));
        expect(component).toBeTruthy();
    });
    it('should have to render a svg', () => {
        const { container } = render_1.render(react_1.default.createElement(Loading_1.Loading, null));
        const svg = container.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});
