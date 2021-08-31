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
exports.Error = exports.PlaceHolder = exports.Variants = exports.Basic = void 0;
const react_1 = __importStar(require("react"));
const moment_1 = __importDefault(require("moment"));
const Flex_1 = require("../Flex");
const DatePicker_1 = require("./DatePicker");
exports.default = {
    component: DatePicker_1.DatePicker,
    title: 'DatePicker'
};
exports.Basic = () => {
    const [valueDatePicker, setValueDatePicker] = react_1.useState([moment_1.default(), moment_1.default()]);
    function handleChangeDatePicker(startDate, endDate) {
        setValueDatePicker([startDate, endDate]);
    }
    return (react_1.default.createElement(DatePicker_1.DatePicker, { value: valueDatePicker, onChange: handleChangeDatePicker }));
};
exports.Variants = () => {
    const [valueDatePicker, setValueDatePicker] = react_1.useState([moment_1.default(), moment_1.default()]);
    function handleChangeDatePicker(startDate, endDate) {
        setValueDatePicker([startDate, endDate]);
    }
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', variant: 'fullCentralized', justifyContent: 'space-between' },
        react_1.default.createElement(Flex_1.Flex, { mr: 16 },
            react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'range', value: valueDatePicker, onChange: handleChangeDatePicker })),
        react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'single', value: valueDatePicker, onChange: handleChangeDatePicker })));
};
exports.PlaceHolder = () => {
    const [valueDatePicker, setValueDatePicker] = react_1.useState();
    function handleChangeDatePicker(startDate, endDate) {
        setValueDatePicker([startDate, endDate]);
    }
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', variant: 'fullCentralized', justifyContent: 'space-between' },
        react_1.default.createElement(Flex_1.Flex, { mr: 16 },
            react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'range', placeholder: 'Houston, we have a problem', value: valueDatePicker, onChange: handleChangeDatePicker })),
        react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'single', placeholder: 'Aiqfome', value: valueDatePicker, onChange: handleChangeDatePicker })));
};
exports.Error = () => {
    const [valueDatePicker, setValueDatePicker] = react_1.useState();
    function handleChangeDatePicker(startDate, endDate) {
        setValueDatePicker([startDate, endDate]);
    }
    return (react_1.default.createElement(Flex_1.Flex, { flexDirection: 'row', variant: 'fullCentralized', justifyContent: 'space-between' },
        react_1.default.createElement(Flex_1.Flex, { mr: 16 },
            react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'range', placeholder: 'Aiqfome', value: valueDatePicker, onChange: handleChangeDatePicker, errorForm: true, errorMessage: 'Houston, we have a problem' })),
        react_1.default.createElement(DatePicker_1.DatePicker, { variant: 'single', placeholder: 'Aiqfome', value: valueDatePicker, onChange: handleChangeDatePicker, errorForm: true, errorMessage: 'Houston, we have a problem' })));
};
