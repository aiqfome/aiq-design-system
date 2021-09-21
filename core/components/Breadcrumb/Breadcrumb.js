"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const Flex_1 = require("../Flex");
const Link_1 = require("../Link");
const Text_1 = require("../Text");
const Icon_1 = require("../Icon");
const BreadcrumbItem_1 = require("./BreadcrumbItem");
const BreadcrumbStyled = styled_components_1.default.ul `
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
exports.Breadcrumb = ({ routes }) => {
    const crumbs = routes.filter(r => r.name || r.icon);
    return (react_1.default.createElement(BreadcrumbStyled, null, crumbs.length &&
        crumbs.map((crumb, index) => (react_1.default.createElement(BreadcrumbItem_1.BreadcrumbItem, { "data-testid": 'crumb-item', overlay: crumb.overlay, key: index }, crumb.path ? (react_1.default.createElement(Link_1.Link, { "data-testid": 'crumb-item-link', ml: crumb.icon ? '5px' : '0', variant: crumb.type || 'internal', href: crumb.path },
            react_1.default.createElement(Flex_1.Flex, null,
                react_1.default.createElement(Icon_1.Icon, { mr: '5px' }, crumb.icon),
                crumb.name))) : (react_1.default.createElement(react_1.default.Fragment, null,
            crumb.icon,
            react_1.default.createElement(Text_1.Text, { ml: crumb.icon ? '5px' : '0', cursor: 'default' }, crumb.name))))))));
};
exports.Breadcrumb.defaultProps = {
    routes: []
};
exports.Breadcrumb.propTypes = {
    routes: prop_types_1.default.array.isRequired
};
