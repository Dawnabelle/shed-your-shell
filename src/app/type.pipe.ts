import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';

@Pipe({
  name: 'type',
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: ItemModel[], desiredType) {
    let output: ItemModel[] = [];
    for (let i = 0; i < input.length; i++) {
      if(desiredType === "top") {
       output.push(input[i]);
      }
    }
    return output;
  }

}
