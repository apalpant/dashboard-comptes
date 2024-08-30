import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDirective } from './directives/authentication/authentication.directive';
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { MenuModule } from "primeng/menu";
import { ToolbarModule } from "primeng/toolbar";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
  declarations: [
    AuthenticationDirective,
    HeaderComponent
  ],
  exports: [
    AuthenticationDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    MenuModule,
    ToolbarModule,
    FormsModule
  ]
})
export class CoreModule {
}
