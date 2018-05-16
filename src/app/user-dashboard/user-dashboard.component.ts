import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { ItemModel } from './../models/item.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers: [ItemsService, UserService]
})
export class UserDashboardComponent implements OnInit {

  users: User[] = [];

  items: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  newItemType: string = "top";
  newItemSize: string = "xs";
  newItemColors: string = "red";
  newItemCut: string = "masc";
  newItemCondition: string = "new";

  constructor(private router: Router, private itemsService: ItemsService, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUser();
  }

  goToMarketplace(clickedButton){
    this.router.navigate(['marketplace']);
  }


  submitForm(userName: string, itemUrl: string, type: string, size: string, colors: string, cut: string, condition: string){
    let stored = document.getElementById('stored');

    let newItem: ItemModel = new ItemModel(userName, itemUrl, this.newItemType, this.newItemSize, this.newItemColors, this.newItemCut, this.newItemCondition);
    console.log(newItem);
    this.itemsService.addItems(newItem);
    stored.innerHTML += "Your item has been stored! Click the button below to proceed to the marketplace.";
  }
}
