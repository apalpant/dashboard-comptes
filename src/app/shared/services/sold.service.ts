import { Injectable } from '@angular/core';
import { DatabaseService } from "../../core/services/database-service/database.service";
import { Search } from "../models/search";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SoldService {

  constructor(private databaseService: DatabaseService) {
  }

  getSold(search: Search): Observable<number> {
    return this.databaseService.getSold(search.account, search.from).pipe(map(sold => sold.real));
  }
}
