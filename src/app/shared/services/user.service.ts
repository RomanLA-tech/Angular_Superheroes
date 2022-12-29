import { Injectable } from '@angular/core';

import { User } from '@shared/interfaces';

@Injectable({providedIn: 'root'})
export class UsersService {
  public getAllUsers: User[] = JSON.parse(localStorage.getItem('users')!)
    ? JSON.parse(localStorage.getItem('users')!) : [];
}
