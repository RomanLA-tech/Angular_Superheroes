import { FormControl } from '@angular/forms';

export interface LoginForm {
	email: FormControl<string>;
	password: FormControl<string>;
}

export interface RegisterForm {
	username: FormControl<string>;
	email: FormControl<string>;
	password: FormControl<string>;
}

export type FormTypes = 'register' | 'login';