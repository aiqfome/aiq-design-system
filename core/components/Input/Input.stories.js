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
exports.Masked = exports.Styled = exports.Tags = exports.Prefix = exports.Sufix = exports.WithValue = exports.ErrorMessage = exports.Password = exports.Disabled = exports.Outlined = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const md_1 = require("react-icons/md");
const Box_1 = require("../Box");
const Flex_1 = require("../Flex");
const Input_1 = require("./Input");
exports.default = {
    component: Input_1.Input,
    title: 'Input',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito'), type: addon_knobs_1.select('Type', {
            Text: 'text',
            Password: 'password'
        }, 'text') })));
exports.Outlined = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { variant: 'outlined', errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito'), label: addon_knobs_1.text('label', 'aiqfome'), type: addon_knobs_1.select('Type', {
            Text: 'text',
            Password: 'password'
        }, 'text') })));
exports.Disabled = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), placeholder: addon_knobs_1.text('placeholder', 'duas pizzas é muito'), type: addon_knobs_1.select('Type', {
            Text: 'text',
            Password: 'password'
        }, 'text'), disabled: true, variant: addon_knobs_1.select('Variant', {
            Outlined: 'outlined',
            Default: 'default'
        }, 'outlined') })));
exports.Password = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', type: 'password' }),
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', variant: 'outlined', type: 'password' })));
exports.ErrorMessage = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', errorForm: true, errorMessage: 'Not Allowed' })));
exports.WithValue = () => {
    const [value, setValue] = react_1.useState('hamburger');
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', value: value, onChange: event => {
                setValue(event.target.value);
            } })));
};
exports.Sufix = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', sufix: react_1.default.createElement(md_1.MdSearch, null) }),
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', variant: 'outlined', sufix: react_1.default.createElement(md_1.MdSearch, null) })));
exports.Prefix = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { label: 'Aiqfome', prefix: react_1.default.createElement(md_1.MdSearch, { color: '#BABCBE' }) })));
exports.Tags = () => (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column', variant: 'fullCentralized' },
    react_1.default.createElement(Box_1.Box, { maxWidth: '600px', width: '100%', mb: 8 },
        react_1.default.createElement(Input_1.Input, { placeholder: 'digite o valor e d\u00EA enter para criar tags', label: 'Aiqfome', variant: 'tags', width: '100%' })),
    react_1.default.createElement(Box_1.Box, { maxWidth: '600px', width: '100%', mb: 8 },
        react_1.default.createElement(Input_1.Input, { placeholder: 'digite o valor e d\u00EA enter para criar tags', label: 'Aiqfome', variant: 'tags', width: '100%', value: '10,20' }))));
exports.Styled = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { width: '530px', border: 'none', placeholder: 'procure aqui alguma coisa desse painelz\u00E3o da p*$%#', backgroundColor: '#F8F8F8', label: 'Aiqfome', prefix: react_1.default.createElement(md_1.MdSearch, { color: '#BABCBE' }) })));
exports.Masked = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Input_1.Input, { errorForm: addon_knobs_1.boolean('errorForm', false), errorMessage: addon_knobs_1.text('errorMessage', 'message error'), label: addon_knobs_1.text('label', 'aiqfome'), mask: addon_knobs_1.text('mask', '999,99'), placeholder: addon_knobs_1.text('placeholder', 'aiqfome'), type: addon_knobs_1.select('Type', {
            Text: 'text',
            Password: 'password'
        }, 'text') })));
