import { createActionGroup, props } from "@ngrx/store";
import { User } from "realm-web";

export const appActions = createActionGroup({
  source: 'app',
  events: {
    'Set Account': props<{ account: number }>(),
    'Set From': props<{ from: Date }>(),
    'Set To': props<{ to: Date }>()
  },
});
