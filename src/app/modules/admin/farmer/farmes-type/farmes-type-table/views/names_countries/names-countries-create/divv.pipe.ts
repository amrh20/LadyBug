import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divv'
})
export class DivvPipe implements PipeTransform {

  transform(values: [], arrVal: any): unknown {
    return null;
  }

}
