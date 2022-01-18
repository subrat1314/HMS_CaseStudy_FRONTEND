import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';



@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseURL ="http://localhost:8088/Staff";
  constructor(private httpClient: HttpClient) { }

  getStaffList(): Observable<any>{
    return this.httpClient.get(this.baseURL+'/getAllEmp')
    // return this.httpClient.get<any> (`${this.baseURL}`);
  }

  addStaffList(staff: Staff) {
    console.log(staff + " see me ");
    return this.httpClient.post<any>(this.baseURL + '/addEmp', staff);
  }
  
}
