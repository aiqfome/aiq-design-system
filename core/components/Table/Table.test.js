"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Table_1 = require("./Table");
const render_1 = require("../utils/test/render");
const data = [
    {
        firstName: 'Joe',
        lastName: 'Dae'
    },
    {
        firstName: 'Tom',
        lastName: 'Tompson'
    },
    {
        firstName: 'Tomas',
        lastName: 'Jefferson'
    }
];
const columns = [
    {
        name: 'nome',
        accessor: 'firstName'
    },
    {
        name: 'sobrenome',
        accessor: 'lastName'
    }
];
describe('Table', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Table_1.Table, { data: data, columns: columns }));
        expect(component).toBeTruthy();
    });
    it('should have the same amout of columns from the array', () => {
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Table_1.Table, { data: data, columns: columns }));
        const list = getAllByTestId('table-head');
        expect(list).toHaveLength(columns.length);
    });
    it('should have the same amout of rows from the array', () => {
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Table_1.Table, { data: data, columns: columns }));
        const list = getAllByTestId('table-row');
        expect(list).toHaveLength(data.length + 1); // plus the thead row
    });
    it('should call onChange when click on row', () => {
        const handleOnClick = jest.fn();
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Table_1.Table, { onClickRow: handleOnClick, data: data, columns: columns }));
        const list = getAllByTestId('table-row');
        react_2.fireEvent.click(list[1]);
        expect(handleOnClick).toBeCalled();
    });
    it('should call show expanded row when click on a row', () => {
        const { container, getAllByTestId } = render_1.render(react_1.default.createElement(Table_1.Table, { data: data, columns: columns, expandedRowRender: () => 'expanded row' }));
        const list = getAllByTestId('table-row');
        react_2.fireEvent.click(list[1]);
        expect(container).toHaveTextContent('expanded row');
    });
});
