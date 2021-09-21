"use strict";
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
exports.TableHead = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const TableHeaderStyled = styled_components_1.default.th `
  flex: 1;
  text-align: left;
  align-items: flex-end;
  padding: 20px 10px 3px;
  vertical-align: bottom;
  border-collapse: collapse;
  border-bottom: 0.5px solid;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkGrey};
  border-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${styled_system_1.layout}
  ${styled_system_1.space}
  ${styled_system_1.typography}
`;
exports.TableHead = (_a) => {
    var { children, wrap } = _a, props = __rest(_a, ["children", "wrap"]);
    return (react_1.default.createElement(TableHeaderStyled, Object.assign({ "data-testid": 'table-head' }, props), children));
};
exports.TableHead.propTypes = {
    children: prop_types_1.default.node,
    wrap: prop_types_1.default.any
};
