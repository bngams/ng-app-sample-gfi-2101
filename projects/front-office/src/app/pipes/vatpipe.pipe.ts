import { Pipe, PipeTransform } from '@angular/core';

/*
 * Display the vat amount with corresponding rate
 * By default rate to 0.20
 * Usage:
 *   value | vat:0.055
 * Example:
 *   {{ 10 | vat:0.20 }}
 *   formats to: 2
*/
@Pipe({
  name: 'vat'
})
export class VATPipePipe implements PipeTransform {

  transform(value: number, rate: number = 0.20): number {
    return value * rate;
  }

}
