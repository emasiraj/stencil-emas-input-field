'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9d17b03c.js');

const StencilEmasInputField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return core.h("div", { id: "stencilEmasInputField" }, core.h("div", { class: "content" }, core.h("p", { class: "title" }, this.fieldName), core.h("div", { class: "mainInput" }, core.h("input", { id: "inputField", class: "inputField", placeholder: this.placeholderText, type: "search", list: "data", onChange: (event) => this.handleInputChange(event), value: this.inputValue }), this.dropdownValues
            ? core.h("datalist", { id: "data" }, this.dropdownValues.map((value) => core.h("option", { value: value })))
            : '', core.h("button", { class: "submitButton", value: "Submit", onClick: this.submitData.bind(this) }, "Submit")), this.displayDropdownValueRequiredMessage
            ? core.h("p", { class: "alert" }, "Please choose an value from the dropdown") :
            ``, this.maxCharactersRequired
            ? core.h("p", { class: "alert" }, "Please submit something less than ", this.maxCharacters) :
            ``, core.h("div", { class: "displayedInputdataField" }, core.h("p", { class: "displayedInputdata" }, this.displayedInputdata)), core.h("p", null, core.h("button", { class: "clearButton", onClick: this.clearDisplayedInputdata.bind(this) }, "Clear text"))));
    }
    static get style() { return ".title{color:var(--title-color,#666);font-size:var(--title-font-size,16px);text-align:var(--title-text-align,left)}#stencilEmasInputField{font-family:var(--stencilEmasInputField-font,\"Roboto\",sans-serif);border-style:var(--stencilEmasInputField-border-style,solid);border-width:var(--stencilEmasInputField-border-width,1px);border-color:var(--stencilEmasInputField-border-color,#666);display:var(--stencilEmasInputField-display,block);word-wrap:break-word;overflow:hidden;background-color:var(--stencilEmasInputField-background-color,transparent);width:var(--stencilEmasInputField-width,40%)}.content{margin-left:5px;margin-right:5px}.mainInput{display:-ms-flexbox;display:flex}.inputField{-ms-flex-positive:1;flex-grow:1;border:var(--inputField-border,1px solid #000);border-radius:var(--inputField-border-radius,2px);height:var(--inputField-height,25px)}.submitButton{margin-left:5px;border:var(--submitButton-border,1px solid grey);border-radius:var(--submitButton-border-radius,2px);background-color:var(--submitButton-background-color,#ddd);color:var(--submitButton-color,#000);font-size:var(--submitButton-font-size,13px);width:var(--submitButton-width,auto);float:right}.submitButton:active{-webkit-transform:translateY(1px);transform:translateY(1px)}.displayedInputdataField{border-style:var(--displayedInputdataField-border-style,solid);border-width:var(--displayedInputdataField-border-width,1px);border-color:var(--displayedInputdataField-border-color,#666);background-color:var(--displayedInputdataField-background-color,transparent);padding:5px 5px;margin-top:5px}.displayedInputdata{color:var(--displayedInputdata-color,#000);font-size:var(--displayedInputdata-font-size,16px);text-align:var(--displayedInputdata-text-align,left)}.alert{color:var(--alert-color,red)}.clearButton{float:right;margin-bottom:5px;border:var(--clearButton-border,1px solid grey);border-radius:var(--clearButton-border-radius,2px);background-color:var(--clearButton-background-color,#ddd);color:var(--clearButton-color,#000);font-size:var(--clearButton-font-size,13px);width:var(--clearButton-width,auto)}"; }
};

exports.stencil_emas_input_field = StencilEmasInputField;
