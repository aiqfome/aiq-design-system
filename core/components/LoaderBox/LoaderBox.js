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
exports.LoaderBox = void 0;
const react_1 = __importDefault(require("react"));
const Flex_1 = require("../Flex");
const Loading_1 = require("../Loading");
exports.LoaderBox = (_a) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement(Flex_1.Flex, Object.assign({ justifyContent: 'center', alignItems: 'center', height: '100vh' }, props),
        react_1.default.createElement(Loading_1.Loading, null)));
};
