import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Injectable} from '@angular/core';

import {matchEmail, matchPassword, matchUsername} from '@utils/regexps';

@Injectable({providedIn: 'root'})
export class CustomValidators {

  public validateEmail(control: AbstractControl): ValidationErrors | null {
    return matchEmail(control.value) ? null : {customEmail: true};
  };

  public validatePassword(control: AbstractControl): ValidationErrors | null {
    return matchPassword(control.value) ? null : {customPassword: true};
  };

  public validateUsername(control: AbstractControl): ValidationErrors | null {
    return matchUsername(control.value) ? null : {customName: true};
  };
}
