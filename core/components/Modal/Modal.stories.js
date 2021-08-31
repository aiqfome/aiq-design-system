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
exports.WithZIndex = exports.WithAnimation = exports.WithOutButtons = exports.Big = exports.Medium = exports.Small = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Modal_1 = require("./Modal");
const Button_1 = require("../Button");
const addon_knobs_1 = require("@storybook/addon-knobs");
exports.default = {
    component: Modal_1.Modal,
    title: 'Modal',
    decorators: [addon_knobs_1.withKnobs]
};
exports.Basic = () => {
    const [open, setOpen] = react_1.useState(false);
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: addon_knobs_1.text('title', 'Modal'), show: open, variant: addon_knobs_1.select('Variant', { Small: 'small', Medium: 'medium', Big: 'big' }, 'medium'), onClose: () => setOpen(false), okButton: addon_knobs_1.object('okButton', okButton), cancelButton: addon_knobs_1.object('cancelButton', cancelButton) },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.Small = () => {
    const [open, setOpen] = react_1.useState(false);
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal', variant: 'small', show: open, onClose: () => setOpen(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.Medium = () => {
    const [open, setOpen] = react_1.useState(false);
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal', show: open, variant: 'medium', onClose: () => setOpen(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.Big = () => {
    const [open, setOpen] = react_1.useState(false);
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal', variant: 'big', show: open, onClose: () => setOpen(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.WithOutButtons = () => {
    const [open, setOpen] = react_1.useState(false);
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal', show: open, onClose: () => setOpen(false) },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.WithAnimation = () => {
    const [open, setOpen] = react_1.useState(false);
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    function handleShowModal() {
        setOpen(!open);
    }
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal With Animation"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal', animation: true, show: open, onClose: () => setOpen(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
exports.WithZIndex = () => {
    const [openModal1, setOpenModal1] = react_1.useState(false);
    const [openModal2, setOpenModal2] = react_1.useState(false);
    function handleShowModal() {
        setOpenModal1(!openModal1);
    }
    const okButton = {
        label: 'ok',
        function: () => {
            console.log('ok');
        },
        visible: true
    };
    const cancelButton = {
        label: 'cancel',
        function: () => {
            console.log('cancel');
        },
        visible: true
    };
    return (react_1.default.createElement(Flex_1.Flex, null,
        react_1.default.createElement(Button_1.Button, { palette: 'primary', onClick: handleShowModal, variant: 'contained' }, "Show Modal"),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal 1', animation: true, show: openModal1, onClose: () => setOpenModal1(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', flexDirection: 'column' },
                react_1.default.createElement(Text_1.Text, { marginBottom: 16 }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),
                react_1.default.createElement(Button_1.Button, { onClick: () => setOpenModal2(true), variant: 'contained', palette: 'secondary' }, "Open Modal 2"))),
        react_1.default.createElement(Modal_1.Modal, { title: 'Modal 2', animation: true, show: openModal2, zIndex: 2001, onClose: () => setOpenModal2(false), okButton: okButton, cancelButton: cancelButton },
            react_1.default.createElement(Text_1.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))));
};
