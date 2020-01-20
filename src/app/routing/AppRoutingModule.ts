import { TodayComponent } from '../today/today.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailesWeatherComponent } from '../detailes-weather/detailes-weather.component';
import { NgModule } from '@angular/core';
import { SearchOnCityComponent } from '../search-on-city/search-on-city.component';

export const routes: Routes = [
  {path:'', component: TodayComponent},
  {path:'detailes-weather/:id',component:DetailesWeatherComponent},
  {path:'searchOnCity',component:SearchOnCityComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
