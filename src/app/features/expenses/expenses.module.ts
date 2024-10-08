import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpensesRoutingModule } from "./expenses-routing.module";



@NgModule({
  declarations: [
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
