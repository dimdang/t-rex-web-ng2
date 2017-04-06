import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
