import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Login', icon: 'pi pi-sign-in', disabled: false , routerLink: "/"},
      { label: 'Dashboard', icon: 'pi pi-home', disabled: false , routerLink: "dashboard"},
      { label: 'Transactions', icon: 'pi pi-chart-line', disabled: false, routerLink: "transactions" },
      { label: 'Expenses', icon: 'pi pi-credit-card', disabled: false, routerLink: "expenses" },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
