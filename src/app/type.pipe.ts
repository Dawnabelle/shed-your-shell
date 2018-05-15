import { Pipe, PipeTransform } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemModel } from './models/item.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: 'type',
  pure: false
})

export class TypePipe implements PipeTransform {
  // items: FirebaseListObservable<any[]>;
  // transform(input: items, desiredType) {
    transform(input: ItemModel[], desiredType) {
    console.log("desired type at pipe: " , desiredType);
    console.log("input array at pipe: " , input);
    let output: ItemModel[] = [];
    if(desiredType === "top") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === "top") {
         output.push(input[i]);
        }
      }
      console.log("output after pipe: " , output);
      return output;
    } else {
      return input;
    }
  }

}
