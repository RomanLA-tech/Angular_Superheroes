import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchForm } from '@interfaces/hero-search-form.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  @Input() public form: FormGroup<SearchForm>;

}
