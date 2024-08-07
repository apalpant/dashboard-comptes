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
      { label: 'Dashboard', icon: 'pi pi-home', disabled: false , routerLink: "dashboard", skipLocationChange: true},
      { label: 'Transactions', icon: 'pi pi-chart-line', disabled: false, routerLink: "transactions", skipLocationChange: true },
      { label: 'Expenses', icon: 'pi pi-credit-card', disabled: false, routerLink: "expenses", skipLocationChange: true },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
