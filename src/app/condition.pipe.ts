import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';

@Pipe({
  name: 'condition',
  pure: false
})
export class ConditionPipe implements PipeTransform {
  transform(input: ItemModel[], desiredCondition) {
    let output: ItemModel[] = [];
    const conditions: Array<string> = ["new", "like-new", "fair"];
    const index = conditions.indexOf(desiredCondition);

    if(desiredCondition !== "" && desiredCondition !== null) {
      for (let i = 0; i < input.length; i++) {
        if(input[i].condition === conditions[index]) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
