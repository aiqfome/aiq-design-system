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
exports.WithTabs = exports.WithHeader = exports.WithTitle = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = require("../Button");
const Flex_1 = require("../Flex");
const Input_1 = require("../Input");
const Text_1 = require("../Text");
const Container_1 = require("./Container");
const Tab_1 = require("../Tab");
exports.default = {
    component: Container_1.Container,
    title: 'Container'
};
exports.Basic = () => (react_1.default.createElement(Container_1.Container, null,
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', p: 15 },
        react_1.default.createElement(Text_1.Text, null, "my content (:"))));
exports.WithTitle = () => (react_1.default.createElement(Container_1.Container, { title: 'Just a container!' },
    react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', p: 15 },
        react_1.default.createElement(Text_1.Text, null, "my content (:"))));
exports.WithHeader = () => {
    const Header = () => (react_1.default.createElement(Flex_1.Flex, { justifyContent: 'space-between', p: 10 },
        react_1.default.createElement(Text_1.Text, { color: 'almostBlack', fontSize: 'xxlarge' }, "Just a title"),
        react_1.default.createElement(Flex_1.Flex, null,
            react_1.default.createElement(Input_1.Input, { placeholder: 'value' }),
            react_1.default.createElement(Button_1.Button, { ml: 5, variant: 'contained', palette: 'primary' }, "Filtrar"))));
    return (react_1.default.createElement(Container_1.Container, { header: react_1.default.createElement(Header, null) },
        react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', p: 15 },
            react_1.default.createElement(Text_1.Text, null, "my content (:"))));
};
exports.WithTabs = () => {
    const [tabIndex, setTabIndex] = react_1.useState(0);
    const tabs = [
        {
            index: 0,
            content: 'pizza'
        },
        {
            index: 1,
            content: 'burguer'
        }
    ];
    const onChange = (_, index) => {
        setTabIndex(index);
    };
    return (react_1.default.createElement(Container_1.Container, { tabs: tabs, tabIndex: tabIndex, onChangeTab: onChange, tabsExtra: 'conte\u00FAdo extra' },
        react_1.default.createElement(Tab_1.TabPanel, { value: tabIndex, index: 0 },
            react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', flex: 1, p: 15 },
                react_1.default.createElement(Text_1.Text, null, "aqui tem pizza"))),
        react_1.default.createElement(Tab_1.TabPanel, { value: tabIndex, index: 1 },
            react_1.default.createElement(Flex_1.Flex, { variant: 'centralized', flex: 1, p: 15 },
                react_1.default.createElement(Text_1.Text, null, "aqui tem v\u00E1rios burguers")))));
};
