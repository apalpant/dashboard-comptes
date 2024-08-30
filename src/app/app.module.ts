import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabMenuModule } from "primeng/tabmenu";
import { CoreModule } from "./core/core.module";
import { GoogleLoginProvider, SocialAuthServiceConfig } from "@abacritt/angularx-social-login";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { MenuModule } from "primeng/menu";
import { ToolbarModule } from "primeng/toolbar";
import { provideState, provideStore } from "@ngrx/store";
import { transactionsFeature } from "./features/transactions/store/transactions.reducer";
import { provideEffects } from "@ngrx/effects";
import { transactionsGetAll$ } from "./features/transactions/store/transactions.effect";
import { appFeature } from "./store/app.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CoreModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    MenuModule,
    ToolbarModule,
  ],
  providers: [
    // FIXME a déplacer dans chaque feature ?
    provideStore(), // on peut laisser vide si on utilise provideState
    provideState(transactionsFeature),
    provideState(appFeature),
    provideEffects({
      transactionsGetAll$
    }),
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '163654754342-t3htf7nfp828bdna06ijsr55s1cf4v8b.apps.googleusercontent.com'
          )
        }
      ],
      onError: (error) => {
        console.error(error);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
