import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AppRoutingModule, appComponent } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,appComponent
  ],
  imports: [
  
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
