"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Alert_1 = require("./Alert");
describe('Alert', () => {
    const onClose = jest.fn();
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Alert_1.Alert, { show: false, onClose: onClose, title: 'Alert' }));
        expect(component).toBeTruthy();
    });
    it('should show alert when set prop show to true', () => {
        const onClose = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement("div", null,
            react_1.default.createElement(Alert_1.Alert, { show: true, onClose: onClose, title: 'Alert' }),
            react_1.default.createElement("div", { id: 'modal-root' })));
        const modalAlert = getByTestId('modal-alert');
        expect(modalAlert).toHaveClass('show');
    });
    it('should call method onClose when click outside alert', () => {
        const onClose = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement("div", null,
            react_1.default.createElement(Alert_1.Alert, { show: true, onClose: onClose, title: 'Alert' }),
            react_1.default.createElement("div", { id: 'modal-root' })));
        const modalAlert = getByTestId('overflow-modal-alert');
        modalAlert.click();
        expect(onClose).toHaveBeenCalled();
    });
    it('should call method okButton when click in button ok', () => {
        const onClose = jest.fn();
        const okButton = {
            label: 'ok',
            function: jest.fn(),
            visible: true
        };
        const { getByTestId } = render_1.render(react_1.default.createElement("div", null,
            react_1.default.createElement(Alert_1.Alert, { show: true, okButton: okButton, onClose: onClose, title: 'Alert' }),
            react_1.default.createElement("div", { id: 'modal-root' })));
        const modalAlert = getByTestId('modal-alert-btn-ok');
        modalAlert.click();
        expect(okButton.function).toHaveBeenCalled();
    });
    it('should call method cancelButton when click in button cancel', () => {
        const onClose = jest.fn();
        const cancelButton = {
            label: 'cancel',
            function: jest.fn(),
            visible: true
        };
        const { getByTestId } = render_1.render(react_1.default.createElement("div", null,
            react_1.default.createElement(Alert_1.Alert, { show: true, cancelButton: cancelButton, onClose: onClose, title: 'Alert' }),
            react_1.default.createElement("div", { id: 'modal-root' })));
        const modalAlert = getByTestId('modal-alert-btn-cancel');
        modalAlert.click();
        expect(cancelButton.function).toHaveBeenCalled();
    });
});
