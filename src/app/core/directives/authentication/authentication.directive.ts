import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from "../../services/authentication-service/authentication.service";

@Directive({
  selector: '[appAuthentication]'
})
export class AuthenticationDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private authenticationService: AuthenticationService) {

    // TODO - until destroy
    this.authenticationService.isAuthenticated$().subscribe(value => {
      if (value) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}
