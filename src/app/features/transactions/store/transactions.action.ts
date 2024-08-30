import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Transaction } from "../models/transaction.model";

// export const loadTransactions = createAction('[App] Load Transactions');
// export const loadTransactionsSuccess = createAction(
//   '[App] Load Transactions Success',
//   props<{ transactions: Transaction[] }>()
// );
// export const loadTransactionsFailure = createAction('[App] Load Transactions Failure');

export const transactionsActions = createActionGroup({
  source: 'transactions',
  events: {
    'Get All':  emptyProps(),
    'Get All Success': props<{ transactionsList: Transaction[] }>(),
    'Get All Failure': props<{ error: any }>()
  },
});
