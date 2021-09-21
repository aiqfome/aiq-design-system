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
exports.useTheme = exports.ThemeProvider = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = require("styled-components");
const prop_types_1 = __importDefault(require("prop-types"));
const theme_1 = __importDefault(require("./theme"));
const styles_1 = __importDefault(require("../global/styles"));
const popover_1 = __importDefault(require("../global/popover"));
const actions_1 = __importDefault(require("../global/actions"));
const styleReactDatesOverrides_1 = __importDefault(require("./styleReactDatesOverrides"));
const ThemeContext = react_1.createContext({
    theme: () => {
        throw new Error(`useTheme must be used within a ThemeProvider`);
    },
    setTheme: (theme) => {
        throw new Error(`useTheme must be used within a ThemeProvider: ${theme}`);
    }
});
exports.ThemeProvider = ({ children, defaultTheme }) => {
    const [theme, setTheme] = react_1.useState(defaultTheme || theme_1.default);
    return (react_1.default.createElement(ThemeContext.Provider, { value: { theme, setTheme } },
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(popover_1.default, null),
            react_1.default.createElement(actions_1.default, null),
            react_1.default.createElement(styles_1.default, null),
            react_1.default.createElement(styleReactDatesOverrides_1.default, null),
            children,
            react_1.default.createElement("div", { id: 'modal-root' }))));
};
exports.ThemeProvider.propTypes = {
    children: prop_types_1.default.any,
    defaultTheme: prop_types_1.default.any
};
exports.useTheme = () => {
    const context = react_1.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
