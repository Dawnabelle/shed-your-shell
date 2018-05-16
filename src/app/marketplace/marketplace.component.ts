import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [UserService]
})
export class MarketplaceComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUser();
    console.log(this.users);
  }

  typeParam = null;
  sizeParam = null;
  cutParam = null;
  conditionParam = null;
  colorParam = null;

  typeParamSet(type) {
    this.typeParam = type;
  }

  sizeParamSet(size) {
    this.sizeParam = size;
  }

  cutParamSet(cut) {
    this.cutParam = cut;
  }

  conditionParamSet(condition) {
    this.conditionParam = condition;
  }

  colorParamSet(color) {
    this.colorParam = color;
  }

}
