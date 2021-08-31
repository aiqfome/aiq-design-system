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
exports.Alert = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_system_1 = require("styled-system");
const react_dom_1 = require("react-dom");
const styled_components_1 = __importStar(require("styled-components"));
const Box_1 = require("../Box");
const Text_1 = require("../Text");
const Button_1 = require("../Button");
const Flex_1 = require("../Flex");
const BackgroundAlert = styled_components_1.default(Flex_1.Flex) `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.black}30;

  &.hide {
    z-index: -1;
    opacity: 0;
  }

  &.show {
    opacity: 1;
    z-index: ${({ zIndex }) => zIndex};
  }

  ${({ animation }) => animation &&
    styled_components_1.css `
      &.hide {
        animation: hide 0.25s;
      }
      @keyframes hide {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      &.show {
        animation: show 0.2s;
      }
      @keyframes show {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
`;
const ModalStyled = styled_components_1.default(Flex_1.Flex) `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 6px #0000001a;
  border: 1px solid #dedede;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 30px 24px 22px 30px;
  max-width: 362px;
  align-items: flex-start;

  ${styled_system_1.layout}

  &.hide {
    z-index: -1;
    opacity: 0;
  }

  &.show {
    opacity: 1;
    z-index: 2000;
  }

  ${({ animation }) => animation &&
    styled_components_1.css `
      &.hide {
        animation: move-out 0.25s;
      }
      @keyframes move-out {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-60px);
        }
      }
      &.show {
        animation: move-in 0.2s;
      }
      @keyframes move-in {
        from {
          opacity: 0;
          transform: translateY(-60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
`;
const defaultButton = {
    label: '',
    function: () => {
        // do nothing.
    },
    visible: false
};
exports.Alert = (_a) => {
    var { title, children, zIndex = 2000, show = false, animation = false, onClose = () => {
        // do nothing.
    }, okButton = defaultButton, cancelButton = defaultButton } = _a, props = __rest(_a, ["title", "children", "zIndex", "show", "animation", "onClose", "okButton", "cancelButton"]);
    const [isMounted, setIsMounted] = react_1.useState(false);
    react_1.useEffect(() => {
        if (show)
            setIsMounted(show);
    }, [show]);
    function handleOk(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        okButton.function();
    }
    function handleCancel() {
        cancelButton.function();
    }
    function handleClickOutSide({ target }) {
        if (target.className && target.className.includes('background-modal')) {
            onClose();
        }
    }
    if (isMounted) {
        return react_dom_1.createPortal(react_1.default.createElement(BackgroundAlert, { "data-testid": 'overflow-modal-alert', zIndex: zIndex, animation: animation, variant: 'fullCentralized', onClick: handleClickOutSide, className: `background-modal ${show ? 'show' : 'hide'}` },
            react_1.default.createElement(ModalStyled, Object.assign({ "data-testid": 'modal-alert', animation: animation, className: `${show ? 'show' : 'hide'}` }, props),
                react_1.default.createElement(Text_1.Text, { color: 'primary', fontSize: 'xlarge', marginBottom: '30px', fontWeight: 'semiBold' }, title),
                children,
                react_1.default.createElement(Flex_1.Flex, { justifyContent: 'flex-end', marginTop: 26, width: '100%' },
                    cancelButton.visible && (react_1.default.createElement(Button_1.Button, { "data-testid": 'modal-alert-btn-cancel', onClick: handleCancel, marginRight: 48, palette: 'primary' }, cancelButton.label)),
                    okButton.visible && (react_1.default.createElement(Button_1.Button, { "data-testid": 'modal-alert-btn-ok', onClick: handleOk, palette: 'primary' }, okButton.label))))), document.querySelector('#modal-root'));
    }
    return react_1.default.createElement(Box_1.Box, { display: 'none' });
};
exports.Alert.propTypes = {
    okButton: prop_types_1.default.any,
    zIndex: prop_types_1.default.number,
    children: prop_types_1.default.node,
    animation: prop_types_1.default.bool,
    cancelButton: prop_types_1.default.any,
    show: prop_types_1.default.bool.isRequired,
    title: prop_types_1.default.string.isRequired,
    onClose: prop_types_1.default.func.isRequired
};
