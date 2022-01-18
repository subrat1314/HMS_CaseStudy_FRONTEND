import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department} from 'src/app/model/department';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  res:Department= new Department
  formValue!:FormGroup
  department:any
  

  constructor(private deptService:DepartmentService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      did:[''],
      dname:[''],
      desc:[''],
      noe:['']
    })
    this.getDept();
    this.addDeptto();
    this.deptService.getDeptList();
  }
  getDept(){
    this.deptService.getDeptList().subscribe(data =>{
      console.log(Object.values(data.alldept));
      this.department=data.alldept;
    });
  }
  
  addDeptto() {
    this.res.departmentID = this.formValue.value.did;
    this.res.departmentName = this.formValue.value.dname;
    this.res.desc = this.formValue.value.desc;
    this.res.no_of_Emp = this.formValue.value.noe; 

    this.deptService.addDeptList(this.res).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset;
      this.getDept;
    })    
  }

  onEditDept(data:any){
    this.formValue.controls['did'].setValue(data.departmentID);
    this.formValue.controls['dname'].setValue(data.departmentName);
    this.formValue.controls['desc'].setValue(data.desc);
    this.formValue.controls['noe'].setValue(data.no_of_Emp);
  }
}