"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Box_1 = require("../Box");
describe('Box', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Box_1.Box, null));
        expect(component).toBeTruthy();
    });
    it('should have contnet when has children', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Box_1.Box, null, "Aiqfome"));
        expect(getByTestId('box')).toHaveTextContent('Aiqfome');
    });
});
