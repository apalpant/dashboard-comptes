import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { Store } from "@ngrx/store";
import { distinctUntilChanged, Observable } from "rxjs";
import { Transaction } from "../../models/transaction.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { selectTransactionsList, selectTransactionsLoading } from "../../store/transactions.selector";
import { transactionsActions } from "../../store/transactions.action";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  private store = inject(Store);
  loading$: Observable<boolean> = this.store.select(selectTransactionsLoading);

  componentName = 'TransactionsComponent'
  loading: boolean = false;

  constructor() {
    console.log(`constructor ${this.componentName}`)
    this.loading$.pipe(takeUntilDestroyed(), distinctUntilChanged()).subscribe(value => this.loading = value);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)
    this.store.dispatch(transactionsActions.getAll());
  }


}
