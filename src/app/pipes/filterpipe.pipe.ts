import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(city: any, searchText: string): any {
    //   check if searchText is undefined
    if (searchText == undefined)
    return city;

    return city.filter(function(cityName){
        return cityName.name.toLowerCase().includes(searchText.toLowerCase());
    });
     
  }

}
