import { AppRoutingModule } from "./routing/AppRoutingModule";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormControlName} from '@angular/forms';
 

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { DetailesWeatherComponent } from './detailes-weather/detailes-weather.component';
import { SearchOnCityComponent } from './search-on-city/search-on-city.component';

import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { LoginComponent } from './login/login.component';
// import { TempConverterPipe } from './pipes/temp-converter.pipe';


 
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    DetailesWeatherComponent,
    SearchOnCityComponent,
    FilterpipePipe,
    LoginComponent,
    
    // TempConverterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
