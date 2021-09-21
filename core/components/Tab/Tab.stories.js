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
exports.Card = exports.Contained = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Tabs_1 = require("./Tabs");
const Tab_1 = require("./Tab");
const TabPanel_1 = require("./TabPanel");
exports.default = {
    component: Tab_1.Tab,
    title: 'Tab'
};
exports.Basic = () => {
    const [value, setValue] = react_1.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Tabs_1.Tabs, { onChange: handleChange, extra: 'teste', width: '100%' },
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 0 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item One")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 1 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Two")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Three")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Three")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Three")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Three")),
            react_1.default.createElement(Tab_1.Tab, { value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 5, cursor: 'pointer' }, "Item Three"))),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 0 }, "Item One"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 1 }, "Item Two"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 2 }, "Item Three")));
};
exports.Contained = () => {
    const [value, setValue] = react_1.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Tabs_1.Tabs, { variant: 'contained', onChange: handleChange },
            react_1.default.createElement(Tab_1.Tab, { variant: 'contained', value: value, index: 0 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item One")),
            react_1.default.createElement(Tab_1.Tab, { variant: 'contained', value: value, index: 1 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item Two")),
            react_1.default.createElement(Tab_1.Tab, { variant: 'contained', value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item Three"))),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 0 }, "Item One"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 1 }, "Item Two"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 2 }, "Item Three")));
};
exports.Card = () => {
    const [value, setValue] = react_1.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
        react_1.default.createElement(Tabs_1.Tabs, { onChange: handleChange },
            react_1.default.createElement(Tab_1.Tab, { variant: 'card', value: value, index: 0 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item One")),
            react_1.default.createElement(Tab_1.Tab, { variant: 'card', value: value, index: 1 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item Two")),
            react_1.default.createElement(Tab_1.Tab, { variant: 'card', value: value, index: 2 },
                react_1.default.createElement(Text_1.Text, { fontSize: 2, cursor: 'pointer' }, "Item Three"))),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 0 }, "Item One"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 1 }, "Item Two"),
        react_1.default.createElement(TabPanel_1.TabPanel, { value: value, index: 2 }, "Item Three")));
};
