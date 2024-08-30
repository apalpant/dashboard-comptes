import { Transaction } from "../models/transaction.model";

export interface TransactionsState {

  loading: boolean;

  transactionsList: Transaction[];
}

export const transactionsInitialState: TransactionsState = {
  transactionsList: [],
  loading: true
};
