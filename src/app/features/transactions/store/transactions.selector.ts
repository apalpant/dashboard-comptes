import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionsState } from "./transactions.state";

export const selectTransactionsState = createFeatureSelector<TransactionsState>('transactions');

export const selectTransactionsList = createSelector(
  selectTransactionsState,
  (state: TransactionsState) => state.transactionsList
);

export const selectTransactionsLoading = createSelector(
  selectTransactionsState,
  (state: TransactionsState) => state.loading
);
