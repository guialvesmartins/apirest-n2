import { PhotoPage } from './../photo/photo';
import { TodoPage } from './../todo/todo';

import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userPage = UserPage;
  todoPage = TodoPage;
  photoPage = PhotoPage;
  
  constructor(public navCtrl: NavController) {
  }

}
