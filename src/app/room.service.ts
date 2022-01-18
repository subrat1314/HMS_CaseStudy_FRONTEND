import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL ="http://localhost:8086/rooms/findAllRoom";
  constructor(private httpClient: HttpClient) { }
  getRoomList(): Observable<any>{
    return this.httpClient.get<any> (`${this.baseURL}`);
  }
}
