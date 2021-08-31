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
exports.Loading = exports.WithSufix = exports.AutocompleteFalse = exports.Outlined = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Select_1 = require("./Select");
const Flex_1 = require("../Flex");
const md_1 = require("react-icons/md");
exports.default = {
    component: Select_1.Select,
    title: 'Select',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const itens = ['React', 'CSS', 'PHP', 'HTML'];
    function handleClickItemSelect(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Select_1.Select, { handleSelectedItemChange: handleClickItemSelect, placeholder: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens) }));
};
exports.Outlined = () => {
    const itens = ['React', 'CSS', 'PHP', 'HTML'];
    return (react_1.default.createElement(Select_1.Select, { variant: 'outlined', label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens) }));
};
exports.AutocompleteFalse = () => {
    const itens = [
        { name: 'React', id: 1 },
        { name: 'CSS', id: 2 },
        { name: 'PHP', id: 3 },
        { name: 'HTML', id: 4 }
    ];
    const [selectedItem, setSelectedItem] = react_1.useState(itens[0]);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Select_1.Select, { mr: '32px', autoComplete: false, variant: 'outlined', label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens) }),
        react_1.default.createElement(Select_1.Select, { selectedItem: selectedItem, autoComplete: false, handleSelectedItemChange: ({ selectedItem }) => setSelectedItem(selectedItem), label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens) })));
};
exports.WithSufix = () => {
    const itens = [
        { name: 'React', id: 1 },
        { name: 'CSS', id: 2 },
        { name: 'PHP', id: 3 },
        { name: 'HTML', id: 4 }
    ];
    const [selectedItem, setSelectedItem] = react_1.useState(itens[0]);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Select_1.Select, { mr: '32px', variant: 'outlined', label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens), sufix: react_1.default.createElement(md_1.MdSearch, null) }),
        react_1.default.createElement(Select_1.Select, { selectedItem: selectedItem, handleSelectedItemChange: ({ selectedItem }) => setSelectedItem(selectedItem), label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens), sufix: react_1.default.createElement(md_1.MdSearch, null) })));
};
exports.Loading = () => {
    const itens = [
        { name: 'React', id: 1 },
        { name: 'CSS', id: 2 },
        { name: 'PHP', id: 3 },
        { name: 'HTML', id: 4 }
    ];
    const [selectedItem, setSelectedItem] = react_1.useState(itens[0]);
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Select_1.Select, { mr: '32px', variant: 'outlined', isLoading: true, label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens), sufix: react_1.default.createElement(md_1.MdSearch, null) }),
        react_1.default.createElement(Select_1.Select, { selectedItem: selectedItem, isLoading: true, handleSelectedItemChange: ({ selectedItem }) => setSelectedItem(selectedItem), label: addon_knobs_1.text('label', 'aiq-design-system'), items: addon_knobs_1.object('items', itens), sufix: react_1.default.createElement(md_1.MdSearch, null) })));
};
