"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variants = exports.Sizes = exports.Disabled = exports.WithOnePages = exports.WithZeroPages = exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Flex_1 = require("../Flex");
const Pagination_1 = require("./Pagination");
exports.default = {
    component: Pagination_1.Pagination,
    title: 'Pagination'
};
exports.Basic = () => {
    return react_1.default.createElement(Pagination_1.Pagination, { count: 10 });
};
exports.WithZeroPages = () => {
    return react_1.default.createElement(Pagination_1.Pagination, { count: 0 });
};
exports.WithOnePages = () => {
    return react_1.default.createElement(Pagination_1.Pagination, { count: 1 });
};
exports.Disabled = () => {
    return react_1.default.createElement(Pagination_1.Pagination, { disabled: true, count: 10 });
};
exports.Sizes = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Flex_1.Flex, { mb: '20px', variant: 'centralized' },
            react_1.default.createElement(Pagination_1.Pagination, { count: 10, size: 'small' })),
        react_1.default.createElement(Flex_1.Flex, { mb: '20px', variant: 'centralized' },
            react_1.default.createElement(Pagination_1.Pagination, { count: 10000, size: 'default' })),
        react_1.default.createElement(Flex_1.Flex, { variant: 'centralized' },
            react_1.default.createElement(Pagination_1.Pagination, { count: 10, size: 'large' }))));
};
exports.Variants = () => {
    function onChangePage(page) {
        console.log(page);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', mb: '20px' },
            react_1.default.createElement(Pagination_1.Pagination, { variant: 'noCount', onChange: onChangePage, size: 'large' })),
        react_1.default.createElement(Flex_1.Flex, { variant: 'centralized' },
            react_1.default.createElement(Pagination_1.Pagination, { count: 8, size: 'large', onChange: onChangePage }))));
};
