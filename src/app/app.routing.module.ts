import { RouterModule,Routes } from "@angular/router";
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';


const routes : Routes = [
    {path : 'employee' ,component : EmployeeComponent},
    {path : 'contact' ,component : ContactComponent},
  
  ];

  export const appComponent= [EmployeeComponent,ContactComponent];

@NgModule({

    imports: [
      RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }