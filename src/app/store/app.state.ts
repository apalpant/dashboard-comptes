import { Search } from "../shared/models/search";
import { User } from "realm-web";

export interface AppState {

  loading: boolean;

  search: Search;

  // token: string | undefined;
  //
  // transactions: Operation[];
  //
  // expenses: any[];
  //
  // dashboard: DashBoard;
}

export interface DashBoard {

  sold: number;

  amount: number;

  overdraft: overdraft;
}

export interface overdraft {

  from: Date;

  to: Date;

  max: number;
}

export const appInitialState: AppState = {
  search: {
    from: new Date(),
    to: new Date(),
    account: 0
  },
  loading: true,
};


