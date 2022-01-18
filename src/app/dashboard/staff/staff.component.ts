
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

@Injectable()
export class StaffComponent implements OnInit {

  sta:Staff= new Staff

  formValue!: FormGroup
  
  staff : any

  constructor(private staffService: StaffService , private formBuilder: FormBuilder) { }

  ngOnInit() {

    
    this.formValue = this.formBuilder.group({
      sid:[''],
      sdid:[''],
      sname:[''],
      sdname:[''],
      semail:[''],
      ssalary:['']
      
      })
      
      this.getstaffs();
      this.addstaffto();
      this.staffService.getStaffList();
  }

  getstaffs() {
    this.staffService.getStaffList().subscribe(data => {

      console.log(Object.values(data.allEmp));
      this.staff = data.allEmp;
      console.log(this.staff.allEmp+"Staff");
    });
  }

  addstaffto() {
    this.sta.empId = this.formValue.value.sid;
    this.sta.empDeptId = this.formValue.value. sdid;
    this.sta.empName = this.formValue.value.sname;
    this.sta.empDeptName = this.formValue.value.sdname; 
    this.sta.email = this.formValue.value.semail; 
    this.sta.empSalary = this.formValue.value.ssalary; 

    this.staffService.addStaffList(this.sta).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset;
      this.getstaffs();
    })    
  }


}
