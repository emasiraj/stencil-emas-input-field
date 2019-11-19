import { Component, Prop, h, State,  } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'stencil-emas-input-field',
  styleUrl: 'stencil-emas-input-field.css',
  shadow: true
})

export class StencilEmasInputField {

  @Prop() first: string;

  @Prop() fieldName: string = 'This is gonna be an input field';

  @Prop() placeholderText: string = 'Please submit data';

  @State() inputValue: string;

  @Prop() displayedInputdata: string = 'Submit to change this data';

  @Prop() dropdownValues: Array<string> = [];

  @Prop() dropdownValueRequired: boolean = false;

  @Prop() displayDropdownValueRequiredMessage: boolean = false;

  @Prop() maxCharacters: number = undefined;

  @Prop() maxCharactersRequired: boolean = false;


  submitData() {
    if (this.inputValue && !this.dropdownValueRequired) { 
      if (this.inputValue.length > this.maxCharacters) { 
        this.maxCharactersRequired = true;
      } else {
        this.displayedInputdata = this.inputValue;
        this.inputValue = "";
        this.maxCharactersRequired = false;
      }
    } else if (this.inputValue && this.dropdownValueRequired) {
        if (this.dropdownValues.includes(this.inputValue)) {
          if (this.inputValue.length > this.maxCharacters) { 
            this.maxCharactersRequired = true;
          } else { 
            this.displayedInputdata = this.inputValue;
            this.inputValue = "";
            this.displayDropdownValueRequiredMessage = false;
          }  
        } else { 
          this.displayDropdownValueRequiredMessage = true;
        }
    }   
  }

  clearDisplayedInputdata() {
    this.displayedInputdata = "";
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleInputChange(event) { 
    this.inputValue = event.target.value; 
  }

  render() {
    return <div id ="stencilEmasInputField">
      <div class="content"> 
        <p class="title">{this.fieldName}</p>

        <div class="mainInput">
          <input id="inputField" class="inputField" placeholder={this.placeholderText} type="search" list="data" 
                 onChange={(event) => this.handleInputChange(event)} value={this.inputValue}></input>

          {this.dropdownValues
            ? <datalist id="data"> 
                {this.dropdownValues.map((value) => 
                  <option value={value}></option>
                )}
              </datalist>
            : ''}

          <button class="submitButton" value="Submit" onClick={this.submitData.bind(this)}>Submit</button>
        </div>


        {this.displayDropdownValueRequiredMessage 
          ? <p class="alert">Please choose an value from the dropdown</p> : 
          ``}

        {this.maxCharactersRequired
          ? <p class="alert">Please submit something less than {this.maxCharacters}</p> : 
          ``}

        
        <div class="displayedInputdataField">
          <p class="displayedInputdata">{this.displayedInputdata}</p>
        </div>

        <p>
          <button class="clearButton" onClick={this.clearDisplayedInputdata.bind(this)}>Clear text</button>
        </p>

      </div>
    </div>;
  }
}
