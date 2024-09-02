import { Component, inject } from '@angular/core';
import { Transaction } from "../../models/transaction.model";
import { MessageService } from "primeng/api";
import { distinctUntilChanged, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectTransactionsList } from "../../store/transactions.selector";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {

  private store = inject(Store);
  transactionsList$: Observable<Transaction[]> = this.store.select(selectTransactionsList);

  componentName = 'TransactionsComponent'
  selectedProduct!: Transaction;
  transactions: Transaction[];

  constructor(private messageService: MessageService) {
    console.log(`constructor ${this.componentName}`)
    this.transactions = [];
    this.transactionsList$.pipe(takeUntilDestroyed(), distinctUntilChanged()).subscribe(list => {
      this.transactions = list
    });
  }

  getSeverity(sold: number) {
    return sold > 0 ? 'success' : 'danger';
  }

  onRowEditSave(product: Transaction) {
    if (isNaN(product.amount)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid amount'});
    } else {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Amount is updated'});
    }
  }

  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: event.data.label, detail: event.data.amount });
  }

  onRowUnselect(event: any) {
    // this.messageService.add({ severity: 'info', summary: event.data.label, detail: event.data.label });
  }
}
