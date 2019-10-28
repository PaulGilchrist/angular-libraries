import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'sortObjects' })
export class SortObjectsPipe implements PipeTransform {
    // Sort objects either accending or decending by comparing one of the object's properites
    transform(input: object[], field: string, desc = false): object[] {
        if (input && field) {
            return input.sort((a: object, b: object) => {
                if (a[field] < b[field]) {
                    return desc ? 1 : -1;
                }
                if (b[field] < a[field]) {
                    return desc ? -1 : 1;
                }
                return 0;
            });
        }
        return input;
    }
}
