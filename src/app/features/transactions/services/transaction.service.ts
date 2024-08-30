import { Injectable } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { from, map, Observable, of } from "rxjs";
import { Search } from "../../../shared/models/search";
import { DatabaseService } from "../../../core/services/database-service/database.service";

@Injectable({
  providedIn: "root",
})
export class TransactionService {

  constructor(private databaseService: DatabaseService) {
  }

  getAll(search: Search): Observable<Transaction[]> {
    let sold = 0;
    return this.databaseService.getTransactions(search.account, search.from, search.to).pipe(map((array: Transaction[])  => array.map(value => {
      value.sold = sold + value.amount;
      sold = value.sold;
      return value;
    })))
  }
}
