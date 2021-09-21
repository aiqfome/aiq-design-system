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
exports.Text = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
exports.Text = styled_components_1.default.span `
  ${styled_system_1.color}
  ${styled_system_1.space}
  ${styled_system_1.layout}
  ${styled_system_1.fontSize}
  ${styled_system_1.fontWeight}
  ${styled_system_1.typography}

  white-space: ${props => props.whiteSpace || 'normal'};

  ${({ cursor }) => cursor &&
    styled_components_1.css `
      cursor: ${cursor};
    `};

  ${({ truncate }) => truncate &&
    styled_components_1.css `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;
exports.Text.propTypes = {
    cursor: prop_types_1.default.string,
    whiteSpace: prop_types_1.default.oneOf(['nowrap', 'normal', 'pre'])
};
