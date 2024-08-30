import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { Store } from "@ngrx/store";
import { appActions } from "../../../store/app.actions";
import { transactionsActions } from "../../../features/transactions/store/transactions.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  private store = inject(Store);

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;
  nom: string = "Transactions";
  icon: string = "pi pi-chart-line"

    date: Date = new Date();

  from!: Date;
  to!: Date;
  selectedCity: number = 1;
  cities: number[] = [1, 2, 3];

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', disabled: false , routerLink: "dashboard", skipLocationChange: true, command: () => {this.nom = 'Dashboard'; this.icon='pi pi-home' }},
      { label: 'Transactions', icon: 'pi pi-chart-line', disabled: false, routerLink: "transactions", skipLocationChange: true, command: () => {this.nom = 'Transactions'; this.icon='pi pi-chart-line' } },
      { label: 'Expenses', icon: 'pi pi-credit-card', disabled: false, routerLink: "expenses", skipLocationChange: true, command: () => {this.nom = 'Expenses'; this.icon='pi pi-credit-card' } },
    ];

    this.activeItem = this.items[0];

    const now = new Date(), y = now.getFullYear(), m = now.getMonth();
    this.from = new Date(y, m, 1);
    this.to = new Date(y, m + 1, 1);
    this.dispatch();
  }

  private dispatch() {
    this.store.dispatch(appActions.setFrom({from: this.from}));
    this.store.dispatch(appActions.setTo({to: this.to}));
    this.store.dispatch(appActions.setAccount({account: this.selectedCity}));
  }

  reload() {
    // const value = this.authenticationService.getUser();
    // value?.functions.callFunction('getOperations', this.selectedCity, moment(this.from).format('YYYY-MM-DD'), moment(this.to).format('YYYY-MM-DD')).then(res => {
    //   console.warn(res);
    //   this.products = JSON.parse(res);
    //   let sold = 0;
    //   this.products.forEach(value1 => {
    //     value1.sold = value1.amount + sold;
    //     sold = value1.sold
    //   })
    // });

    this.dispatch();

    switch (this.nom){
      case 'Transactions':
        this.store.dispatch(transactionsActions.getAll())
    }
  }
}
