"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Status_1 = require("../Status");
const render_1 = require("../utils/test/render");
describe('Status', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Status_1.Status, null, "text"));
        expect(component).toBeTruthy();
    });
    it('should have content when has children', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Status_1.Status, null, "text"));
        const div = getByText('text');
        expect(div).toBeTruthy();
    });
});
