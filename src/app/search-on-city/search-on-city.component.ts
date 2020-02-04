import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WthService } from '../services/wth.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
// import { FilterpipePipe } from '../pipes/filterpipe.pipe';

@Component({
  selector: 'app-search-on-city',
  templateUrl: './search-on-city.component.html',
  styleUrls: ['./search-on-city.component.css'] ,
  // pipes: [FilterpipePipe],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class SearchOnCityComponent implements OnInit {
  @Input()  searchText;
  forecast;
  cityInfo = [];
  constructor(private _router:Router,private weatherService:WthService) { }
  @HostListener('scroll', ['$event'])  onScroll(event){
    console.log("successful scroll event");
  }

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
    this._router.navigate(['/today']);
  }

}
