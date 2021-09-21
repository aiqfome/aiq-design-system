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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = exports.ToastProvider = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const uuid_1 = require("uuid");
const Toast_1 = require("./Toast");
const ToastContext = react_1.createContext({
    addToast: (message) => {
        throw new Error(`useToast must be used within a ToastProvider: ${message}`);
    },
    removeToast: (id) => {
        throw new Error(`useToast must be used within a ToastProvider: ${id}`);
    }
});
exports.ToastProvider = ({ children }) => {
    const [messages, setMessages] = react_1.useState([]);
    const addToast = react_1.useCallback(({ type, title, description, fixed }) => {
        const id = uuid_1.v4();
        const toast = {
            id,
            type,
            title,
            description,
            fixed
        };
        setMessages(messages => [...messages, toast]);
    }, []);
    const removeToast = react_1.useCallback(id => {
        setMessages(messages => messages.filter(message => message.id !== id));
    }, []);
    return (react_1.default.createElement(ToastContext.Provider, { value: { addToast, removeToast } },
        children,
        react_1.default.createElement(Toast_1.Toast, { messages: messages })));
};
exports.useToast = () => {
    const context = react_1.useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
exports.ToastProvider.propTypes = {
    children: prop_types_1.default.node
};
