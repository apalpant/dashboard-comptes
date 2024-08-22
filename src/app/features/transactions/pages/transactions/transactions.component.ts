import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../../core/services/authentication-service/authentication.service";
import * as moment from "moment";
import { MessageService } from "primeng/api";

export interface Operation {
  date: Date,
  label: string,
  amount: number,
  sold: number
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {

  componentName = 'TransactionsComponent'
  // selectedProduct: any;
  selectedProduct!: Operation;
  products: Operation[] = []

  from!: Date;
  to!: Date;
  selectedCity: number = 1;
  cities: number[] = [1, 2, 3];

  clonedProducts: { [s: string]: Operation } = {};

  constructor(private authenticationService: AuthenticationService, private messageService: MessageService) {
    console.log(`constructor ${this.componentName}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)

    // const now = new Date()
    // this.from = moment().startOf('month').fromNow();
    // this.to = ;

    const date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.from = new Date(y, m, 1);
    this.to = new Date(y, m + 1, 1);

    const value = this.authenticationService.getUser();
    if (value) {
      const mongo = value.mongoClient('mongodb-atlas');
      const collection = mongo.db('comptes').collection("operations");
      console.log(collection.findOne())

      value.functions.callFunction('hello', 'hellooow', ' world !').then(res => {
        console.log(res);
      });

      // account: 1, from: "2024-03-01", to: "2024-04-01"}

      console.warn(`selected ${this.selectedCity} from ${moment(this.from).format('YYYY-MM-DD')} to ${moment(this.to).format('YYYY-MM-DD')}`)

      this.reload()
    }
  }

  getSeverity(sold: number) {
    // switch (status) {
    //   case 'INSTOCK':
    //     return 'success';
    //   case 'LOWSTOCK':
    //     return 'warning';
    //   case 'OUTOFSTOCK':
    //     return 'danger';
    // }
    return sold > 0 ? 'success' : 'danger';
  }

  reload() {
    const value = this.authenticationService.getUser();
    value?.functions.callFunction('getOperations', this.selectedCity, moment(this.from).format('YYYY-MM-DD'), moment(this.to).format('YYYY-MM-DD')).then(res => {
      console.warn(res);
      this.products = JSON.parse(res);
      let sold = 0;
      this.products.forEach(value1 => {
        value1.sold = value1.amount + sold;
        sold = value1.sold
      })
    });
  }

  onRowEditInit(product: Operation) {
    // this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Operation) {
    if (isNaN(product.amount)) {
      // delete this.clonedProducts[product.id as string];
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid amount'});
    } else {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Amount is updated'});
    }
  }

  onRowEditCancel(product: Operation, index: number) {
    // this.products[index] = this.clonedProducts[product.id as string];
    // delete this.clonedProducts[product.id as string];
  }
}
