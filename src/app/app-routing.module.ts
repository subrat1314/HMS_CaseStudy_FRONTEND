import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { StaffComponent } from './dashboard/staff/staff.component';
//import { EnduserComponent } from './enduser/enduser.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { GallaryComponent } from './home/gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaySuccessComponent } from './payment/pay-success/pay-success.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './services/reservation/reservation.component';
import { RoomComponent } from './services/room/room.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  
 {
   path:'home',component:HomeComponent
 },
 
 {
  path:'dashboard',component:DashboardComponent
},
{
  path:'department',component:DepartmentComponent
},
{
  path:'inventory',component:InventoryComponent
},
{
  path:'staff',component:StaffComponent
},
 {
   path:'room',component:RoomComponent
 },
 {
   path:'reservation', component:ReservationComponent
 },
 {
   path:'login',component:LoginComponent
 },
//  {
//   path:'enduser',component:EnduserComponent
// },
 {
   path:'gallary',component:GallaryComponent
 },
 {
  path:'about',component:AboutComponent
},
 {
   path:'payment',component:PaymentComponent
 },
 {
   path:'success',component:PaySuccessComponent
 },
 {
   path:'signup',component:SignupComponent
 },
 
 {
  path:'contact',component:ContactComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
