"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const render_1 = require("../utils/test/render");
const Icon_1 = require("../Icon");
describe('Icon', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Icon_1.Icon, { color: 'primary' },
            react_1.default.createElement(md_1.MdStore, null)));
        expect(component).toBeTruthy();
    });
});
