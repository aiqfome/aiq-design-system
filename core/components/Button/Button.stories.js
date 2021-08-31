"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickAction = exports.PrefixAndSufix = exports.Prefix = exports.FabIcon = exports.Fab = exports.Outlined = exports.IconButton = exports.Disabled = exports.Contained = exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const fa_1 = require("react-icons/fa");
const Button_1 = require("./Button");
const Flex_1 = require("../Flex");
const Icon_1 = require("../Icon");
exports.default = {
    component: Button_1.Button,
    title: 'Button',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Text = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Button_1.Button, { variant: 'text', palette: addon_knobs_1.select('Palette', {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
        }, 'primary'), fontWeight: addon_knobs_1.select('Font Weight', {
            Regular: 'regular',
            Medium: 'medium',
            SemiBold: 'semiBold',
            Bold: 'bold'
        }, 'regular') }, addon_knobs_1.text('Label', 'aiqfome!'))));
exports.Contained = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), variant: 'contained', palette: addon_knobs_1.select('Palette', {
                Primary: 'primary',
                Secondary: 'secondary',
                Neutral: 'neutral'
            }, 'primary'), fontWeight: addon_knobs_1.select('Font Weight', {
                Regular: 'regular',
                Medium: 'medium',
                SemiBold: 'semiBold',
                Bold: 'bold'
            }, 'regular') }, addon_knobs_1.text('Label', 'aiqfome!')))));
exports.Disabled = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), variant: 'contained', mx: 6, disabled: true, palette: 'primary' }, "contained"),
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), variant: 'outlined', mx: 6, disabled: true, palette: 'primary' }, "outlined"),
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), variant: 'fab', mx: 6, disabled: true, palette: 'primary' }, "fab"))));
exports.IconButton = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { variant: 'icon', mx: 6 },
            react_1.default.createElement(Icon_1.Icon, { color: 'primary' },
                react_1.default.createElement(fa_1.FaHamburger, { size: 40 }))),
        react_1.default.createElement(Button_1.Button, { variant: 'icon', mx: 6 },
            react_1.default.createElement(Icon_1.Icon, null,
                react_1.default.createElement(fa_1.FaHamburger, { size: 30 }))),
        react_1.default.createElement(Button_1.Button, { variant: 'icon', mx: 6 },
            react_1.default.createElement(Icon_1.Icon, { color: 'primary' },
                react_1.default.createElement(fa_1.FaHamburger, { size: 20 }))))));
exports.Outlined = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { variant: 'outlined', fullWidth: addon_knobs_1.boolean('Full Width', false), palette: addon_knobs_1.select('Palette', {
                Primary: 'primary',
                Secondary: 'secondary',
                Neutral: 'neutral'
            }, 'primary'), fontWeight: addon_knobs_1.select('Font Weight', {
                Regular: 'regular',
                Medium: 'medium',
                SemiBold: 'semiBold',
                Bold: 'bold'
            }, 'regular') }, addon_knobs_1.text('Label', 'aiqfome!')))));
exports.Fab = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { variant: 'fab', fullWidth: addon_knobs_1.boolean('Full Width', false), palette: addon_knobs_1.select('Palette', {
                Primary: 'primary',
                Secondary: 'secondary',
                Neutral: 'neutral'
            }, 'primary'), fontWeight: addon_knobs_1.select('Font Weight', {
                Regular: 'regular',
                Medium: 'medium',
                SemiBold: 'semiBold',
                Bold: 'bold'
            }, 'regular') }, addon_knobs_1.text('Label', 'aiqfome!')))));
exports.FabIcon = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Button_1.Button, { variant: 'fab', variantType: 'icon', palette: addon_knobs_1.select('Palette', {
            Primary: 'primary',
            Secondary: 'secondary',
            Neutral: 'neutral'
        }, 'primary') },
        react_1.default.createElement(fa_1.FaHamburger, null))));
exports.Prefix = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), palette: addon_knobs_1.select('Palette', {
                Primary: 'primary',
                Secondary: 'secondary',
                Neutral: 'neutral'
            }, 'primary'), variant: addon_knobs_1.select('variant', {
                Text: 'text',
                Contained: 'contained',
                Outlined: 'outlined',
                Fab: 'fab'
            }, 'text'), prefix: react_1.default.createElement(fa_1.FaHamburger, null) }, addon_knobs_1.text('Label', 'aiqfome!')))));
exports.PrefixAndSufix = () => (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
        react_1.default.createElement(Button_1.Button, { fullWidth: addon_knobs_1.boolean('Full Width', false), palette: addon_knobs_1.select('Palette', {
                Primary: 'primary',
                Secondary: 'secondary',
                Neutral: 'neutral'
            }, 'primary'), variant: addon_knobs_1.select('variant', {
                Text: 'text',
                Contained: 'contained',
                Outlined: 'outlined',
                Fab: 'fab'
            }, 'text'), prefix: react_1.default.createElement(fa_1.FaHamburger, null), sufix: react_1.default.createElement(fa_1.FaWater, null) }, addon_knobs_1.text('Label', 'aiqfome!')))));
exports.ClickAction = () => {
    const handleClick = () => {
        alert('i really want a pizza');
    };
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', height: '200px', width: '400px', border: '1px solid lightGrey' },
            react_1.default.createElement(Button_1.Button, { onClick: () => handleClick(), fullWidth: addon_knobs_1.boolean('Full Width', false), palette: addon_knobs_1.select('Palette', {
                    Primary: 'primary',
                    Secondary: 'secondary',
                    Neutral: 'neutral'
                }, 'primary'), variant: addon_knobs_1.select('variant', {
                    Text: 'text',
                    Contained: 'contained',
                    Outlined: 'outlined',
                    Fab: 'fab'
                }, 'contained'), sufix: react_1.default.createElement(fa_1.FaHamburger, null) }, addon_knobs_1.text('Label', 'click me!')))));
};
