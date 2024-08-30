import { createFeature, createReducer, on } from "@ngrx/store";
import { appActions } from "./app.actions";
import { appInitialState } from "./app.state";

export const appReducer = createReducer(
  appInitialState,
  on(appActions.setAccount, (state, {account}) => ({
    ...state,
    search: {
      ...state.search,
      account
    }
  })),
  on(appActions.setFrom, (state, {from}) => ({
    ...state,
    search: {
      ...state.search,
      from
    }
  })),
  on(appActions.setTo, (state, {to}) => ({
    ...state,
    search: {
      ...state.search,
      to
    }
  }))
);

export const appFeature = createFeature({
  name: 'app',
  reducer: appReducer  // le reducer plus haut
});
