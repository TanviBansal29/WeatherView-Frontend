import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter',
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return `${value} °C`;
    }
    return value.toString();
  }
}
