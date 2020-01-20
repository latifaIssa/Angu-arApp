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
fourDayWeatherInfo = [];
  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.wth = params.get('id'); 
       console.log(this.wth);
       this.weatherService.getPosition().then(pos=>{
        this.weatherService.getWeatherData(pos.lat, pos.lng, "forecast",4).subscribe(data=>{
          this.forecast = data;   
          this.fourDayWeatherInfo = this.weatherService.setWeatherInfo(this.forecast);
           
        });
    })
      
   });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  back(): void{
    this._router.navigate(['/']);
  }

}
