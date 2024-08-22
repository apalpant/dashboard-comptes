import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsRoutingModule } from "./transactions-routing.module";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { CalendarModule } from "primeng/calendar";
import { FormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { RippleModule } from "primeng/ripple";
import { ToolbarModule } from "primeng/toolbar";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";



@NgModule({
  declarations: [
    TransactionsComponent,
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    TableModule,
    TagModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    RippleModule,
    ToolbarModule,
    InputTextModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class TransactionsModule { }
