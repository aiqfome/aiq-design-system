"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Divider_1 = require("../Divider");
const Flex_1 = require("../Flex");
const Text_1 = require("../Text");
const Tab_1 = require("../Tab");
const StyledContainer = (_a) => {
    var { children, tabIndex, tabs = [] } = _a, props = __rest(_a, ["children", "tabIndex", "tabs"]);
    let border = '12px';
    if (tabs.length && tabIndex === 0) {
        border = '0 12px 12px 12px';
    }
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({ borderRadius: border, flexDirection: 'column', backgroundColor: 'white', border: '1px solid lightGrey', mt: tabs.length && '-1px' }, props), children));
};
const ContainerWrapper = (_a) => {
    var { title, header, children } = _a, props = __rest(_a, ["title", "header", "children"]);
    if (title) {
        return (react_1.default.createElement(StyledContainer, Object.assign({ "data-testid": 'container' }, props),
            react_1.default.createElement(Text_1.Text, { "data-testid": 'container-text', color: 'almostBlack', fontWeight: 'medium', fontSize: 'xxlarge', p: 10 }, title),
            react_1.default.createElement(Divider_1.Divider, null),
            children));
    }
    if (header) {
        return (react_1.default.createElement(StyledContainer, Object.assign({ "data-testid": 'container' }, props),
            header,
            react_1.default.createElement(Divider_1.Divider, null),
            children));
    }
    return (react_1.default.createElement(StyledContainer, Object.assign({ "data-testid": 'container' }, props), children));
};
exports.Container = (_a) => {
    var { children, tabIndex, tabs = [], tabsExtra, onChangeTab, containerProps } = _a, props = __rest(_a, ["children", "tabIndex", "tabs", "tabsExtra", "onChangeTab", "containerProps"]);
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({ flexDirection: 'column' }, containerProps),
        tabs.length > 0 && (react_1.default.createElement(Tab_1.Tabs, { mr: '10px', pr: '15px', "data-testid": 'container-tab', variant: 'card', extra: tabsExtra, onChange: onChangeTab }, tabs.map((tab, index) => (react_1.default.createElement(Tab_1.Tab, Object.assign({}, tab, { "data-testid": 'container-tab-item', variant: 'card', value: tabIndex, key: tab.index || index, index: tab.index || index }), tab.content))))),
        react_1.default.createElement(ContainerWrapper, Object.assign({ tabIndex: tabIndex, tabs: tabs }, props), children)));
};
StyledContainer.propTypes = {
    tabs: prop_types_1.default.array,
    children: prop_types_1.default.node,
    tabIndex: prop_types_1.default.number
};
exports.Container.propTypes = {
    tabs: prop_types_1.default.array,
    header: prop_types_1.default.node,
    title: prop_types_1.default.string,
    tabsExtra: prop_types_1.default.any,
    children: prop_types_1.default.node,
    tabIndex: prop_types_1.default.number,
    onChangeTab: prop_types_1.default.func,
    containerProps: prop_types_1.default.object
};
ContainerWrapper.propTypes = {
    tabs: prop_types_1.default.array,
    header: prop_types_1.default.node,
    title: prop_types_1.default.string,
    children: prop_types_1.default.node
};
