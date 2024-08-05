import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  implements OnInit, OnDestroy {

  componentName = 'TableComponent'

  constructor() {
    console.log(`constructor ${this.componentName}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName}`)
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName}`)
  }

}
