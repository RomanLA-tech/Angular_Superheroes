import { ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-form-input',
  templateUrl: './search-form-input.component.html',
  styleUrls: ['./search-form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchFormInputComponent),
      multi: true
    }
  ]
})
export class SearchFormInputComponent implements ControlValueAccessor {

  public value: string | undefined;

  public onChange!: (value: Readonly<string>) => void;

  public onTouched!: () => void;

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);
  };

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: Readonly<string>): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public trackByFn(index: Readonly<number>, text: Readonly<string>): Readonly<string> {
    return text;
  }

}
