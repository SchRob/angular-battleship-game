import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class AppFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }

        const firstItem = items.find((value, index) => index === 0);
        const key = Object.keys(filter).find((value, index) => index === 0);
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        let result = items;
        if (firstItem && Object.keys(firstItem).find(k => k === key)) {
            result =  items.filter(item => item[key] === filter[key]);
        }

        return result;
    }
}
