import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import * as Realm from "realm-web";
import { User } from "realm-web";
import { Router } from "@angular/router";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Store } from "@ngrx/store";
import { appActions } from "../../../store/app.actions";
import { DatabaseService } from "../database-service/database.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit{

  private _isAuthenticated = false;

  private _isAuthenticated$ = new Subject<boolean>();

  private connectedUser: User | null = null;

  constructor(private router: Router, private store: Store, private databaseService: DatabaseService) {
    console.warn('constructor AuthenticationService ')
    // this.extracted();
  }

  private extracted() {
    const user = sessionStorage.getItem('user');
    if (user) {
      const googleUser = JSON.parse(user);
      if(googleUser) {
        this._isAuthenticated = true;
        this._isAuthenticated$.next(true);
        const app = new Realm.App({id: "application-2-cxpzhbm"});
        const credentials = Realm.Credentials.google({idToken: googleUser.idToken});
        app.logIn(credentials).then(value => {
          this.connectedUser = value;
          this.router.navigateByUrl("/transactions", {skipLocationChange: true}).then(r => {
          });
        });
      }
    }
  }

  getUser() {
    return this.connectedUser;
  }

  login(socialUser: SocialUser, user: User) {
    sessionStorage.setItem('user', JSON.stringify(socialUser));
    // this.store.dispatch(appActions.setUser({user: JSON.stringify(user) }));
    this.databaseService.setUser(user);
    // FIXME
    // ERROR TypeError: can't prevent extensions on this proxy object
    // this.store.dispatch(appActions.setClient({client: user }));

    // this.router.navigateByUrl("/transactions", {skipLocationChange: true}).then(r => {
    // });
    this.connectedUser = user;
    this._isAuthenticated = true;
    this._isAuthenticated$.next(true);

  }

  logout() {
    // this.databaseService.setUser(undefined);
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

  ngOnInit(): void {
    console.warn('ngOnInit AuthenticationService ')
    // this.extracted();
  }
}
