import { Injectable } from '@angular/core';
import { User } from "realm-web";
import { AggregatedTransaction, Sold, Transaction } from "../../../features/transactions/models/transaction.model";
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

  getAggregatedTransactions(account: number, frm: Date, to: Date): Observable<AggregatedTransaction[]> {
    const result: Promise<any> | undefined = this.user?.functions.callFunction('getAggregatedOperations', account, moment(frm).format('YYYY-MM-DD'), moment(to).format('YYYY-MM-DD'));
    return result ? from(result).pipe(map(value => JSON.parse(value)), map((array: Object[]) => array.map(element => Object.assign(new AggregatedTransaction(), element)))) : of([])
  }

  getSold(account: number, date: Date): Observable<Sold> {
    const result: Promise<any> | undefined = this.user?.functions.callFunction('getSold', account, moment(date).format('YYYY-MM-DD'));
    return result ? from(result).pipe(map(value => JSON.parse(value))) : of();
  }
}
