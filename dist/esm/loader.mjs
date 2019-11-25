import { a as patchEsm, b as bootstrapLazy } from './core-4392312b.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["stencil-emas-input-field",[[1,"stencil-emas-input-field",{"first":[1],"fieldName":[1,"field-name"],"placeholderText":[1,"placeholder-text"],"displayedInputdata":[1,"displayed-inputdata"],"dropdownValues":[16],"dropdownValueRequired":[4,"dropdown-value-required"],"displayDropdownValueRequiredMessage":[4,"display-dropdown-value-required-message"],"maxCharacters":[2,"max-characters"],"maxCharactersRequired":[4,"max-characters-required"],"inputValue":[32]}]]]], options);
  });
};

export { defineCustomElements };
