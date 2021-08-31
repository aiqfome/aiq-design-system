"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Divider_1 = require("../Divider");
const render_1 = require("../utils/test/render");
describe('Divider', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Divider_1.Divider, null));
        expect(component).toBeTruthy();
    });
    it('should have a text when has children', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Divider_1.Divider, null, "Aiqfome"));
        expect(getByTestId('divider-wrapper')).toHaveTextContent('Aiqfome');
    });
});
