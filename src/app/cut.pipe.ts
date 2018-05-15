import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';

@Pipe({
  name: 'cut',
  pure: false
})
export class CutPipe implements PipeTransform {
  transform(input: ItemModel[], desiredCut) {
    let output: ItemModel[] = [];
    const cuts: Array<string> = ["femme", "masc", "unisex"];
    const index = cuts.indexOf(desiredCut);

    if(desiredCut !== "" && desiredCut !== null) {
      for (let i = 0; i < input.length; i++) {
        if(input[i].cut === cuts[index]) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
