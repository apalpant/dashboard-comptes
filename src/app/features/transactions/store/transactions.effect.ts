import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { transactionsActions } from "./transactions.action";
import { map, switchMap, withLatestFrom } from "rxjs";
import { TransactionService } from "../services/transaction.service";
import { select, Store } from "@ngrx/store";
import { selectSearch } from "../../../store/app.selectors";

export const transactionsGetAll$ = createEffect(
  (actions$ = inject(Actions), store = inject(Store), transactionService = inject(TransactionService)) => {
    return actions$.pipe(
      ofType(transactionsActions.getAll),
      withLatestFrom(
        store.pipe(select(selectSearch))
      ),
      switchMap(([param, search]) => transactionService.getAll(search)),
      map((transactionsList) => transactionsActions.getAllSuccess({transactionsList}))
    );
  },
  {functional: true}
);
