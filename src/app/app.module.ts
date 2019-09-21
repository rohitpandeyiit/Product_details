import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    HomeComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
