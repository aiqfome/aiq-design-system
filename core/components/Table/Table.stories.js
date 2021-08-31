"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithContainer = exports.WithClickAction = exports.WithDefaultExpandedRow = exports.WithExpandedRow = exports.WithScroll = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Table_1 = require("./Table");
const Flex_1 = require("../Flex");
const Badge_1 = require("../Badge");
const Container_1 = require("../Container");
exports.default = {
    component: Table_1.Table,
    title: 'Table'
};
const renderBadge = value => {
    return (react_1.default.createElement(Badge_1.Badge, { variant: 'label', backgroundColor: 'primary' }, value));
};
const data = [
    {
        firstName: 'Joe',
        lastName: 'Dae',
        age: '20',
        friends: '0',
        place: 'casa da mãe joana',
        job: 'desenvolvedor'
    },
    {
        firstName: 'Tom',
        lastName: 'Tompson',
        age: '40',
        friends: '1000',
        place: 'não sabemos com certeza',
        job: 'contador'
    },
    {
        firstName: 'Max',
        lastName: 'Maximun',
        age: '24',
        friends: '200',
        place: 'não sei, qualquer lugar',
        job: 'design',
        teste: 'teste'
    }
];
const columns = [
    {
        name: 'nome',
        accessor: 'firstName' // used as index in data array
    },
    {
        name: 'sobrenome',
        accessor: 'lastName'
    },
    {
        name: 'idade',
        align: 'center',
        accessor: 'age',
        renderCell: renderBadge // special render to data value (value, rowValues) => newValue
    },
    {
        name: 'amigos',
        align: 'center',
        accessor: 'friends'
    },
    {
        name: 'lugar preferido',
        width: '150px',
        wrap: true,
        accessor: 'place'
    },
    {
        name: 'cargo',
        align: 'center',
        accessor: 'job'
    }
];
exports.Basic = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', backgroundColor: '#FFF' },
        react_1.default.createElement(Table_1.Table, { hoverable: false, data: data, columns: columns })));
};
exports.WithScroll = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', backgroundColor: '#FFF' },
        react_1.default.createElement(Table_1.Table, { scroll: '1000px', data: data, columns: columns })));
};
exports.WithExpandedRow = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', backgroundColor: '#FFF' },
        react_1.default.createElement(Table_1.Table, { data: data, columns: columns, expandedRowRender: row => `eu amo ser ${row.job}` })));
};
exports.WithDefaultExpandedRow = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', backgroundColor: '#FFF' },
        react_1.default.createElement(Table_1.Table, { data: data, renderExpanded: true, columns: columns, onRowBackground: row => (row.age > 21 ? 'lightGrey' : ''), expandedRowRender: row => (row.age > 21 ? `eu amo ser ${row.job}` : '') })));
};
exports.WithClickAction = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized', backgroundColor: '#FFF' },
        react_1.default.createElement(Table_1.Table, { data: data, columns: columns, onClickRow: row => console.log('todas as infos da row:', row) })));
};
exports.WithContainer = () => {
    return (react_1.default.createElement(Container_1.Container, { title: 'My Table!' },
        react_1.default.createElement(Flex_1.Flex, { flex: 1, flexDirection: 'column', m: '24px' },
            react_1.default.createElement(Table_1.Table, { data: data, columns: columns }))));
};
