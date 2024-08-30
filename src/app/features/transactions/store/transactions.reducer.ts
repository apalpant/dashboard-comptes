import { createFeature, createReducer, on } from "@ngrx/store";
import { transactionsInitialState } from "./transactions.state";
import { transactionsActions } from "./transactions.action";

export const transactionsReducer = createReducer(
  transactionsInitialState,
  on(transactionsActions.getAll, state => ({
    ...state,
    loading: true
  })),
  on(transactionsActions.getAllSuccess, (state, {transactionsList}) => ({
    ...state,
    transactionsList,
    loading: false
  })),
  on(transactionsActions.getAllFailure, state => ({
    ...state,
    loading: false
  }))
);

export const transactionsFeature = createFeature({
  name: 'transactions',
  reducer: transactionsReducer  // le reducer plus haut
});
