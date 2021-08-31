"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithImages = exports.Selected = exports.Disabled = exports.Opened = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Dropdown_1 = require("./Dropdown");
const Flex_1 = require("../Flex");
const brazil_svg_1 = __importDefault(require("../../assets/flags/brazil.svg"));
const chile_svg_1 = __importDefault(require("../../assets/flags/chile.svg"));
const paraguay_svg_1 = __importDefault(require("../../assets/flags/paraguay.svg"));
const uruguay_svg_1 = __importDefault(require("../../assets/flags/uruguay.svg"));
exports.default = {
    component: Dropdown_1.Dropdown,
    title: 'Dropdown',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const itens = [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 }
    ];
    function handleChangeDropdown(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Dropdown_1.Dropdown, { label: addon_knobs_1.text('label', 'Dropdown'), disabled: addon_knobs_1.boolean('disabled', false), itens: addon_knobs_1.object('itens', itens), width: 240, onChange: handleChangeDropdown })));
};
exports.Opened = () => {
    const itens = [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 }
    ];
    const label = 'Dropdown';
    function handleChangeDropdown(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Dropdown_1.Dropdown, { label: label, opened: true, width: 240, itens: itens, onChange: handleChangeDropdown })));
};
exports.Disabled = () => {
    const itens = [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 }
    ];
    const label = 'Dropdown';
    function handleChangeDropdown(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Dropdown_1.Dropdown, { disabled: true, label: label, width: 240, itens: itens, onChange: handleChangeDropdown })));
};
exports.Selected = () => {
    const itens = [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 }
    ];
    const label = 'Dropdown';
    function handleChangeDropdown(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Dropdown_1.Dropdown, { selected: 2, label: label, width: 240, itens: itens, onChange: handleChangeDropdown })));
};
exports.WithImages = () => {
    const itens = [
        {
            label: react_1.default.createElement("img", { width: '24px', height: '24px', src: brazil_svg_1.default }),
            value: 1
        },
        {
            label: react_1.default.createElement("img", { src: chile_svg_1.default, width: '24px', height: '24px' }),
            value: 2
        },
        {
            label: react_1.default.createElement("img", { src: paraguay_svg_1.default, width: '24px', height: '24px' }),
            value: 3
        },
        {
            label: react_1.default.createElement("img", { src: uruguay_svg_1.default, width: '24px', height: '24px' }),
            value: 4
        }
    ];
    const label = 'Dropdown';
    function handleChangeDropdown(item) {
        console.log(item);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Dropdown_1.Dropdown, { selected: 2, label: label, itens: itens, onChange: handleChangeDropdown })));
};
