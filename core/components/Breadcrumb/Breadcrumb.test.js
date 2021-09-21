"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const react_2 = require("@testing-library/react");
const render_1 = require("../utils/test/render");
const Breadcrumb_1 = require("../Breadcrumb");
const Link_1 = require("../Link");
const Flex_1 = require("../Flex");
describe('Breadcrumb', () => {
    it('should have to render without crashing', () => {
        const routes = [
            {
                name: 'início',
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                path: '#',
                name: 'relatório'
            },
            {
                path: '#',
                name: 'pedidos'
            }
        ];
        const component = render_1.render(react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: routes }));
        expect(component).toBeTruthy();
    });
    it('should have the same number of items from the routes property', () => {
        const routes = [
            {
                name: 'início',
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                path: '#',
                name: 'relatório'
            },
            {
                path: '#',
                name: 'pedidos'
            }
        ];
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: routes }));
        expect(getAllByTestId('crumb-item').length).toBe(routes.length);
    });
    it('should show subitems when has mouse hover on item father', () => {
        const menu = (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column' },
            react_1.default.createElement(Link_1.Link, { padding: '4px', href: '#' }, "Item 1"),
            react_1.default.createElement(Link_1.Link, { padding: '4px', href: '#' }, "Item 2")));
        const routes = [
            {
                name: 'início',
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                path: '#',
                overlay: menu,
                name: 'relatório'
            },
            {
                path: '#',
                name: 'pedidos'
            }
        ];
        const { getByTestId } = render_1.render(react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: routes }));
        const overlayContent = getByTestId('overlay-content');
        expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-hidden');
        const crumbItemOverflow = getByTestId('crumb-item-overflow');
        react_2.fireEvent.mouseOver(crumbItemOverflow);
        expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-visible');
        react_2.fireEvent.mouseOut(crumbItemOverflow);
        expect(overlayContent).toHaveClass('__breadcrumb-item-overflow-hidden');
    });
    it('should have the same number of links from the routes property ', () => {
        const routes = [
            {
                name: 'início',
                icon: react_1.default.createElement(md_1.MdHome, null)
            },
            {
                path: '#',
                name: 'relatório'
            },
            {
                path: '#',
                name: 'pedidos'
            }
        ];
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Breadcrumb_1.Breadcrumb, { routes: routes }));
        expect(getAllByTestId('crumb-item-link').length).toBe(routes.filter(route => route.path).length);
    });
});
