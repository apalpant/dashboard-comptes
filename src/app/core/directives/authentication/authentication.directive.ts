import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from "../../services/authentication-service/authentication.service";
import { distinctUntilChanged } from "rxjs";

@Directive({
  selector: '[appAuthentication]'
})
export class AuthenticationDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private authenticationService: AuthenticationService) {

    this.authenticationService.isAuthenticated$().pipe(distinctUntilChanged()).subscribe(value => {
      if (value) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}
