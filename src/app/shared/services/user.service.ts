import { Injectable } from '@angular/core';

import { User } from '@interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsersService {
  public getAllUsers: ReadonlyArray<User> = JSON.parse(localStorage.getItem('users')!)
    ? JSON.parse(localStorage.getItem('users')!) : [];
}
