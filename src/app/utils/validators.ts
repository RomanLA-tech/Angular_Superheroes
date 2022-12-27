import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Regexps } from './regexps';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomValidators {
	
	public validateEmail(control: AbstractControl): ValidationErrors | null {
		return Regexps.matchEmail(control.value) ? null : {customEmail: true};
	};
	
	public validatePassword(control: AbstractControl): ValidationErrors | null {
		return Regexps.matchPassword(control.value) ? null : {customPassword: true};
	};
	
	public validateUsername(control: AbstractControl): ValidationErrors | null {
		return Regexps.matchUsername(control.value) ? null : {customName: true};
	};
}