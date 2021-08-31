"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Select_1 = require("../Select");
const render_1 = require("../utils/test/render");
const items = [
    { id: 0, name: 'Maringá' },
    { id: 1, name: 'Guarapuava' },
    { id: 2, name: 'São Paulo' },
    { id: 3, name: 'Curitiba' },
    { id: 4, name: 'Cruzeiro do Sul' },
    { id: 5, name: 'Pato Branco' },
    { id: 6, name: 'Prudentópolis' },
    { id: 7, name: 'Campo Mourão' },
    { id: 8, name: 'New York' }
];
describe('Select', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Select_1.Select, { items: items }));
        const select = component.getByTestId('select-static');
        expect(component).toBeTruthy();
        expect(select).toBeTruthy();
    });
    it('should have to render without crashing with isFetchable prop', () => {
        const component = render_1.render(react_1.default.createElement(Select_1.Select, { isFetchable: true, items: items }));
        const select = component.getByTestId('select-fechable');
        expect(component).toBeTruthy();
        expect(select).toBeTruthy();
    });
    it('should render placeholder when have placeholder prop', () => {
        const content = 'My placeholder';
        const { getByTestId } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items, placeholder: content }));
        const input = getByTestId('select-static').querySelector('input');
        expect(input).toHaveAttribute('placeholder', 'My placeholder');
    });
    it('should have svg when have loading prop', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Select_1.Select, { isFetchable: true, items: items, isLoading: true }));
        const select = getByTestId('select-fechable');
        const svg = select.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
    it('should have the same amount items of the array', () => {
        const { getByTestId, getAllByTestId } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items }));
        const select = getByTestId('input');
        react_2.fireEvent.click(select);
        expect(getAllByTestId('select-item').length).toBe(items.length);
    });
    it('should open dropdown when click him', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items }));
        const select = getByTestId('input');
        react_2.fireEvent.click(select);
        const list = container.querySelectorAll('li');
        expect(list[0]).toBeVisible();
    });
    it('should close dropdown when click a item', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items }));
        const select = getByTestId('input');
        react_2.fireEvent.click(select);
        let list = container.querySelectorAll('li');
        expect(list[0]).toBeVisible();
        react_2.fireEvent.click(list[0]);
        list = container.querySelectorAll('li');
        expect(list).toHaveLength(0);
    });
    it('should call onChange when click on item in dropdown', () => {
        const handleOnClick = jest.fn();
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items, handleSelectedItemChange: handleOnClick }));
        const select = getByTestId('input');
        react_2.fireEvent.click(select);
        const list = container.querySelectorAll('li');
        react_2.fireEvent.click(list[0]);
        expect(handleOnClick).toBeCalled();
    });
    it('should have the same amount items of the array after the search', () => {
        const { getByTestId, container } = render_1.render(react_1.default.createElement(Select_1.Select, { items: items }));
        react_2.fireEvent.change(getByTestId('input'), {
            target: { value: 'Maringá' }
        });
        const list = container.querySelectorAll('li');
        expect(list.length).toBe(1);
    });
});
