import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { LoginRoutingModule } from "./login-routing.module";
import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig
} from "@abacritt/angularx-social-login";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        // SharedModule,
        // FIXME - why don't support shared
        ButtonModule,
        RouterLink,
        LoginRoutingModule,
        GoogleSigninButtonModule
    ],
  // providers: [{
  //   provide: 'SocialAuthServiceConfig',
  //   useValue: {
  //     autoLogin: false,
  //     providers: [
  //       {
  //         id: GoogleLoginProvider.PROVIDER_ID,
  //         provider: new GoogleLoginProvider(
  //           '163654754342-t3htf7nfp828bdna06ijsr55s1cf4v8b.apps.googleusercontent.com'
  //         )
  //       }
  //     ],
  //     onError: (error) => {
  //       console.error(error);
  //     }
  //   } as SocialAuthServiceConfig,
  // }],
})
export class LoginModule {
}
