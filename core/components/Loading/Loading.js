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
exports.Loading = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const loadingSizes = {
    small: styled_components_1.css `
    width: 15px;
    height: 15px;
  `,
    medium: styled_components_1.css `
    width: 25px;
    height: 25px;
  `,
    large: styled_components_1.css `
    width: 35px;
    height: 35px;
  `
};
const LoadingSpinner = styled_components_1.default.svg.attrs({
    viewBox: '25 25 50 50',
    children: react_1.default.createElement("circle", { cx: '50', cy: '50', r: '20' })
}) `
  ${styled_system_1.space}

  ${({ size }) => loadingSizes[size || 'medium']}

  transform-origin: center;
  animation: rotate 2s linear infinite;

  circle {
    fill: none;
    stroke: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.primary};
    stroke-width: 4;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
exports.Loading = ({ size, color }) => {
    return react_1.default.createElement(LoadingSpinner, { size: size, color: color });
};
