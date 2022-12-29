import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchForm } from '@features/hero-search/search-form/search-form.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() formValue = new EventEmitter<string>();

  public searchForm: FormGroup<SearchForm>;

  ngOnInit(): void {
    this.searchForm = new FormGroup<SearchForm>({
      query: new FormControl<string>('', {
        nonNullable: true, validators: [
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
          Validators.maxLength(10),
          Validators.minLength(2)
        ]
      })
    });
  }

  public onSubmit() {
    this.formValue.emit(this.searchForm.value.query);
  }
}
