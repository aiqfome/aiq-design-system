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
exports.MultiSelect = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const MultiSelectFetchable_1 = require("./MultiSelectFetchable");
const MultiSelectStatic_1 = require("./MultiSelectStatic");
exports.MultiSelect = (_a) => {
    var { isFetchable = false } = _a, props = __rest(_a, ["isFetchable"]);
    if (isFetchable) {
        return react_1.default.createElement(MultiSelectFetchable_1.MultiSelectFetchable, Object.assign({}, props));
    }
    return react_1.default.createElement(MultiSelectStatic_1.MultiSelectStatic, Object.assign({}, props));
};
exports.MultiSelect.propTypes = {
    isFetchable: prop_types_1.default.bool
};
