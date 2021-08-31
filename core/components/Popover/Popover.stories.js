"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triggers = exports.ArrowState = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Popover_1 = require("./Popover");
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
exports.default = {
    component: Popover_1.Popover,
    title: 'Popover'
};
exports.Basic = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Popover_1.Popover, { arrow: true, content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "bottomCenter")),
        react_1.default.createElement(Popover_1.Popover, { arrow: true, placement: 'bottomLeft', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "bottomLeft")),
        react_1.default.createElement(Popover_1.Popover, { arrow: true, placement: 'bottomRight', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "bottomRight")),
        react_1.default.createElement(Popover_1.Popover, { arrow: true, placement: 'topCenter', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "topCenter")),
        react_1.default.createElement(Popover_1.Popover, { arrow: true, placement: 'topLeft', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "topLeft")),
        react_1.default.createElement(Popover_1.Popover, { arrow: true, placement: 'topRight', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "topRight"))));
};
exports.ArrowState = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Popover_1.Popover, { arrow: true, content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "arrow")),
        react_1.default.createElement(Popover_1.Popover, { content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "sem arrow"))));
};
exports.Triggers = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(Popover_1.Popover, { content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "passe o mouse")),
        react_1.default.createElement(Popover_1.Popover, { trigger: 'click', content: 'Im hungry' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "clique")),
        react_1.default.createElement(Popover_1.Popover, { content: 'Im hungry', trigger: 'contextMenu' },
            react_1.default.createElement(Text_1.Text, { mx: 10, cursor: 'pointer' }, "clique com bot\u00E3o direito"))));
};
