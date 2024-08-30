import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from "../../services/authentication-service/authentication.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { distinctUntilChanged } from "rxjs";

@Directive({
  selector: '[appAuthentication]'
})
export class AuthenticationDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private authenticationService: AuthenticationService) {

    this.authenticationService.isAuthenticated$().pipe(takeUntilDestroyed(), distinctUntilChanged()).subscribe(value => {
      if (value) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }
}
