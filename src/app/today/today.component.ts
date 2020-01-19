import { Component, OnInit } from '@angular/core';
import { WthService } from '../services/wth.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  lon;
  weather ;
  forecast;
  weatherInfo;
  public fourDayWeatherInfo = [];
  constructor(private weatherService: WthService) { }

  ngOnInit() {
    // this.weatherService.getWeatherData(35,139).subscribe(data=>{
      
    // })
    this.getCurrentLocation("weather");
    // this.getLocation("forecast");
  }
  getCurrentLocation(typeOfData: string){
      this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng, typeOfData).subscribe(data=>{
          this.weather = data;
          console.log(`Positon: ${pos.lng} ${pos.lat}`);
          console.log(this.weather);
          // this.setWeatherInfo(this.weather);
          this.getLocation("forecast");
        });
   
      })
  }
  getLocation(typeOfData: string){
    this.weatherService.getPosition().then(pos=>{
      this.weatherService.getWeatherData(pos.lat, pos.lng, typeOfData).subscribe(data=>{
        this.forecast = data;
        // console.log(`Positon: ${pos.lng} ${pos.lat}`);
        console.log(this.forecast);
        this.setWeatherInfo(this.forecast);
      });
 
    })
}
   setWeatherInfo(forecast: any){
    for(let i=0; i<this.forecast.list.length ; i=i+8){
      this.weatherInfo = { 
        date: this.forecast.list[i].dt_txt,
        icon :this.forecast.list[i].weather[0].icon,
        temp_min: this.forecast.list[i].main.temp_min,
        temp_max: this.forecast.list[i].main.temp_max,
        feels_like: this.forecast.list[i].main.feels_like,
        pressure: this.forecast.list[i].main.pressure,
        sea_level: this.forecast.list[i].main.sea_level,
        grnd_level: this.forecast.list[i].main.grnd_level,
        humidity: this.forecast.list[i].main.humidity,
        temp_kf: this.forecast.list[i].main.temp_kf
      }
      this.fourDayWeatherInfo.push(this.weatherInfo);
      }
      console.log(this.fourDayWeatherInfo);
  }

}
