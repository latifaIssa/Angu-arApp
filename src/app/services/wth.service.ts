import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WthService {
  fourDayWeatherInfo = [];
  weatherInfo;
  url = environment.weatherApi;
  ApiKey = environment.ApiKey;
  constructor(private http:HttpClient) { }
  getWeatherData(lat,lng,typeOfData,cnt){
    let params = new HttpParams()
    .set("lat", lat)
    .set("lon", lng)
    .set("cnt", cnt)
    .set("appid", this.ApiKey)
    return this.http.get(this.url+`${typeOfData}`, {params});
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
  setWeatherInfo(forecast: any){
    
    for(let i=0; i<forecast.list.length ; i=i+8){
      this.weatherInfo = { 
        id: i/8,
        date: forecast.list[i].dt_txt,
        mainstate:forecast.list[i].weather[0].main,
        // icon:forecast.list[i].main.weather[0].icon,
        temp:forecast.list[i].main.temp,
        temp_min: forecast.list[i].main.temp_min,
        temp_max: forecast.list[i].main.temp_max,
        feels_like: forecast.list[i].main.feels_like,
        pressure: forecast.list[i].main.pressure,
        sea_level: forecast.list[i].main.sea_level,
        grnd_level: forecast.list[i].main.grnd_level,
        humidity: forecast.list[i].main.humidity,
        temp_kf: forecast.list[i].main.temp_kf
      }
      this.fourDayWeatherInfo.push(this.weatherInfo);
      }
      
      return this.fourDayWeatherInfo;
  }
}
