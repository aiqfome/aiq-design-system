"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.InitImage = exports.Translate = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const DropFile_1 = require("./DropFile");
const Flex_1 = require("../Flex");
exports.default = {
    component: DropFile_1.DropFile,
    title: 'DropFile'
};
exports.Basic = () => {
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(DropFile_1.DropFile, { dataMaxSize: 2048, maxWidth: '680px', width: '100%' })));
};
exports.Translate = () => {
    const translate = {
        message: {
            row1: 'arraste e solte a imagem aqui',
            row2: 'ou clique para escolher'
        },
        errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
        errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
    };
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(DropFile_1.DropFile, { translate: translate, maxWidth: '680px', width: '100%' })));
};
exports.InitImage = () => {
    function handleOnChangeFile(e) {
        console.log(e);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(DropFile_1.DropFile, { dataMaxSize: 5000, initImage: 'https://cdn.startupi.com.br/wp-content/uploads/2019/12/Magalu-linx-marketplace.png', onChange: handleOnChangeFile, maxWidth: '680px', width: '100%' })));
};
exports.Error = () => {
    function handleOnChangeFile(e) {
        console.log(e);
    }
    return (react_1.default.createElement(Flex_1.Flex, { variant: 'fullCentralized' },
        react_1.default.createElement(DropFile_1.DropFile, { dataMaxSize: 5000, onChange: handleOnChangeFile, maxWidth: '680px', width: '100%', errorForm: true, errorMessage: 'Houston, we have a problem' })));
};
