"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const Drawer_1 = require("../Drawer");
const render_1 = require("../utils/test/render");
describe('Drawer', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_2.default.createElement(Drawer_1.Drawer, { opened: true }));
        expect(component).toBeTruthy();
    });
    it('should call onClose when click on mask', () => {
        const handleOnClose = jest.fn();
        const { getByTestId } = render_1.render(react_2.default.createElement(Drawer_1.Drawer, { opened: true, onClose: handleOnClose }));
        const mask = getByTestId('drawer-mask');
        react_1.fireEvent.click(mask);
        expect(handleOnClose).toHaveBeenCalled();
    });
    it('should have class when it is closed', () => {
        const { getByTestId } = render_1.render(react_2.default.createElement(Drawer_1.Drawer, { opened: false }));
        const drawer = getByTestId('drawer-content');
        expect(drawer).toHaveClass('drawer-close');
    });
    it('should have svg when have loading prop', () => {
        const { getByTestId } = render_1.render(react_2.default.createElement(Drawer_1.Drawer, { opened: true, loading: true }));
        const drawer = getByTestId('drawer-content');
        const svg = drawer.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});
