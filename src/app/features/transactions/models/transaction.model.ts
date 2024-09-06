export class Transaction {
  date: Date = new Date();
  label: string = "";
  amount: number = 0;
  sold: number = 0;
  _id: string = "";
}

export class AggregatedTransaction {
  totalAmount: number = 0;
  _id: string = "";
}

export class Sold {
  _id: string = "";
  real: number = 0;
  expected: number = 0;
  date: Date = new Date();
}
