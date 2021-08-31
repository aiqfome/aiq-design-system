"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const DropFile_1 = require("./DropFile");
const render_1 = require("../utils/test/render");
describe('DropFile', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(DropFile_1.DropFile, null));
        expect(component).toBeTruthy();
    });
    it('should render name when have name prop', () => {
        const content = 'name-test';
        const { getByTestId } = render_1.render(react_1.default.createElement(DropFile_1.DropFile, { name: content }));
        const input = getByTestId('dropfile-input');
        expect(input).toBeTruthy();
        expect(input).toHaveAttribute('name', 'name-test');
    });
    it('should have a error message when have error on form', () => {
        const content = 'My Error';
        const { getByTestId } = render_1.render(react_1.default.createElement(DropFile_1.DropFile, { errorForm: true, errorMessage: content }));
        const textContainer = getByTestId('dropfile-error');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My Error');
    });
    it('should call onChange when change value', () => {
        const handleOnClick = jest.fn();
        const { getByTestId } = render_1.render(react_1.default.createElement(DropFile_1.DropFile, { onChange: handleOnClick }));
        const input = getByTestId('dropfile-input');
        react_2.fireEvent.change(input, {
            target: {
                files: [
                    new File(['hi'], 'chucknorris.txt', {
                        type: 'text/plain'
                    })
                ],
                preventDefault: () => { },
                persist: () => { }
            }
        });
        expect(handleOnClick).toBeCalled();
    });
    it('should have component Image when have initImage prop', () => {
        const { getByTestId } = render_1.render(react_1.default.createElement(DropFile_1.DropFile, { initImage: 'https://cdn.startupi.com.br/wp-content/uploads/2019/12/Magalu-linx-marketplace.png' }));
        const image = getByTestId('dropfile-image');
        expect(image).toBeTruthy();
    });
    it('should have translate texts when have translate prop', () => {
        const translate = {
            message: {
                row1: 'arraste e solte a imagem aqui',
                row2: 'ou clique para escolher'
            },
            errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
            errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
        };
        const { getByTestId } = render_1.render(react_1.default.createElement(DropFile_1.DropFile, { dataMaxSize: 0.012, translate: translate }));
        const input = getByTestId('dropfile-input');
        const container = getByTestId('dropfile-container');
        const textContainer = getByTestId('dropfile-error');
        expect(container).toHaveTextContent(translate.message.row1);
        expect(container).toHaveTextContent(translate.message.row2);
        react_2.fireEvent.change(input, {
            target: {
                files: [
                    new File(['hi'], 'chucknorris.txt', {
                        type: 'text/plain'
                    })
                ],
                preventDefault: () => { },
                persist: () => { }
            }
        });
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent(translate.errorType);
        react_2.fireEvent.change(input, {
            target: {
                files: [
                    new File(['(⌐□_□)'], 'chucknorris.png', {
                        type: 'image/png'
                    })
                ],
                preventDefault: () => { },
                stopPropagation: () => { },
                persist: () => { }
            }
        });
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent(translate.errorSize);
    });
});
