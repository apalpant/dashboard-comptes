import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isAuthenticated = false;

  private _isAuthenticated$ = new Subject<boolean>()

  login() {
    this._isAuthenticated = true;
    this._isAuthenticated$.next(true);

  }

  logout() {
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
