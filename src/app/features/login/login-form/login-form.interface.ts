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

export interface LoginFormValue {
  email: string;
  password: string;
}

export interface RegisterFormValue {
  email: string;
  password: string;
  username: string;
}
