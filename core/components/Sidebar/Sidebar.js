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
exports.Sidebar = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const Divider_1 = require("../Divider");
const Flex_1 = require("../Flex");
const Item_1 = require("./Item");
const Items = styled_components_1.default.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  direction: ltr;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.mediumGrey};
  }
`;
const SidebarStyled = styled_components_1.default(Flex_1.Flex) `
  box-shadow: 0px 3px 15px #0000001a;
  height: 100vh;
  max-width: ${({ opened }) => (opened ? '340px' : '60px')};
  transition: all 0.5s ease;
  will-change: transform;
  position: fixed;
`;
exports.Sidebar = (_a) => {
    var { data, header, opened = false } = _a, props = __rest(_a, ["data", "header", "opened"]);
    const [openItem, setOpenItem] = react_1.useState('');
    const [heightScrolledToTop, setHeightScrolledToTop] = react_1.useState(0);
    react_1.useEffect(() => {
        function listenWhenSidebarScroll(event) {
            setHeightScrolledToTop(event.target.scrollTop);
        }
        const elementItensSidebar = document.querySelectorAll('#items-sidebar')[0];
        elementItensSidebar.addEventListener('scroll', listenWhenSidebarScroll);
        return () => {
            elementItensSidebar.removeEventListener('scroll', listenWhenSidebarScroll);
        };
    }, []);
    const toggleItem = (value = '') => {
        setOpenItem(openItem === value ? '' : value);
    };
    return (react_1.default.createElement(SidebarStyled, Object.assign({ width: '100%', backgroundColor: '#fff', maxWidth: '340px', flexDirection: 'column', opened: opened, "data-testid": 'sidebar', className: opened ? 'show' : 'hidden' }, props), data.length >= 0 && (react_1.default.createElement(react_1.default.Fragment, null,
        header && header,
        react_1.default.createElement(Divider_1.Divider, { width: '100%', marginBottom: '16px' }),
        react_1.default.createElement(Items, { id: 'items-sidebar' }, data.map((item, index) => (react_1.default.createElement(Item_1.Item, { key: index, item: item, sidebarOpened: opened, openItem: openItem === index, toggleItem: () => toggleItem(index), heightScrolledToTop: heightScrolledToTop }))))))));
};
exports.Sidebar.propTypes = {
    data: prop_types_1.default.any.isRequired,
    opened: prop_types_1.default.bool,
    header: prop_types_1.default.any
};
