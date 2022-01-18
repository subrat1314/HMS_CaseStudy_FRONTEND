import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/room.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

@Injectable()
export class RoomComponent implements OnInit {

  formValue!: FormGroup
 

  
  rooms: any
  constructor(private roomService: RoomService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getRooms();
    this.formValue = this.formBuilder.group({
      bookingid:[''],
      roomid:[''],
      checkin:[''],
      checkout:[''],
      noofguset:[''],
      totalpayment:['']
        })
  }

  private getRooms() {
    this.roomService.getRoomList().subscribe(data => {

      console.log(Object.values(data.allRoom));
      this.rooms = data.allRoom;
      console.log(this.rooms.allRoom+"rooms");
    });
  }


 
}
