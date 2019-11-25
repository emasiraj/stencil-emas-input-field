'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9d17b03c.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["stencil-emas-input-field.cjs",[[1,"stencil-emas-input-field",{"first":[1],"fieldName":[1,"field-name"],"placeholderText":[1,"placeholder-text"],"displayedInputdata":[1,"displayed-inputdata"],"dropdownValues":[16],"dropdownValueRequired":[4,"dropdown-value-required"],"displayDropdownValueRequiredMessage":[4,"display-dropdown-value-required-message"],"maxCharacters":[2,"max-characters"],"maxCharactersRequired":[4,"max-characters-required"],"inputValue":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
