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
exports.Avatar = exports.AvatarStyled = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_components_1 = __importDefault(require("styled-components"));
const Text_1 = require("../Text");
const Box_1 = require("../Box");
const BoxStyled = styled_components_1.default(Box_1.Box) `
  & > img,
  & {
    border-radius: ${({ variant }) => (variant === 'rounded' ? '50%' : '5px')};
    width: ${({ size }) => size || '36px'};
    height: ${({ size }) => size || '36px'};
    object-fit: ${({ variant }) => variant === 'rounded' ? 'cover' : 'contain'};
  }
`;
exports.AvatarStyled = styled_components_1.default.img `
  width: 36px;
  height: 36px;
`;
const AvatarInitial = react_1.memo(({ alt = '', palette }) => {
    return (react_1.default.createElement(Text_1.Text, { "data-testid": 'name', fontWeight: 'bold', color: palette }, alt.substring(0, 1).toUpperCase()));
});
exports.Avatar = (_a) => {
    var { src, alt, fallback, variant = 'box', palette = 'primary' } = _a, props = __rest(_a, ["src", "alt", "fallback", "variant", "palette"]);
    const [useFallback, setUseFallback] = react_1.useState(false);
    const [imgFallback, setImgFallback] = react_1.useState(fallback);
    const handleSrcError = react_1.useCallback(() => setUseFallback(true), []);
    const getImage = () => {
        if (src && !useFallback) {
            return (react_1.default.createElement(exports.AvatarStyled, { src: src, alt: alt, "data-testid": 'src', onError: handleSrcError }));
        }
        if (imgFallback) {
            return (react_1.default.createElement(exports.AvatarStyled, { alt: alt, src: imgFallback, "data-testid": 'src', onError: () => setImgFallback('') }));
        }
        return react_1.default.createElement(AvatarInitial, { alt: alt, palette: palette });
    };
    return (react_1.default.createElement(BoxStyled, Object.assign({ display: 'flex', variant: variant, "data-testid": 'box', alignItems: 'center', verticalAlign: 'center', justifyContent: 'center', backgroundColor: src && !useFallback ? 'transparent' : `${palette}Light` }, props), getImage()));
};
exports.Avatar.propTypes = {
    src: prop_types_1.default.string,
    fallback: prop_types_1.default.string,
    palette: prop_types_1.default.string,
    alt: prop_types_1.default.string.isRequired,
    variant: prop_types_1.default.oneOf(['box', 'rounded'])
};
exports.Avatar.defaultProps = {
    palette: 'primary'
};
AvatarInitial.displayName = 'AvatarInitial';
AvatarInitial.propTypes = {
    alt: prop_types_1.default.string.isRequired,
    palette: prop_types_1.default.string
};
