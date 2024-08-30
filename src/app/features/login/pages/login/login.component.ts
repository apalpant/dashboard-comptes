import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../../core/services/authentication-service/authentication.service";
import { SocialAuthService } from "@abacritt/angularx-social-login";
import * as Realm from "realm-web";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // https://www.npmjs.com/package/@abacritt/angularx-social-login/v/2.0.0

  componentName = 'LoginComponent'

  constructor(private router: Router, private authenticationService: AuthenticationService, private authService: SocialAuthService) {
    console.log(`constructor ${this.componentName}`)
  }

  // constructor(private router: Router, private authenticationService: AuthenticationService) {
  //   console.log(`constructor ${this.componentName}`)
  // }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }


  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)

    const app = new Realm.App({id: "application-2-cxpzhbm"});

    this.authService.authState.pipe(takeUntilDestroyed(), distinctUntilChanged()).subscribe((user) => {

      console.log('GOOGLE', user)

      const credentials = Realm.Credentials.google({idToken: user.idToken});
      app.logIn(credentials).then(value => {
        this.authenticationService.login(user, value)
        this.router.navigateByUrl("/transactions", {skipLocationChange: true}).then(r => {
        });
      })
    });
  }
}
