import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from "../../../../core/services/authentication-service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit, OnDestroy {

  componentName = 'LoginComponent'

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    console.log(`constructor ${this.componentName}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)
  }

  protected onLoginButtonClick() {
    this.authenticationService.login()
    this.router.navigateByUrl("/dashboard", {skipLocationChange: true}).then(r => {});
  }
}
