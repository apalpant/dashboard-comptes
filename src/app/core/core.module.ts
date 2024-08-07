import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDirective } from './directives/authentication/authentication.directive';



@NgModule({
    declarations: [
        AuthenticationDirective
    ],
    exports: [
        AuthenticationDirective
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
