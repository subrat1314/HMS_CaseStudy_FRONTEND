import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';
import { ServicesComponent } from './services/services.component';
import { RoomComponent } from './services/room/room.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './services/reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './home/gallary/gallary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { PaySuccessComponent } from './payment/pay-success/pay-success.component';

import { ContactComponent } from './home/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './dashboard/department/department.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './home/about/about.component';

// import { EnduserComponent } from './enduser/enduser.component';
// import { InternalDashBoardComponent } from './internal-dash-board/internal-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelComponent,
    ServicesComponent,
    RoomComponent,
    ReservationComponent,
    LoginComponent,
    GallaryComponent,
    PaymentComponent,
    PaySuccessComponent,
   
    ContactComponent,
    DashboardComponent,
    DepartmentComponent,
    InventoryComponent,
    StaffComponent,
    SignupComponent,
    AboutComponent,
    // EnduserComponent,
    // InternalDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
