import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@utils/validators';
import { FormState } from '@user/login/form-state.enum';
import { FormTypes, LoginForm, RegisterForm } from '@user/login/login.interface';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	
	public formState: FormState = FormState.Login;
	
	readonly loginForm: FormGroup = new FormGroup<LoginForm>({
		email: new FormControl<string>('', {
			nonNullable: true,
			validators: [this.validators.validateEmail]
		}),
		password: new FormControl<string>('', {
			nonNullable: true,
			validators: [this.validators.validatePassword]
		})
	});
	
	readonly registerForm: FormGroup<RegisterForm> = new FormGroup<RegisterForm>({
		username: new FormControl<string>('', {
			nonNullable: true,
			validators: [this.validators.validateUsername]
		}),
		email: new FormControl<string>('', {
			nonNullable: true,
			validators: [this.validators.validateEmail]
		}),
		password: new FormControl<string>('', {
			nonNullable: true,
			validators: [this.validators.validatePassword]
		})
	});
	
	constructor(private readonly validators: CustomValidators) {}
	
	public loginUser(): void {}
	
	public createUser(): void {}
	
	public setFormState(state: FormTypes): void {
		if (state === 'register') {
			this.formState = FormState.Register;
		} else if (state === 'login') {
			this.formState = FormState.Login;
		}
	}
	
}
