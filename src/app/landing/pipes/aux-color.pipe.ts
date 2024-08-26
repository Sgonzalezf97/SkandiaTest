import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'auxColor'
})
export class AuxColorPipe implements PipeTransform {

  transform(text: string): string {
    const color = '#FE9200';
    return `<span style="color: ${color};">${text}</span>`;
  }

}
