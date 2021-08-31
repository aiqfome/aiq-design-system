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
exports.DropFile = void 0;
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const md_1 = require("react-icons/md");
const styled_components_1 = __importStar(require("styled-components"));
const Flex_1 = require("../Flex");
const Text_1 = require("../Text");
const Icon_1 = require("../Icon");
const translateDefault = {
    message: {
        row1: 'arraste e solte a imagem aqui',
        row2: 'ou clique para escolher'
    },
    errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
    errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
};
const Container = styled_components_1.default(Flex_1.Flex) `
  border: 1px solid
    ${({ error, theme }) => error ? theme.colors.red : theme.colors.mediumGrey};

  position: relative;
  &:hover {
    cursor: pointer;
  }

  ${({ isDragover }) => isDragover &&
    styled_components_1.css `
      background: #f5f5f5;
      border: 1px dashed #babcbe;
    `}
`;
const InputFile = styled_components_1.default.input `
  display: none;
`;
const Image = styled_components_1.default.img `
  width: calc(100% - 5%);
  height: 180px;

  border-radius: 6px;
  position: absolute;
`;
exports.DropFile = react_1.default.forwardRef((_a, ref) => {
    var { translate = translateDefault, dataMaxSize = 2048, initImage, name, errorMessage, errorForm, onChange } = _a, props = __rest(_a, ["translate", "dataMaxSize", "initImage", "name", "errorMessage", "errorForm", "onChange"]);
    const [isDragover, setIsDragover] = react_1.useState(false);
    const [image, setImage] = react_1.useState();
    const [typeError, setTypeError] = react_1.useState();
    const inputRef = react_1.useRef(document.createElement('input'));
    function handleDropFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragover(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onChange && onChange(e.dataTransfer.files);
            inputRef.current.files = e.dataTransfer.files;
            setImageByFile(e.dataTransfer.files[0]);
        }
    }
    function handleClickBox() {
        inputRef.current.click();
    }
    function removeDragover(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragover(false);
    }
    function addDragover(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragover(true);
    }
    function handleChangeImage(e) {
        const input = e.target;
        onChange && onChange(input.files);
        if (input.files && input.files[0]) {
            setImageByFile(input.files[0]);
        }
    }
    function setImageByFile(file) {
        if (verifySize(file) && verifyType(file)) {
            const reader = new FileReader();
            reader.onload = e => {
                if (e.target) {
                    setImage(e.target.result);
                }
            };
            reader.readAsDataURL(file); // convert to base64 string
            return;
        }
        setImage(null);
    }
    function verifySize(file) {
        const kbytes = file.size / 1000;
        if (kbytes < dataMaxSize) {
            setTypeError(null);
            return true;
        }
        setTypeError('size');
        return false;
    }
    function verifyType(file) {
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            setTypeError(null);
            return true;
        }
        setTypeError('type');
        return false;
    }
    function getErrorMessage() {
        if (typeError === 'type') {
            return translate.errorType;
        }
        if (typeError === 'size') {
            return translate.errorSize;
        }
        if (errorForm) {
            return errorMessage;
        }
        return null;
    }
    const ImageFile = () => {
        if (initImage && !image && !isDragover) {
            return (react_1.default.createElement(Image, { width: '100%', height: '200px', src: initImage, alt: 'your image', "data-testid": 'dropfile-image' }));
        }
        if (image && !isDragover) {
            return (react_1.default.createElement(Image, { src: image, width: '100%', height: '200px', alt: 'your image', "data-testid": 'dropfile-image' }));
        }
        return react_1.default.createElement(Flex_1.Flex, null);
    };
    return (react_1.default.createElement(Container, Object.assign({ error: typeError || errorForm, isDragover: isDragover, onDragOver: addDragover, onDragEnter: addDragover, onDragLeave: removeDragover, onDragEnd: removeDragover, onDrop: handleDropFiles, onClick: handleClickBox, height: '200px', variant: 'centralized', borderRadius: 6, "data-testid": 'dropfile-container' }, props),
        react_1.default.createElement(InputFile, Object.assign({ name: name, onChange: handleChangeImage, ref: inputRef, type: 'file', "data-testid": 'dropfile-input' }, props)),
        react_1.default.createElement(Flex_1.Flex, { flexDirection: 'column', variant: 'centralized' },
            react_1.default.createElement(Icon_1.Icon, { color: 'grey', mb: '12px' },
                react_1.default.createElement(md_1.MdFileUpload, { size: 48 })),
            react_1.default.createElement(Text_1.Text, { color: 'grey' }, translate.message.row1),
            react_1.default.createElement(Text_1.Text, { color: 'grey' }, translate.message.row2),
            react_1.default.createElement(Text_1.Text, { mt: 4, color: 'red', fontWeight: 'medium', "data-testid": 'dropfile-error' }, getErrorMessage()),
            react_1.default.createElement(ImageFile, null))));
});
exports.DropFile.displayName = 'DropFile';
exports.DropFile.propTypes = {
    dataMaxSize: prop_types_1.default.number,
    translate: prop_types_1.default.any,
    onChange: prop_types_1.default.func,
    initImage: prop_types_1.default.string,
    errorMessage: prop_types_1.default.string,
    errorForm: prop_types_1.default.bool,
    name: prop_types_1.default.string
};
