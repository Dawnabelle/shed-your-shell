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
  // newItemUrl: string = "https://images.unsplash.com/photo-1507568237455-03228e5ddb7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbcbd24529749be10844e137c3e409d7&auto=format&fit=crop&w=1246&q=80";
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


  submitForm(userName: string, itemUrl: string, type, size: string, colors: string, cut: string, condition: string){
    var newItem: ItemModel = new ItemModel(userName, itemUrl, this.newItemType, this.newItemSize, this.newItemColors, this.newItemCut, this.newItemCondition);
    console.log(newItem);
    this.itemsService.getItems();
  }
}
