import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {

  photos: any;

  getPhotos() {
    this.restProvider.getPhotos()
    .then(data => {
      this.photos = data;
      console.log(this.photos);
    });
  }
  
  constructor(public navCtrl: NavController , public restProvider: RestProvider) {
    this.getPhotos();
  }

}
