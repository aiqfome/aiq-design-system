"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const Flex_1 = require("../Flex");
const MultiSelect_1 = require("./MultiSelect");
exports.default = {
    component: MultiSelect_1.MultiSelect,
    title: 'MultiSelect'
};
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
const filters = [
    { allItems: true, name: 'todas as cidades' },
    { items: [0, 1, 2, 3, 4], name: 'unidades próprias' },
    { clear: true, name: 'limpar cidades selecionadas' }
];
exports.Basic = () => {
    const [value, setValue] = react_1.useState([items[0]]);
    function handleChangeMultiSelect({ selectedItems }) {
        setValue(selectedItems);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(MultiSelect_1.MultiSelect, { value: value, onChange: handleChangeMultiSelect, filters: filters, items: items, isLoading: false, placeholder: 'cidades do aiq', errorForm: value.length === 0, errorMessage: 'deu ruinz\u00E3o aqui' })));
};
