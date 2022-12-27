import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@utils/validators';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	
	public isRegister: 'login' | 'register' = 'login';
	
	readonly loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, this.validators.validateEmail]],
		password: ['', [Validators.required, this.validators.validatePassword]]
	});
	readonly registerForm: FormGroup = this.fb.group({
		username: ['', [Validators.required, this.validators.validateUsername]],
		email: ['', [Validators.required, this.validators.validateEmail]],
		password: ['', [Validators.required, this.validators.validatePassword]]
	});
	
	
	constructor(private fb: FormBuilder, private validators: CustomValidators) {}
	
	public loginUser() {
	
	}
	
	public createUser() {
	
	}
	
	public switchIsRegister() {
		(this.isRegister === 'login')
			? (this.isRegister = 'register')
			: (this.isRegister = 'login');
	}
}
