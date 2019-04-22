/* config-overrides.js */
const {override,useBabelRc} = require("customize-cra")
// const { getBabelLoader } = require('react-app-rewired');
module.exports = override(
  useBabelRc()
);