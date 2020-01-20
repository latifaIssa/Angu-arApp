import { Component, OnInit } from '@angular/core';
import { WthService } from '../services/wth.service';
import { Router } from '@angular/router';

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
  fourDayWeatherInfo = [];
  constructor(private route: Router,private weatherService: WthService) { }

  ngOnInit() {
    this.getCurrentLocation(); 
  }
  getCurrentLocation( ){
      this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng, "weather",4).subscribe(currentData=>{
          this.weather = currentData;
          console.log(`Positon: ${pos.lng} ${pos.lat}`);
          console.log(this.weather);
        });
      })
        this.weatherService.getPosition().then(pos=>{
          this.weatherService.getWeatherData(pos.lat, pos.lng, "forecast",4).subscribe(data=>{
            this.forecast = data;
            console.log(this.forecast);
            this.fourDayWeatherInfo = this.weatherService.setWeatherInfo(this.forecast);
          });
   
      })
      this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng, "find",10).subscribe(data=>{
          this.forecast = data;
          console.log(this.forecast);
          this.fourDayWeatherInfo = this.weatherService.setWeatherInfo(this.forecast);
          console.log(this.fourDayWeatherInfo);
        });
  
    })
  
}
 
   
  

}
