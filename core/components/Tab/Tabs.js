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
exports.Tabs = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const styled_system_1 = require("styled-system");
const styled_components_1 = __importStar(require("styled-components"));
const Flex_1 = require("../Flex");
const tabsVariations = {
    default: styled_components_1.css `
    &::before {
      position: absolute;
      content: '';
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 1px;
      background: #d9d9d9;
    }
  `,
    contained: styled_components_1.css `
    background: #f5f5f5;
    border-radius: 5px;
    padding: 4px 5px;
  `,
    card: styled_components_1.css `
    margin-bottom: 0;
  `
};
const TabStyled = styled_components_1.default.ul `
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
  position: relative;

  ${styled_system_1.space}
  ${styled_system_1.layout}

  ${({ variant }) => tabsVariations[variant || 'default']}
`;
const FlexStyled = styled_components_1.default(Flex_1.Flex) `
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;

  ::before {
    position: absolute;
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    left: 0;
    -webkit-box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.39);
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.39);
    top: 0;
    bottom: 0;
    width: 30px;
  }

  ::after {
    position: absolute;
    z-index: 1;
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    right: 0;
    -webkit-box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.39);
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.39);
    top: 0;
    bottom: 0;
    width: 30px;
  }

  ${({ scrollPosition, isMobile }) => {
    if (isMobile) {
        if (scrollPosition === 'left') {
            return styled_components_1.css `
          ::after {
            opacity: 1;
          }
        `;
        }
        if (scrollPosition === 'right') {
            return styled_components_1.css `
          ::before {
            opacity: 1;
          }
        `;
        }
        return styled_components_1.css `
        ::after {
          opacity: 1;
        }

        ::before {
          opacity: 1;
        }
      `;
    }
}}
`;
exports.Tabs = (_a) => {
    var { extra, children, wrapperProps, onChange = () => {
        // do nothing.
    } } = _a, props = __rest(_a, ["extra", "children", "wrapperProps", "onChange"]);
    const [isMobile, setIsMobile] = react_1.useState(false);
    const [scrollPosition, setScrollPosition] = react_1.useState('left');
    const refFlex = react_1.useRef(document.createElement('div'));
    react_1.useEffect(() => {
        const handleResize = () => {
            if (refFlex.current &&
                refFlex.current.scrollWidth !== refFlex.current.clientWidth) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        };
        if (refFlex) {
            handleResize();
            window.addEventListener('resize', handleResize);
        }
    }, [refFlex]);
    react_1.useEffect(() => {
        const handleScroll = e => {
            if (refFlex && isMobile) {
                refFlex.current.scrollLeft += e.deltaY;
                if (refFlex.current.scrollLeft === 0) {
                    setScrollPosition('left');
                }
                else if (refFlex.current.offsetWidth + refFlex.current.scrollLeft ===
                    refFlex.current.scrollWidth) {
                    setScrollPosition('right');
                }
                else {
                    setScrollPosition('middle');
                }
            }
        };
        if (refFlex) {
            refFlex.current.addEventListener('wheel', handleScroll);
        }
    }, [refFlex, isMobile]);
    function handleClick(event) {
        onChange(event, parseInt(event.currentTarget.dataset.id));
    }
    return (react_1.default.createElement(TabStyled, Object.assign({ "data-testid": 'tabs' }, props),
        react_1.default.createElement(FlexStyled, { isMobile: isMobile, scrollPosition: scrollPosition },
            react_1.default.createElement(Flex_1.Flex, Object.assign({ flex: 1, ref: refFlex, overflow: 'hidden', position: 'relative', onClick: handleClick, "data-testid": 'tabs-container' }, wrapperProps), children)),
        extra && react_1.default.createElement(Flex_1.Flex, { px: '12px' }, extra)));
};
exports.Tabs.propTypes = {
    extra: prop_types_1.default.any,
    children: prop_types_1.default.any,
    onChange: prop_types_1.default.func,
    wrapperProps: prop_types_1.default.object,
    variant: prop_types_1.default.oneOf(['default', 'contained', 'card'])
};
exports.Tabs.defaultProps = {
    variant: 'default'
};
