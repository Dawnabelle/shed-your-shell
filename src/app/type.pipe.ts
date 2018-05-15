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
      return output;
    } else if(desiredType === "bottom") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === "bottom") {
         output.push(input[i]);
        }
      }
      return output;
    } else if(desiredType === "one-piece") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === "one-piece") {
         output.push(input[i]);
        }
      }
      return output;
    } else if(desiredType === "accessory") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === "accessory") {
         output.push(input[i]);
        }
      }
      return output;
    } else if(desiredType === "dress") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].type === "dress") {
         output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
