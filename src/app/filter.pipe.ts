import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, filterStrings: any, propName: any): any {
        if (!filterStrings || filterStrings.length === 0) {
            return value;
        }

        // Console para comprobar que filtre los datos
        console.group('++++ GRUPO');
        console.log(filterStrings);
        console.log(propName);
        console.groupEnd();

        let resultArray = [];

        if (filterStrings === undefined || filterStrings === '') {
            resultArray = value;
        }

        for (const item of value) {
            if (item[propName] === filterStrings) {
                resultArray.push(item);
            }
        }

        return resultArray;
    }

}
