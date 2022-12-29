import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import {
  LoginForm,
  LoginFormValue,
  RegisterForm,
  RegisterFormValue
} from '@features/login/login-form/login-form.interface';
import { AuthService } from '@services/auth.service';
import { User } from '@shared/interfaces';
import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  public errorMessage = '';
  public isLoginForm = true;
  public registerForm: FormGroup<RegisterForm>;
  public loginForm: FormGroup<LoginForm>;
  private destroy$ = new Subject<void>();

  constructor(
    public readonly auth: AuthService,
    private readonly validators: CustomValidators,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup<RegisterForm>({
      username: new FormControl<string>('', {
        nonNullable: true,
        validators: [this.validators.validateUsername, Validators.required]
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [this.validators.validateEmail, Validators.required]
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [this.validators.validatePassword, Validators.required]
      })
    });

    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [this.validators.validateEmail]
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [this.validators.validatePassword, Validators.required]
      })
    });

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      if (params['authExpired']) {
        this.errorMessage = `Your current session has expired. Please login
                              again to continue using this app!`;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public loginUser(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginFormValue: LoginFormValue = this.loginForm.getRawValue();
    const user: Readonly<User> = {
      email: loginFormValue.email,
      password: loginFormValue.password,
      username: 'Incognito'
    };

    this.auth.login(user);
    this.loginForm.reset();
    this.router.navigate(['search']);
  }

  public registerUser(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const registerFormValue: RegisterFormValue = this.registerForm.getRawValue();
    const user: User = {
      email: registerFormValue.email,
      password: registerFormValue.password,
      username: registerFormValue.username
    };
    this.auth.login(user);
    this.loginForm.reset();
    this.router.navigate(['search']);
  }

  public toggleFormState(): void {
    this.isLoginForm = !this.isLoginForm;
  }
}
