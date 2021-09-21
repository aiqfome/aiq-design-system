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
exports.SubItens = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const Text_1 = require("../Text");
const Flex_1 = require("../Flex");
const Link_1 = require("../Link");
const Badge_1 = require("../Badge");
const LinkStyled = styled_components_1.default(Link_1.Link) `
  display: flex;
  flex-direction: row;
  margin: 12px 12px 8px;
  color: ${({ theme }) => theme.colors.primary} !important;
  font-size: ${({ theme }) => theme.fontSizes.default} !important;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold} !important;

  &:hover {
    background: none !important;
    color: ${({ theme }) => theme.colors.primary} !important;
    font-size: ${({ theme }) => theme.fontSizes.default} !important;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold} !important;
  }
`;
const SubItensStyled = styled_components_1.default(Flex_1.Flex) `
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ${({ sidebarOpened }) => {
    if (sidebarOpened) {
        return styled_components_1.css `
        background: #f6f6f6;

        &.hide {
          overflow: hidden;
          max-height: 0;
          padding-top: 0;
          padding-bottom: 0;
          margin-top: 0;
          margin-bottom: 0;
          transition: all 0.2s ease;
          will-change: transform;
        }

        &.show {
          overflow: hidden;
          transition: all 0.5s ease;
          will-change: transform;
        }

        a {
          color: #434343;
          padding: 12px 24px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          &:hover {
            background: ${({ theme }) => theme.colors.mediumGrey};
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 500;
          }
        }
      `;
    }
    return styled_components_1.css `
      a {
        font-size: 14px;
        color: #434343;
        padding: 6px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:hover {
          background: ${({ theme }) => theme.colors.lightGrey};
          color: ${({ theme }) => theme.colors.primary};
          font-weight: 500;
        }
      }

      ${({ theme, itemOpened, distanceTop, typeSubmenu, heightScrolledToTop }) => {
        if (itemOpened) {
            return styled_components_1.css `
            display: none;
            position: fixed;
            width: 240px;
            margin-left: 55px;
            background: #ffff;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            box-shadow: 2px 3px 4px #00000029;

            ${typeSubmenu === 'default' &&
                `
              margin-top: calc((50px + ${heightScrolledToTop}px) * -1);
            `}

            ${typeSubmenu === 'bottom' &&
                `
              position: absolute;
              top: ${distanceTop}px;
            `}

            ${typeSubmenu === 'top' &&
                `
              position: absolute;
              top: 0px;
              height: 100vh;

              ul {
                overflow-x: hidden;
                overflow-y: auto;
              }

              ul::-webkit-scrollbar {
                width: 5px;
              }

              ul::-webkit-scrollbar-track {
                background-color: ${theme.colors.white};
                -webkit-border-radius: 10px;
                border-radius: 10px;
              }

              ul::-webkit-scrollbar-thumb {
                -webkit-border-radius: 10px;
                border-radius: 10px;
                background: ${theme.colors.mediumGrey};
              }
            `}
          `;
        }
        return styled_components_1.css `
          display: none;
        `;
    }}
    `;
}}
`;
exports.SubItens = ({ item, sidebarOpened, itemOpened, heightScrolledToTop = 0 }) => {
    const [ref, setRef] = react_1.useState(null);
    const [typeSubmenu, setTypeSubmenu] = react_1.useState('default');
    const [distanceTop, setDistanceTop] = react_1.useState(0);
    react_1.useEffect(() => {
        if (ref !== null) {
            const { offsetTop, offsetHeight } = ref;
            const isOverflowBottom = window.innerHeight - offsetTop <= offsetHeight;
            if (window.innerHeight - offsetHeight < 0) {
                setTypeSubmenu('top');
            }
            else if (isOverflowBottom) {
                setDistanceTop(window.innerHeight - offsetHeight);
                setTypeSubmenu('bottom');
            }
            else {
                setDistanceTop(0);
                setTypeSubmenu('default');
            }
        }
    }, [ref, itemOpened]);
    return (react_1.default.createElement(SubItensStyled, { distanceTop: distanceTop, typeSubmenu: typeSubmenu, ref: el => setRef(el || null), heightScrolledToTop: heightScrolledToTop, flexDirection: 'column', "data-testid": 'sidebar-item', className: `${itemOpened ? 'show' : 'hide'}`, sidebarOpened: sidebarOpened, itemOpened: itemOpened },
        !sidebarOpened &&
            (item.itens ? (react_1.default.createElement(Text_1.Text, { mx: 6, mt: 6, mb: 4, cursor: 'auto', color: 'primary', fontWeight: 'semiBold' }, item.name)) : (react_1.default.createElement(LinkStyled, { href: item.href, variant: item.type ? item.type : 'internal' }, item.name))),
        item.itens && (react_1.default.createElement("ul", null, item.itens.map((subItem, index) => (react_1.default.createElement("li", { key: index },
            react_1.default.createElement(Link_1.Link, { variant: subItem.type ? subItem.type : 'internal', href: subItem.href },
                react_1.default.createElement(Text_1.Text, { cursor: 'pointer', fontSize: 'medium', px: 6, my: 2 }, subItem.name),
                subItem.badge && (react_1.default.createElement(Badge_1.Badge, { backgroundColor: 'error', color: 'white', count: subItem.badge }))))))))));
};
exports.SubItens.propTypes = {
    item: prop_types_1.default.any,
    itemOpened: prop_types_1.default.bool,
    sidebarOpened: prop_types_1.default.bool,
    heightScrolledToTop: prop_types_1.default.number
};
