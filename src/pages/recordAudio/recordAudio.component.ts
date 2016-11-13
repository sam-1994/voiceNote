import {Component} from '@angular/core';

import {NavController, AlertController} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'recordAudio.html'
})
export class RecordAudio {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  public startRecording() {
    try {
      let media = new MediaPlugin('../Library/NoCloud/recording.wav');
      media.startRecord();
    } catch (e) {
      this.showAlert('Could not start recording.');
    }
  }

  public showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}