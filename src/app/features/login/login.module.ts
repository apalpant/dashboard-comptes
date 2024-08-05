import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { LoginRoutingModule } from "./login-routing.module";


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
    LoginRoutingModule
  ]
})
export class LoginModule {
}
