"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const render_1 = require("../utils/test/render");
const Pagination_1 = require("../Pagination");
describe('Pagination', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Pagination_1.Pagination, null));
        expect(component).toBeTruthy();
    });
    it('should not render when count is zero', () => {
        const { container } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 0 }));
        const paginationsItens = container.querySelectorAll('.__pagination-item');
        expect(paginationsItens.length).toBe(0);
    });
    it('should render only a page when count is 1', () => {
        const { container } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 1 }));
        const paginationsItens = container.querySelectorAll('.__pagination-item');
        expect(paginationsItens.length).toBe(3);
    });
    it('should call onChange when click in next page or return page ', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 10, onChange: handleOnChange }));
        const itemNext = getByTestId('pagination-item-next');
        const itemReturn = getByTestId('pagination-item-return');
        const itemPage10 = getByTestId('pagination-item-10');
        react_2.fireEvent.click(itemNext);
        expect(handleOnChange).toHaveBeenLastCalledWith(2);
        react_2.fireEvent.click(itemPage10);
        expect(handleOnChange).toHaveBeenLastCalledWith(10);
        react_2.fireEvent.click(itemReturn);
        expect(handleOnChange).toHaveBeenLastCalledWith(9);
        expect(handleOnChange).toHaveBeenCalledTimes(3);
    });
    it('should not call onChange when click in next page or return page and paginations is disabled', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 10, disabled: true, onChange: handleOnChange }));
        const itemNext = getByTestId('pagination-item-next');
        const itemReturn = getByTestId('pagination-item-return');
        const itemPage10 = getByTestId('pagination-item-10');
        react_2.fireEvent.click(itemNext);
        react_2.fireEvent.click(itemPage10);
        react_2.fireEvent.click(itemReturn);
        expect(handleOnChange).toHaveBeenCalledTimes(0);
    });
    it('should have class __pagination-size-default when size is null', () => {
        const { container } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 10 }));
        const paginatorItem = container.querySelector('.__pagination-item');
        expect(paginatorItem).toHaveClass('__pagination-size-default');
    });
    it('should have class __pagination-size-small when size is small', () => {
        const { container } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { size: 'small', count: 10 }));
        const paginatorItem = container.querySelector('.__pagination-item');
        expect(paginatorItem).toHaveClass('__pagination-size-small');
    });
    it('should have class __pagination-size-large when size is large', () => {
        const { container } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { size: 'large', count: 10 }));
        const paginatorItem = container.querySelector('.__pagination-item');
        expect(paginatorItem).toHaveClass('__pagination-size-large');
    });
    it('should not have infinite pages when variant is default', () => {
        const handleOnChange = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(Pagination_1.Pagination, { count: 8, onChange: handleOnChange }));
        const itemNext = getByTestId('pagination-item-next');
        let index = 0;
        while (index < 100) {
            index++;
            react_2.fireEvent.click(itemNext);
        }
        expect(handleOnChange).not.toHaveBeenLastCalledWith(101);
        expect(handleOnChange).toHaveBeenLastCalledWith(8);
    });
});
