import { Pipe, PipeTransform } from '@angular/core';
import {ICategory} from './../model/category';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICategory[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((category: ICategory) =>
    category.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
