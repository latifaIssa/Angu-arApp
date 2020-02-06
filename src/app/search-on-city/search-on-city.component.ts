import { Component, OnInit, Input, HostListener, HostBinding,ElementRef } from '@angular/core';
import { WthService } from '../services/wth.service';
 
// import { PageScrollService } from 'ngx-page-scroll-core';
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
      state('in', style({
        height: '*' ,
        // transform: "translateX(0)"
        })),
        state('out', style({
          height: '5px' ,
          // transform: "translateX(0)"
          })),
      transition('in=>out', [
        style({ height: '*' }),
        animate(250, style({ height: '5px' }))
      ])
    ])
  ]
})
export class SearchOnCityComponent implements OnInit {
  isOpen = true;
  state = 'in';

  toggle() {
    this.isOpen = !this.isOpen;
  }
  onAnimationEvent ( event: AnimationEvent ) {
  }
  @Input()  searchText;
  forecast;
  cityInfo = [];
  constructor(private _router:Router,private weatherService:WthService,  public el: ElementRef) { }
  // @HostListener('scroll', ['$event'])  onScroll(event){
  //   console.log("successful scroll event");
  // }
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'out'
      } else {
        this.state = 'in'
      }

    }
  ngOnInit() {
    this.weatherService.getPosition().then(pos=>{
      this.weatherService.getWeatherData(pos.lat, pos.lng, "find",32).subscribe(data=>{
        this.forecast = data;
        console.log(this.forecast);
        this.cityInfo.push(this.forecast.list);
        
      });
      console.log(this.cityInfo);
      // this.ScrollService.scroll({
      //   document: this.document,
      //   scrollTarget: '.theEnd',
      // });

  });

  }
  backToHome(): void{
    this._router.navigate(['/today']);
  }

}
