import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-search-form-input',
  templateUrl: './search-form-input.component.html',
  styleUrls: ['./search-form-input.component.scss']
})
export class SearchFormInputComponent {

  constructor(private readonly ngControl: NgControl) {
  }

  public get value(): Readonly<string> {
    return this.ngControl.value;
  }
}
