import { Injectable } from '@angular/core';
import { User } from "realm-web";
import { Transaction } from "../../../features/transactions/models/transaction.model";
import * as moment from "moment";
import { from, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private user: User | undefined;

  constructor() {

  }

  setUser(user: User) {
    this.user = user;
  }

  getTransactions(account: number, frm: Date, to: Date): Observable<Transaction[]> {
    const result: Promise<any> | undefined = this.user?.functions.callFunction('getOperations', account, moment(frm).format('YYYY-MM-DD'), moment(to).format('YYYY-MM-DD'));
    return result ? from(result).pipe(map(value => JSON.parse(value)), map((array: Object[]) => array.map(element => Object.assign(new Transaction(), element)))) : of([])
  }
}
