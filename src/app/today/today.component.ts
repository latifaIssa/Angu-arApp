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
  constructor(private weatherService: WthService) { }

  ngOnInit() {
    // this.weatherService.getWeatherData(35,139).subscribe(data=>{
      
    // })
    this.getLocation();
  }
  getLocation(){
     
      this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng).subscribe(data=>{
          this.weather = data;
          console.log(`Positon: ${pos.lng} ${pos.lat}`);
          console.log(this.weather);
        });
        // for(let i=0; i<5; i=i+1){
          //   this.weatherInfo = weatherInfo(this.weather.list[i].dt_txt,
          //      this.weather.list[i].weather[0].icon,
          //     this.weather.list[i].main.temp_min,
          //     this.weather.list[i].main.temp_max,
          //      this.weather.list[i].main.feels_like,
          //     this.weather.list[i].main.pressure,)
        
      })
       

      
    
  }

}
