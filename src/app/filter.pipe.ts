import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTxt : string): any {
    if(!value) return [];
    if(!searchTxt) return value;
    return value.filter((item : any) => {
        return item.toLowerCase().includes(searchTxt);
    })
  }

}
