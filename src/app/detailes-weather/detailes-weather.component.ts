import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailes-weather',
  templateUrl: './detailes-weather.component.html',
  styleUrls: ['./detailes-weather.component.css']
})
export class DetailesWeatherComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => params.get('id'));
   }

  ngOnInit() {
  }

}
