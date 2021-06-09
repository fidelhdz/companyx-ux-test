import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStrings: any, propName: any): any {
    if (!filterStrings || filterStrings.length === 0) {
      return value;
    }
    
    console.group('++++ GRUPO');
    console.log(value);
    console.log(filterStrings);
    console.log(propName);
    console.groupEnd();

    let resultArray = [];
    
    if (filterStrings === undefined || filterStrings === '' || value.length == 0) {
      resultArray = value;
    }
    
    for (const item of value) {
      if(item[propName] === filterStrings){
        resultArray.push(item);
      }          
    }

    return resultArray;
  }

}
