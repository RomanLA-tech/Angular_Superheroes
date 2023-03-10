import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { CustomValidators } from '@utils/validators';
import { AuthService } from '@services/auth.service';
import { PowerUpService } from '@services/power-up.service';
import { User } from '@interfaces/user.interface';
import { LoginForm, LoginFormValue, RegisterForm, RegisterFormValue } from '@interfaces/login-form.interface';

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
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    public readonly auth: AuthService,
    private readonly powerUpService: PowerUpService,
    private readonly validators: CustomValidators
  ) {
  }

  public ngOnInit(): void {
    this.loginFormInit();
    this.registerFormInit();
    this.onRouteQueryParamsSubscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public loginUser(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginFormValue: LoginFormValue = this.loginForm.getRawValue();
    const user: Readonly<User> = {
      ...loginFormValue,
      username: 'Incognito'
    };
    this.loginForm.reset();
    this.onSuccessfulLoginActions(user);
  }

  public registerUser(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const registerFormValue: RegisterFormValue = this.registerForm.getRawValue();
    const user: User = {
      ...registerFormValue
    };
    this.registerForm.reset();
    this.onSuccessfulLoginActions(user);
  }

  public toggleFormState(): void {
    this.isLoginForm = !this.isLoginForm;
  }

  private onSuccessfulLoginActions(user: Readonly<User>) {
    this.auth.login(user);
    this.powerUpService.savePowerUpToLocalStorage();
    this.router.navigate(['search']);
  }

  private loginFormInit() {
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
  }

  private registerFormInit() {
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
  }

  private onRouteQueryParamsSubscribe() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      if (params['authExpired']) {
        this.errorMessage = `Your current session has expired. Please login
                              again to continue using this app!`;
      }
    });
  }

}
