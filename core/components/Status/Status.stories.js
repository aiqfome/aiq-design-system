"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_1 = __importDefault(require("react"));
const Flex_1 = require("../Flex");
const Status_1 = require("./Status");
exports.default = {
    component: Status_1.Status,
    title: 'Status'
};
exports.Basic = () => (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column', variant: 'fullCentralized' },
    react_1.default.createElement(Status_1.Status, null, "status default"),
    react_1.default.createElement(Status_1.Status, { statusColor: 'primary' }, "primary"),
    react_1.default.createElement(Status_1.Status, { statusColor: 'success' }, "success"),
    react_1.default.createElement(Status_1.Status, { statusColor: 'info' }, "information"),
    react_1.default.createElement(Status_1.Status, { statusColor: 'warning' }, "warning"),
    react_1.default.createElement(Status_1.Status, { statusColor: 'error' }, "error")));
