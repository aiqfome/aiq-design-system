"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Sidebar_1 = require("../Sidebar");
const render_1 = require("../utils/test/render");
const sidebarData = [
    {
        name: 'dashboard',
        href: '/dashboard',
        badge: 1
    },
    {
        name: 'bookmark',
        href: '/pedidos',
        active: true
    },
    {
        name: 'bookmark',
        href: '/pedidos',
        active: true
    }
];
describe('Sidebar', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Sidebar_1.Sidebar, { opened: true, data: [] }));
        expect(component).toBeTruthy();
    });
    it('should have class when it is closed', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(Sidebar_1.Sidebar, { data: [], opened: false }));
        const sidebar = getByTestId('sidebar');
        expect(sidebar).toHaveClass('hidden');
    });
    it('should have content when has header', () => {
        const { getByText } = render_1.render(react_1.default.createElement(Sidebar_1.Sidebar, { data: [], opened: true, header: 'Header!' }));
        const div = getByText('Header!');
        expect(div).toBeTruthy();
    });
    it('should have the same amount items of the array', () => {
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Sidebar_1.Sidebar, { data: sidebarData, opened: true }));
        expect(getAllByTestId('sidebar-item').length).toBe(sidebarData.length);
    });
});
