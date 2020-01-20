import { AppRoutingModule } from "./routing/AppRoutingModule";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { DetailesWeatherComponent } from './detailes-weather/detailes-weather.component';
import { SearchOnCityComponent } from './search-on-city/search-on-city.component';
// import { FilterpipePipe } from './pipes/filterpipe.pipe';
 


 
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    DetailesWeatherComponent,
    SearchOnCityComponent,
    // FilterpipePipe,

 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
