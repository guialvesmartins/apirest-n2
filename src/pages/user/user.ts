import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  users: any;

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  
  constructor(public navCtrl: NavController , public restProvider: RestProvider) {
    this.getUsers();
  }

}
