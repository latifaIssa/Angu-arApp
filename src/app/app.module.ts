import { AppRoutingModule } from "./routing/AppRoutingModule";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { DetailesWeatherComponent } from './detailes-weather/detailes-weather.component';


 
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    DetailesWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
