import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../../core/services/authentication-service/authentication.service";
import { SocialAuthService } from "@abacritt/angularx-social-login";
import * as Realm from "realm-web";
import { Subject } from "rxjs";
// import GooglePayload = Realm.Credentials.GooglePayload;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // https://www.npmjs.com/package/@abacritt/angularx-social-login/v/2.0.0

  componentName = 'LoginComponent'

  private message$ = new Subject();

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

    // const credentials = Realm.Credentials.anonymous();
// Add your App ID
    const app = new Realm.App({ id: "application-2-cxpzhbm" });

    app.logIn(Realm.Credentials.anonymous()).then(value => {
      console.log('ANONYMOUSD',value)
    })



    // // Authenticate the user
    // const user = await app.logIn(credentials);
    // // `App.currentUser` updates to match the logged in user
    // console.assert(user.id === app.currentUser.id);

    this.authService.authState.subscribe((user) => {

      console.log('GOOGLE', user)

    //   const app = new Realm.App({ id: "application-1-bwsjwce" });
      const credentials = Realm.Credentials.google({ idToken: user.idToken });
      app.logIn(credentials).then(value => {


        this.authenticationService.login(value)
        this.router.navigateByUrl("/transactions", {skipLocationChange: true}).then(r => {
        });

        // console.log('RESULT', value)
        // const mongo = value.mongoClient('mongodb-atlas');
        // const collection = mongo.db('comptes').collection("operations");
        // console.log(collection.findOne())
        //
        // value.functions.callFunction('hello', 'hellooow', ' world !').then(res => {
        //   console.log(res);
        // });
        //
        // // account: 1, from: "2024-03-01", to: "2024-04-01"}
        // value.functions.callFunction('getOperations', 1, '2024-03-01', '2024-04-01').then(res => {
        //   console.warn(res);
        // });
      })

    // //
    // //   console.warn(credentials);
    // //
    //   app.logIn(credentials, false).then(value =>
    //   // value.functions.callFunction("getOperation")
    //   console.log(value)
    // );
    //
    //
    //   const credentials = Realm.Credentials.anonymous();
    //   app.logIn(credentials).then(value => console.log(value))
    //
    //   //perform further logics
    //   // this.onLoginButtonClick()
    });
  }

  handleCredentialsResponse(response: any) {
    const app = new Realm.App({ id: "application-1-bwsjwce" });
    const credentials = Realm.Credentials.google({ id_token: response.credential } as any);
    app
      .logIn(credentials)
      .then((user : any) => alert(`Logged in with id: ${user.id}`));
  }

  onLoginButtonClick() {
    // this.authenticationService.login()
    // this.router.navigateByUrl("/dashboard", {skipLocationChange: true}).then(r => {
    // });
  }
}
