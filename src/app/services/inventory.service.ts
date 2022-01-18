import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseURL ="http://localhost:8087/Inventory";
  
  constructor(private httpClient: HttpClient) { }

  getInventoryList(): Observable<any>{
    return this.httpClient.get<any> (this.baseURL + '/getAllInv');
  }

  addInventoryList(inventory: Inventory) {
    console.log(inventory + " see me ");
    return this.httpClient.post<any>(this.baseURL + '/addInv', inventory);
  }

}
