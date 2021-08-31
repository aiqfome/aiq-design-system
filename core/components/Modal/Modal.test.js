"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const Modal_1 = require("../Modal");
const render_1 = require("../utils/test/render");
describe('Modal', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { title: 'title', show: true })));
        expect(component).toBeTruthy();
    });
    it('should call onClose when click on mask', () => {
        const handleOnClose = jest.fn();
        const { getByTestId } = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { show: true, title: 'title', onClose: handleOnClose })));
        const mask = getByTestId('modal-container');
        react_1.fireEvent.click(mask);
        expect(handleOnClose).toHaveBeenCalled();
    });
    it('should have to render a title', () => {
        const { getByTestId } = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { show: true, title: 'title' })));
        const modal = getByTestId('modal-title');
        expect(modal).toBeTruthy();
        expect(modal).toHaveTextContent('title');
    });
    it('should have class when it is closed', () => {
        const { queryAllByTestId } = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { title: 'title', show: false })));
        const modal = queryAllByTestId('modal-container');
        expect(modal.length).toBe(0);
    });
    it('should have a content when have a children', () => {
        const content = 'My Content';
        const { getByTestId } = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { show: true, title: 'title' }, content)));
        expect(getByTestId('modal-container')).toHaveTextContent(content);
    });
    it('should have just okButton and not cancelButton', () => {
        const okButton = {
            label: 'ok',
            function: () => {
                console.log('ok');
            },
            visible: true
        };
        const cancelButton = {
            label: 'cancel',
            function: () => {
                console.log('cancel');
            },
            visible: false
        };
        const content = 'My Content';
        const { getAllByTestId } = render_1.render(react_2.default.createElement("div", { id: 'modal-root' },
            react_2.default.createElement(Modal_1.Modal, { show: true, title: 'title', okButton: okButton, cancelButton: cancelButton }, content)));
        expect(getAllByTestId('modal-button').length).toBe(1);
    });
});
