import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../../core/services/authentication-service/authentication.service";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent  implements OnInit, OnDestroy {

  componentName = 'ExpensesComponent'

  constructor(private authenticationService: AuthenticationService) {
    console.log(`constructor ${this.componentName}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)
  }
}
