import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';

@Pipe({
  name: 'color',
  pure: false
})
export class ColorPipe implements PipeTransform {
  transform(input: ItemModel[], desiredColor) {
    let output: ItemModel[] = [];
    const colors: Array<string> = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "white", "grey", "brown", "multi"];
    const index = colors.indexOf(desiredColor);

    if(desiredColor !== "" && desiredColor !== null) {
      for (let i = 0; i < input.length; i++) {
        if(input[i].colors === colors[index]) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
