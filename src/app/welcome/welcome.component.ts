import { Component, OnInit, Output } from '@angular/core';
import { User } from './../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserService]
})
export class WelcomeComponent implements OnInit {
  newUser: User;
  newUsername: string;
  newPassword: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    console.log('this is just running in the background');
  }
  // showName(clickedUser: User) {
  //   this.userService.pushUser(clickedUser);
  // }
  // showName(clickedUser: User) {
  //   console.log(this.users[0]);
  // }

  newUserLogin() {
    this.newUser = new User(this.newUsername, this.newPassword);
    this.userService.pushUser(this.newUser);
  }
}
