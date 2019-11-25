import { h } from "@stencil/core";
// import { format } from '../../utils/utils';
export class StencilEmasInputField {
    constructor() {
        this.fieldName = 'This is gonna be an input field';
        this.placeholderText = 'Please submit data';
        this.displayedInputdata = 'Submit to change this data';
        this.dropdownValues = [];
        this.dropdownValueRequired = false;
        this.displayDropdownValueRequiredMessage = false;
        this.maxCharacters = undefined;
        this.maxCharactersRequired = false;
    }
    submitData() {
        if (this.inputValue && !this.dropdownValueRequired) {
            if (this.inputValue.length > this.maxCharacters) {
                this.maxCharactersRequired = true;
            }
            else {
                this.displayedInputdata = this.inputValue;
                this.inputValue = "";
                this.maxCharactersRequired = false;
            }
        }
        else if (this.inputValue && this.dropdownValueRequired) {
            if (this.dropdownValues.includes(this.inputValue)) {
                if (this.inputValue.length > this.maxCharacters) {
                    this.maxCharactersRequired = true;
                }
                else {
                    this.displayedInputdata = this.inputValue;
                    this.inputValue = "";
                    this.displayDropdownValueRequiredMessage = false;
                }
            }
            else {
                this.displayDropdownValueRequiredMessage = true;
            }
        }
    }
    clearDisplayedInputdata() {
        this.displayedInputdata = "";
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
    }
    render() {
        return h("div", { id: "stencilEmasInputField" },
            h("div", { class: "content" },
                h("p", { class: "title" }, this.fieldName),
                h("div", { class: "mainInput" },
                    h("input", { id: "inputField", class: "inputField", placeholder: this.placeholderText, type: "search", list: "data", onChange: (event) => this.handleInputChange(event), value: this.inputValue }),
                    this.dropdownValues
                        ? h("datalist", { id: "data" }, this.dropdownValues.map((value) => h("option", { value: value })))
                        : '',
                    h("button", { class: "submitButton", value: "Submit", onClick: this.submitData.bind(this) }, "Submit")),
                this.displayDropdownValueRequiredMessage
                    ? h("p", { class: "alert" }, "Please choose an value from the dropdown") :
                    ``,
                this.maxCharactersRequired
                    ? h("p", { class: "alert" },
                        "Please submit something less than ",
                        this.maxCharacters) :
                    ``,
                h("div", { class: "displayedInputdataField" },
                    h("p", { class: "displayedInputdata" }, this.displayedInputdata)),
                h("p", null,
                    h("button", { class: "clearButton", onClick: this.clearDisplayedInputdata.bind(this) }, "Clear text"))));
    }
    static get is() { return "stencil-emas-input-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stencil-emas-input-field.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stencil-emas-input-field.css"]
    }; }
    static get properties() { return {
        "first": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "first",
            "reflect": false
        },
        "fieldName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "field-name",
            "reflect": false,
            "defaultValue": "'This is gonna be an input field'"
        },
        "placeholderText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder-text",
            "reflect": false,
            "defaultValue": "'Please submit data'"
        },
        "displayedInputdata": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "displayed-inputdata",
            "reflect": false,
            "defaultValue": "'Submit to change this data'"
        },
        "dropdownValues": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<string>",
                "resolved": "string[]",
                "references": {
                    "Array": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "dropdownValueRequired": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dropdown-value-required",
            "reflect": false,
            "defaultValue": "false"
        },
        "displayDropdownValueRequiredMessage": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "display-dropdown-value-required-message",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxCharacters": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "max-characters",
            "reflect": false,
            "defaultValue": "undefined"
        },
        "maxCharactersRequired": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "max-characters-required",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "inputValue": {}
    }; }
}
