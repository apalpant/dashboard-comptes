import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { transactionsActions } from "./transactions.action";
import { forkJoin, map, of, switchMap, withLatestFrom } from "rxjs";
import { TransactionService } from "../services/transaction.service";
import { select, Store } from "@ngrx/store";
import { selectSearch } from "../../../store/app.selectors";
import { SoldService } from "../../../shared/services/sold.service";
import { Search } from "../../../shared/models/search";

export const transactionsGetAll$ = createEffect(
  (actions$ = inject(Actions), store = inject(Store), transactionService = inject(TransactionService), soldService = inject(SoldService)) => {
    return actions$.pipe(
      ofType(transactionsActions.getAll),
      withLatestFrom(
        store.pipe(select(selectSearch)),
      ),
      switchMap(([param, search]) => forkJoin([of(search), soldService.getSold(search)])),
      switchMap((combine: [Search, number]) => transactionService.getAll(combine[0], combine[1])),
      map((transactionsList) => transactionsActions.getAllSuccess({transactionsList: transactionsList}))
    );
  },
  {functional: true}
);
