import { Component, OnInit , Input } from '@angular/core';
import { WthService } from '../services/wth.service';

@Component({
  selector: 'app-search-on-city',
  templateUrl: './search-on-city.component.html',
  styleUrls: ['./search-on-city.component.css'] 
})
export class SearchOnCityComponent implements OnInit {
  searchText;
  forecast;
  fourDayWeatherInfo = [];
  constructor(private weatherService:WthService) { }

  ngOnInit() {
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
