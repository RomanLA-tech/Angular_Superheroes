import { Injectable } from '@angular/core';
import { User } from '@interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isLogged = false;

  public login(usersData: Readonly<User>): void {
    this.authUserInit(usersData);
    this.isLogged = true;
  }

  public logout(): void {
    this.isLogged = false;
    localStorage.removeItem('authUser');
  }

  public isAuthenticated(): boolean {
    if (this.isSessionExpired()) {
      this.logout();
    } else {
      this.isLogged = true;
    }
    return this.isLogged;
  }

  private authUserInit(userData: Readonly<User>): void {
    const expiredToken = Date.now() + 3600000;
    const authUser = {...userData, 'expiredSession': expiredToken};
    localStorage.setItem('authUser', JSON.stringify(authUser));
  }

  private isSessionExpired(): boolean {
    const activeUser = localStorage.getItem('authUser');
    if (!activeUser) {
      return true;
    } else {
      const expDate = JSON.parse(activeUser).expiredSession;
      return Date.now() > +expDate;
    }
  }
}
