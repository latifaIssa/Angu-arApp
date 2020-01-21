import { Component, OnInit, Input } from '@angular/core';
import { WthService } from '../services/wth.service';
import { Router } from '@angular/router';
// import { FilterpipePipe } from '../pipes/filterpipe.pipe';

@Component({
  selector: 'app-search-on-city',
  templateUrl: './search-on-city.component.html',
  styleUrls: ['./search-on-city.component.css'] ,
  // pipes: [FilterpipePipe],
})
export class SearchOnCityComponent implements OnInit {
  @Input()  searchText;
  forecast;
  cityInfo = [];
  constructor(private _router:Router,private weatherService:WthService) { }

  ngOnInit() {
    this.weatherService.getPosition().then(pos=>{
      this.weatherService.getWeatherData(pos.lat, pos.lng, "find",32).subscribe(data=>{
        this.forecast = data;
        console.log(this.forecast);
        this.cityInfo.push(this.forecast.list);
        
      });
      console.log(this.cityInfo);

  });
  }
  backToHome(): void{
    this._router.navigate(['/']);
  }

}
