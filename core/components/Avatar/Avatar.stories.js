"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rounded = exports.WithUrl = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const Avatar_1 = require("./Avatar");
exports.default = {
    component: Avatar_1.Avatar,
    title: 'Avatar',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => (react_1.default.createElement(Avatar_1.Avatar, { alt: addon_knobs_1.text('Label', 'Avatar'), src: addon_knobs_1.text('src', ''), palette: addon_knobs_1.select('palette', { Primary: 'primary', Secondary: 'secondary' }, 'primary') }));
exports.WithUrl = () => (react_1.default.createElement(Avatar_1.Avatar, { palette: addon_knobs_1.select('palette', { Primary: 'primary', Secondary: 'secondary' }, 'primary'), src: addon_knobs_1.text('src', 'https://lh3.googleusercontent.com/rALGk_PU3JMf_5NS5FEYScz9zxgjRBNePvMheCnHIO_lrSs089QcwguwqRVaDLWWAQ'), alt: addon_knobs_1.text('alt', 'Avatar') }));
exports.Rounded = () => (react_1.default.createElement(Avatar_1.Avatar, { palette: addon_knobs_1.select('palette', { Primary: 'primary', Secondary: 'secondary' }, 'primary'), alt: addon_knobs_1.text('alt', 'Avatar'), variant: 'rounded' }));
