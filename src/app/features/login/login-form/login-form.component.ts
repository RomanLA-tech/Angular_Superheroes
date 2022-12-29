import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {LoginForm, RegisterForm} from '@features/login/login-form/login-form.interface';
import {AuthService} from '@services/auth.service';
import {User} from '@shared/interfaces';
import {CustomValidators} from '@utils/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  public submitted = false;
  public errorMessage: string = '';
  public isLoginForm = true;

  public readonly loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [this.validators.validateEmail]
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [this.validators.validatePassword, Validators.required]
    })
  });

  public readonly registerForm: FormGroup<RegisterForm> = new FormGroup<RegisterForm>({
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

  constructor(
    public readonly auth: AuthService,
    private readonly validators: CustomValidators,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authExpired']) {
        this.errorMessage = `Your current session has expired. Please login
                              again to continue using this app!`;
      }
    });
  }

  public loginUser(): void {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.submitted = true;

      const user: User = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
        username: 'Incognito'
      };

      this.auth.login(user);
      this.loginForm.reset();
      this.router.navigate(['/user', 'home']);
    }
  }

  public registerUser(): void {
    if (this.registerForm.invalid) {
      return;
    } else {
      const user: User = {
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        username: this.registerForm.controls['username'].value
      };
      this.auth.login(user);
      this.loginForm.reset();
      this.router.navigate(['/user', 'home']);
    }
  }

  public setFormState(): void {
    this.isLoginForm = !this.isLoginForm;
  }
}
