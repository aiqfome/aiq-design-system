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
exports.Item = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importStar(require("styled-components"));
const md_1 = require("react-icons/md");
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Link_1 = require("../Link");
const Icon_1 = require("../Icon");
const Badge_1 = require("../Badge");
const SubItens_1 = require("./SubItens");
const ItemStyled = styled_components_1.default.li `
  transition: 0.3ms;

  ${({ isOpen }) => {
    if (isOpen) {
        return styled_components_1.css `
        &:hover div {
          display: flex !important;
        }
      `;
    }
}}

  ${({ theme, active }) => active &&
    styled_components_1.css `
      svg {
        color: ${theme.colors.primary};
      }
    `}

  &:hover {
    cursor: pointer;

    ${({ theme, sidebarOpened }) => !sidebarOpened &&
    styled_components_1.css `
        svg {
          color: ${theme.colors.primary};
        }
      `};

    background: ${({ theme, sidebarOpened }) => sidebarOpened ? theme.colors.lightGrey : theme.colors.white};
  }
`;
const LinkStyled = styled_components_1.default(Link_1.Link) `
  padding: 16px 22px;
  display: flex;
  flex-direction: row;
`;
exports.Item = ({ item, openItem, toggleItem, sidebarOpened = false, heightScrolledToTop }) => {
    const [isOpen, setIsOpen] = react_1.useState(false);
    const location = react_router_dom_1.useLocation();
    function computeBadgeAllItens(item) {
        let value = 0;
        if (item.itens) {
            item.itens.forEach(subItem => {
                if (subItem.badge)
                    value += subItem.badge;
            });
        }
        if (item.badge) {
            value += item.badge;
        }
        return value;
    }
    const badgeAllItens = react_1.useMemo(() => computeBadgeAllItens(item), [item]);
    const changeVisibilitySubItem = () => {
        if (sidebarOpened) {
            setIsOpen(value => !value);
            toggleItem();
        }
    };
    function isItemActive() {
        let active = false;
        if (item.href) {
            active = location.pathname.includes(item.href);
            if (item.exact)
                active = location.pathname === item.href;
        }
        item.itens &&
            item.itens.forEach(subItem => {
                if (!active) {
                    active = location.pathname.includes(subItem.href);
                    if (item.exact)
                        active = location.pathname === subItem.href;
                }
            });
        return active;
    }
    const ItemWrapper = ({ children }) => {
        if (item.itens && item.itens.length > 0) {
            return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', onClick: changeVisibilitySubItem }, children));
        }
        if (item.callback) {
            return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', onClick: item.callback }, children));
        }
        return (react_1.default.createElement(LinkStyled, { variant: item.type ? item.type : 'internal', href: item.href }, children));
    };
    ItemWrapper.propTypes = {
        children: prop_types_1.default.any
    };
    return (react_1.default.createElement(ItemStyled, { isOpen: isOpen, active: isItemActive(), sidebarOpened: sidebarOpened, onMouseEnter: () => !sidebarOpened && setIsOpen(true), onMouseLeave: () => !sidebarOpened && setIsOpen(false) },
        react_1.default.createElement(ItemWrapper, null,
            react_1.default.createElement(Icon_1.Icon, { marginRight: '22px', color: sidebarOpened ? 'primary' : 'grey' }, item.icon),
            sidebarOpened && (react_1.default.createElement(Flex_1.Flex, { flex: 1, justifyContent: 'space-between' },
                react_1.default.createElement(Flex_1.Flex, { flex: 1 },
                    react_1.default.createElement(Text_1.Text, { cursor: 'pointer', color: 'darkerGrey' }, item.name)),
                badgeAllItens > 0 && !openItem && (react_1.default.createElement(Badge_1.Badge, { backgroundColor: 'error', color: 'white', count: badgeAllItens })),
                item.itens && (react_1.default.createElement(Icon_1.Icon, { color: 'primary' }, openItem ? (react_1.default.createElement(md_1.MdExpandLess, { size: 18 })) : (react_1.default.createElement(md_1.MdExpandMore, { size: 18 }))))))),
        react_1.default.createElement(SubItens_1.SubItens, { item: item, heightScrolledToTop: heightScrolledToTop, sidebarOpened: sidebarOpened, itemOpened: sidebarOpened ? openItem : isOpen })));
};
exports.Item.propTypes = {
    item: prop_types_1.default.any.isRequired,
    openItem: prop_types_1.default.bool.isRequired,
    toggleItem: prop_types_1.default.func.isRequired,
    sidebarOpened: prop_types_1.default.bool.isRequired,
    heightScrolledToTop: prop_types_1.default.number
};
