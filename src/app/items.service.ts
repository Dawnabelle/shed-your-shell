import { Injectable } from '@angular/core';
import { ItemModel } from './models/item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ItemsService {

  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
   }

  getItems() {
    return this.items;
  }

  getItemById(itemID: string){
    return this.database.object('items/' + itemID);
  }

}
