"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.default = styled_components_1.createGlobalStyle `
  .rc-dropdown-hidden {
    display: none;
  }

  .actions .rc-dropdown-arrow {
    position: absolute;
    z-index: 1;
    display: block;
    width: 8.48528137px;
    height: 8.48528137px;
    background: 0 0;
    border-style: solid;
    border-width: 4.24264069px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-bottomLeft,
  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-bottomRight,
  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-bottomCenter
  {
    padding-top: 10px !important;
  }

  .actions.rc-dropdown-placement-bottomLeft .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-bottomRight .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-bottomCenter .rc-dropdown-arrow
  {
    top: 6px !important;
    border-color: #fff transparent transparent #fff;
    -webkit-box-shadow: -2px -2px 5px rgba(0,0,0,.06);
    box-shadow: -2px -2px 5px rgba(0,0,0,.06);
  }

  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-topLeft,
  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-topRight,
  .actions.rc-dropdown-show-arrow.rc-dropdown-placement-topCenter
  {
    padding-bottom: 10px !important;
  }

  .actions.rc-dropdown-placement-topLeft .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-topRight .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-topCenter .rc-dropdown-arrow
  {
    bottom: 6.2px !important;
    border-color: transparent #fff #fff transparent;
    -webkit-box-shadow: 3px 3px 7px rgba(0,0,0,.07);
    box-shadow: 3px 3px 7px rgba(0,0,0,.07);
  }

  .actions.rc-dropdown-placement-bottomLeft .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-topLeft .rc-dropdown-arrow
  {
    left: 16px;
  }

  .actions.rc-dropdown-placement-bottomRight .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-topRight .rc-dropdown-arrow
  {
    right: 16px;
  }

  .actions.rc-dropdown-placement-bottomCenter .rc-dropdown-arrow,
  .actions.rc-dropdown-placement-topCenter .rc-dropdown-arrow
  {
    left: 50%;
  }
`;
