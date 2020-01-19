import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WthService {
  url = environment.weatherApi;
  ApiKey = environment.ApiKey;
  constructor(private http:HttpClient) { }
  getWeatherData(lat,lng,typeOfData){
    let params = new HttpParams()
    .set("lat", lat)
    .set("lon", lng)
    .set("cnt", '4')
    .set("appid", this.ApiKey)
    return this.http.get(this.url+`/${typeOfData}`, {params});
  }
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.watchPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}
