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
    let types: Array<string> = ["top", "bottom", "one-piece", "accessory", "dress"];

    if (desiredType !==null) {
      for (let j = 0; j < types.length; j++ ) {
        if(desiredType === types[j]) {
          for (let i = 0; i < input.length; i++) {
            if(input[i].type === types[j]) {
             output.push(input[i]);
            }
          }
          return output;
        }
      }
    } else {
      return input;
    }


    // if (desiredType !==null) {
    //   console.log("hello. desiredType is not null");
    //   types.forEach(function(type) {
    //     if(desiredType === type) {
    //       for (let i = 0; i < input.length; i++) {
    //         if(input[i].type === type) {
    //          output.push(input[i]);
    //         }
    //       }
    //       return output;
    //     }
    //   });
    // } else {
    //   return input;
    // }



    // if(desiredType === "top") {
    //   for (let i = 0; i < input.length; i++) {
    //     if(input[i].type === "top") {
    //      output.push(input[i]);
    //     }
    //   }
    //   console.log(output);
    //   return output;
    // } else if(desiredType === "bottom") {
    //   for (let i = 0; i < input.length; i++) {
    //     if(input[i].type === "bottom") {
    //      output.push(input[i]);
    //     }
    //   }
    //   return output;
    // } else if(desiredType === "one-piece") {
    //   for (let i = 0; i < input.length; i++) {
    //     if(input[i].type === "one-piece") {
    //      output.push(input[i]);
    //     }
    //   }
    //   return output;
    // } else if(desiredType === "accessory") {
    //   for (let i = 0; i < input.length; i++) {
    //     if(input[i].type === "accessory") {
    //      output.push(input[i]);
    //     }
    //   }
    //   return output;
    // } else if(desiredType === "dress") {
    //   for (let i = 0; i < input.length; i++) {
    //     if(input[i].type === "dress") {
    //      output.push(input[i]);
    //     }
    //   }
    //   return output;
    // } else {
    //   return input;
    // }
  }
}
