import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { User } from "realm-web";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isAuthenticated = false;

  private _isAuthenticated$ = new Subject<boolean>();

  private connectedUser: User | null = null;

  getUser(){
    return this.connectedUser;
  }

  login(user: User) {
    this.connectedUser = user;
    this._isAuthenticated = true;
    this._isAuthenticated$.next(true);

  }

  logout() {
    this.connectedUser = null;
    this._isAuthenticated = false;
    this._isAuthenticated$.next(false);
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  isAuthenticated$(): Observable<boolean> {
    return this._isAuthenticated$.asObservable();
  }
}
