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
    const types: Array<string> = ["top", "bottom", "one-piece", "accessory", "dress"];
    const index = types.indexOf(desiredType);

    if (desiredType !== "" && desiredType !== null) {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === types[index]) {
         output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }

}
