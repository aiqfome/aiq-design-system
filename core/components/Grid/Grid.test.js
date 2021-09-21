"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Grid_1 = require("../Grid");
describe('Grid', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Grid_1.Grid, null));
        expect(component).toBeTruthy();
    });
    it('should have to render a div', () => {
        const { container } = render_1.render(react_1.default.createElement(Grid_1.Grid, null));
        const div = container.querySelector('div');
        expect(div).toBeInTheDocument();
    });
    it('should have content when has children', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Grid_1.Grid, null, "Flex!"));
        const div = getByText('Flex!');
        expect(div).toBeTruthy();
    });
});
