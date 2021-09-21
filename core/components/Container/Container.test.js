"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const render_1 = require("../utils/test/render");
const Container_1 = require("./Container");
const react_2 = require("@testing-library/react");
describe('Container', () => {
    it('should have to render without crashing', () => {
        const component = render_1.render(react_1.default.createElement(Container_1.Container, null));
        expect(component).toBeTruthy();
    });
    it('should have a content when have a children', () => {
        const content = 'My Content';
        const { getByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, null, content));
        expect(getByTestId('container')).toHaveTextContent(content);
    });
    it('should have a title when have prop title', () => {
        const content = 'My Content';
        const { getByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, { title: 'My title' }, content));
        const textContainer = getByTestId('container-text');
        expect(textContainer).toBeTruthy();
        expect(textContainer).toHaveTextContent('My title');
    });
    it('should have a header when have prop header', () => {
        const Header = () => react_1.default.createElement("span", { "data-testid": 'container-header' }, "TESTE");
        const content = 'My Content';
        const { getByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, { header: react_1.default.createElement(Header, null) }, content));
        const header = getByTestId('container-header');
        expect(header).toBeTruthy();
    });
    it('should have the same amount tabs of the array', () => {
        const tabs = [
            {
                index: 0,
                content: 'pizza'
            },
            {
                index: 1,
                content: 'burguer'
            }
        ];
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, { tabs: tabs, tabIndex: 0 }));
        const tabsItem = getAllByTestId('container-tab-item');
        expect(tabsItem.length).toBe(tabs.length);
    });
    it('should have call onChangeTab when click on tab and prop tabs does not null', () => {
        const handleOnchange = jest.fn();
        const tabs = [
            {
                index: 0,
                content: 'pizza'
            },
            {
                index: 1,
                content: 'burguer'
            }
        ];
        const { getAllByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, { tabs: tabs, tabIndex: 0, onChangeTab: handleOnchange }));
        const tabsItem = getAllByTestId('container-tab-item');
        react_2.fireEvent.click(tabsItem[0]);
        expect(handleOnchange).toHaveBeenCalled();
    });
    it('should have a tab extra when have prop tabsExtra and tabs', () => {
        const tabsExtra = 'Test tabsExtra';
        const tabs = [
            {
                index: 0,
                content: 'pizza'
            },
            {
                index: 1,
                content: 'burguer'
            }
        ];
        const { getByTestId } = render_1.render(react_1.default.createElement(Container_1.Container, { tabs: tabs, tabIndex: 0, title: 'My title', tabsExtra: tabsExtra }));
        const container = getByTestId('container-tab');
        expect(container).toHaveTextContent(tabsExtra);
    });
});
