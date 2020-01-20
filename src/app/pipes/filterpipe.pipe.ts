import { Pipe, PipeTransform } from '@angular/core';
import { Cities } from 'protractor';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(city: Cities[], searchText: string): any {
     
  }

}
