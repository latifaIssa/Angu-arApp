import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WthService } from '../services/wth.service';
 

@Component({
  selector: 'app-detailes-weather',
  templateUrl: './detailes-weather.component.html',
  styleUrls: ['./detailes-weather.component.css']
})
export class DetailesWeatherComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute,private _router:Router,private weatherService:WthService) {
    this._Activatedroute.paramMap.subscribe(params => params.get('wth'));
   }
sub;
wth;
forecast;
weatherInfo ;
fourDayWeatherInfo = [];
detWeather;
  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.wth = params.get('id'); 
       console.log(this.wth);
       this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng, "forecast").subscribe(data=>{
          this.forecast = data;   
          const weatherInfo = [] = this.setWeatherInfo(this.forecast);
        });
    })
      
   });
  }
  setWeatherInfo(forecast: any){
    for(let i=0; i<this.forecast.list.length - 8; i=i+8){
      this.weatherInfo = { 
        id:i/8,
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
      // console.log(this.fourDayWeatherInfo);
      return this.fourDayWeatherInfo;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  back(): void{
    this._router.navigate(['/']);
  }

}
