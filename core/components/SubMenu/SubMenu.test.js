"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SubMenu_1 = require("../SubMenu");
const render_1 = require("../utils/test/render");
describe('SubMenu', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(SubMenu_1.SubMenu, { content: 'teste' },
            react_1.default.createElement("div", null, "content")));
        expect(component).toBeTruthy();
    });
});
