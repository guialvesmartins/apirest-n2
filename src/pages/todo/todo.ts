import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {

  todos: any;

  getTodos() {
    this.restProvider.getTodos()
    .then(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }
  
  constructor(public navCtrl: NavController , public restProvider: RestProvider) {
    this.getTodos();
  }

}
