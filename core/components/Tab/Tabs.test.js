"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Tab_1 = require("./Tab");
const Tabs_1 = require("./Tabs");
const render_1 = require("../utils/test/render");
describe('Tabs', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Tabs_1.Tabs, null,
            react_1.default.createElement(Tab_1.Tab, { value: 0, index: 0 }, "Item One")));
        expect(component).toBeTruthy();
    });
    it('should have extra when has extra prop', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Tabs_1.Tabs, { extra: 'extra' },
            react_1.default.createElement(Tab_1.Tab, { value: 0, index: 0 }, "Item One")));
        const tabs = getByTestId('tabs');
        expect(tabs).toHaveTextContent('extra');
    });
    it('should call onChange when click on tab in tabs', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Tabs_1.Tabs, { onChange: handleOnClick },
            react_1.default.createElement(Tab_1.Tab, { value: 0, index: 0 }, "Item One")));
        const container = getByTestId('tabs-container');
        react_2.fireEvent.click(container);
        expect(handleOnClick).toBeCalled();
    });
    it('should have the same amount of tabs from the children prop', () => {
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Tabs_1.Tabs, null,
            react_1.default.createElement(Tab_1.Tab, { value: 0, index: 0 }, "Item One"),
            react_1.default.createElement(Tab_1.Tab, { value: 0, index: 1 }, "Item Two")));
        const list = getAllByTestId('tab');
        expect(list).toHaveLength(2);
    });
});
