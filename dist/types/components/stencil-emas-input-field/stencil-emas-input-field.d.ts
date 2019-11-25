export declare class StencilEmasInputField {
    first: string;
    fieldName: string;
    placeholderText: string;
    inputValue: string;
    displayedInputdata: string;
    dropdownValues: Array<string>;
    dropdownValueRequired: boolean;
    displayDropdownValueRequiredMessage: boolean;
    maxCharacters: number;
    maxCharactersRequired: boolean;
    submitData(): void;
    clearDisplayedInputdata(): void;
    handleSubmit(e: any): void;
    handleInputChange(event: any): void;
    render(): any;
}
