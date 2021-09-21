"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_spring_1 = require("react-spring");
const styled_components_1 = __importDefault(require("styled-components"));
const ToastContent_1 = require("./ToastContent");
const Container = styled_components_1.default.div `
  display: ${({ messages }) => messages && messages.length > 0 ? 'block' : 'none'};
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;
exports.Toast = ({ messages }) => {
    const messagesWithTransitions = react_spring_1.useTransition(messages, message => message.id, {
        from: { right: '-120%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-120%', opacity: 0 }
    });
    return (react_1.default.createElement(Container, { messages: messages, style: { zIndex: 9999999 }, "data-testid": 'toast-container' }, messagesWithTransitions.map(({ item, key, props }) => (react_1.default.createElement(ToastContent_1.ToastContent, Object.assign({ key: key, message: item }, props))))));
};
exports.Toast.propTypes = {
    messages: prop_types_1.default.array
};
