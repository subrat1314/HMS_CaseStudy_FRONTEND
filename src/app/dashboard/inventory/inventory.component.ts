import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inventory } from 'src/app/model/inventory';
import { InventoryService } from 'src/app/services/inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

@Injectable()
export class InventoryComponent implements OnInit {

  inv:Inventory= new Inventory

  formValue!: FormGroup
 
  inventory: any

  constructor(private inventoryService: InventoryService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getinventories();
    this.formValue = this.formBuilder.group({
      iid:[''],
      iname:[''],
      istock:[''],
      itype:[''],
      
      })

      this.getinventories();
      this.addinvto();
      this.inventoryService.getInventoryList();
  }

  private getinventories() {
    this.inventoryService.getInventoryList().subscribe(data => {

      console.log(Object.values(data.allstaff));
      this.inventory = data.allstaff;
      console.log(this.inventory.allstaff+"inventory");
    });
  }

  addinvto() {
    this.inv.inventoryId = this.formValue.value.iid;
    this.inv.inventoryName = this.formValue.value.iname;
    this.inv.inventoryStock = this.formValue.value.istock;
    this.inv.invetoryType = this.formValue.value.itype; 

    this.inventoryService.addInventoryList(this.inv).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset;
      this.getinventories();
    })    
  }


 
}
