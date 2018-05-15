import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';

@Pipe({
  name: 'size',
  pure: false
})
export class SizePipe implements PipeTransform {
  transform(input: ItemModel[], desiredSize) {
    let output: ItemModel[] = [];
    const sizes: Array<string> = ["xs", "s", "m", "l", "xl"];
    const index = sizes.indexOf(desiredSize);

    if(desiredSize !== "" && desiredSize !== null) {
      for (let i = 0; i < input.length; i ++) {
        if(input[i].size === sizes[index]) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
