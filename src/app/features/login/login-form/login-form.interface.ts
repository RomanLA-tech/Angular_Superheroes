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
  email: Readonly<string>;
  password: Readonly<string>;
}

export interface RegisterFormValue {
  email: Readonly<string>;
  password: Readonly<string>;
  username: Readonly<string>;
}
