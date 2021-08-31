"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const render_1 = require("../utils/test/render");
const Dropdown_1 = require("./Dropdown");
describe('Dropdown', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', itens: [] }));
        expect(component).toBeTruthy();
    });
    it('should open Dropdown when click him', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', itens: [{ label: 'item', value: 1 }] }));
        const dropdown = getByTestId('dropdown');
        react_2.fireEvent.click(dropdown);
        const itemsDropdown = container.querySelectorAll('li');
        expect(itemsDropdown[0]).toBeVisible();
    });
    it('should close Dropdown when click a item', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', itens: [{ label: 'item', value: 1 }] }));
        const dropdown = getByTestId('dropdown');
        react_2.fireEvent.click(dropdown);
        let itemsDropdown = container.querySelectorAll('li');
        expect(itemsDropdown[0]).toBeVisible();
        react_2.fireEvent.click(itemsDropdown[0]);
        itemsDropdown = container.querySelectorAll('li');
        expect(itemsDropdown.length).toBe(0);
    });
    it('should call onChange when click on item in dropdown', () => {
        const handleOnClick = jest.fn();
        const itens = [{ label: 'item', value: 1 }];
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', onChange: handleOnClick, itens: itens }));
        const dropdown = getByTestId('dropdown');
        react_2.fireEvent.click(dropdown);
        const itemsDropdown = container.querySelectorAll('li');
        react_2.fireEvent.click(itemsDropdown[0]);
        expect(handleOnClick).toBeCalled();
        expect(handleOnClick).toHaveBeenLastCalledWith(itens[0]);
    });
    it('should have the same number of items from the itens property', () => {
        const itens = [
            { label: 'item1', value: 1 },
            { label: 'item2', value: 2 },
            { label: 'item3', value: 3 },
            { label: 'item4', value: 4 }
        ];
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', itens: itens }));
        const dropdown = getByTestId('dropdown');
        react_2.fireEvent.click(dropdown);
        const itemsDropdown = container.querySelectorAll('li');
        expect(itemsDropdown.length).toBe(4);
    });
    it('should not can to open when dropdown is disabled', () => {
        const handleOnClick = jest.fn();
        const itens = [
            { label: 'item1', value: 1 },
            { label: 'item2', value: 2 },
            { label: 'item3', value: 3 },
            { label: 'item4', value: 4 }
        ];
        const { container, getByTestId } = render_1.render(react_1.default.createElement(Dropdown_1.Dropdown, { label: 'Dropdown', onChange: handleOnClick, disabled: true, itens: itens }));
        const dropdown = getByTestId('dropdown');
        react_2.fireEvent.click(dropdown);
        const itemsDropdown = container.querySelectorAll('li');
        expect(itemsDropdown.length).toBe(0);
        expect(handleOnClick).not.toBeCalled();
    });
});
