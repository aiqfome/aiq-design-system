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
exports.ToastContent = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_spring_1 = require("react-spring");
const styled_components_1 = __importStar(require("styled-components"));
const fi_1 = require("react-icons/fi");
const Box_1 = require("../Box");
const ToastProvider_1 = require("./ToastProvider");
const toastVariations = {
    info: {
        background: 'info',
        color: '#fff',
        bar: 'blue',
        icon: react_1.default.createElement(fi_1.FiInfo, { size: 24 })
    },
    success: {
        background: 'green',
        color: '#fff',
        bar: 'success',
        icon: react_1.default.createElement(fi_1.FiCheckCircle, { size: 24 })
    },
    error: {
        background: 'red',
        color: '#fff',
        bar: 'error',
        icon: react_1.default.createElement(fi_1.FiXOctagon, { size: 24 })
    },
    warning: {
        background: 'warning',
        color: '#fff',
        bar: 'orange',
        icon: react_1.default.createElement(fi_1.FiAlertTriangle, { size: 24 })
    }
};
const ProgressStyled = styled_components_1.default.div `
  width: 0;
  top: 0px;
  left: 0px;
  flex: none;
  height: 6px;
  position: absolute;
  animation-duration: 2.6s;
  border-radius: 10px 10px 0 0;
  animation-fill-mode: forwards;
  background: ${({ theme }) => theme.colors.primary};
  animation-name: ${({ fixed }) => (!fixed ? 'progressing' : '')};
  background: ${({ variation, theme }) => theme.colors[variation.bar]};

  @keyframes progressing {
    0% {
      width: 0;
      border-radius: 10px 10px 10px 0;
    }

    70% {
      border-radius: 10px 10px 10px 0;
    }

    100% {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
  }
`;
const StyledToast = styled_components_1.default(react_spring_1.animated.div) `
  width: 360px;
  display: flex;
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: ${({ fixed }) => !fixed ? '22px 30px 16px 16px' : '16px 30px 16px 16px'};

  & + div {
    margin-top: 8px;
  }

  color: ${({ variation }) => variation.color};
  background: ${({ variation, theme }) => theme.colors[variation.background]};

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ description }) => !description &&
    styled_components_1.css `
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
exports.ToastContent = ({ message, className }) => {
    const [init, setInit] = react_1.useState(false);
    const { removeToast } = ToastProvider_1.useToast();
    react_1.useEffect(() => {
        if (!message.fixed) {
            setInit(true);
            const timer = setTimeout(() => {
                removeToast(message.id);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [message.fixed, message.id, removeToast]);
    const variation = react_1.useMemo(() => toastVariations[message.type] || {}, [
        message.type
    ]);
    return (react_1.default.createElement(StyledToast, { variation: variation, className: className, fixed: !!message.fixed, "data-testid": 'toast-content', description: message.description },
        react_1.default.createElement(ProgressStyled, { init: init, variation: variation, fixed: !!message.fixed }),
        variation.icon,
        react_1.default.createElement(Box_1.Box, { px: 5 },
            react_1.default.createElement("strong", null, message.title),
            message.description && react_1.default.createElement("p", null, message.description)),
        react_1.default.createElement("button", { type: 'button', onClick: () => removeToast(message.id) },
            react_1.default.createElement(fi_1.FiXCircle, { size: 18 }))));
};
exports.ToastContent.propTypes = {
    type: prop_types_1.default.oneOf(['info', 'success', 'error', 'warning']),
    message: prop_types_1.default.any,
    className: prop_types_1.default.string
};
