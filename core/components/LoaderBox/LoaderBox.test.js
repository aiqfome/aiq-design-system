"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const LoaderBox_1 = require("../LoaderBox");
describe('LoaderBox', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(LoaderBox_1.LoaderBox, null));
        expect(component).toBeTruthy();
    });
});
