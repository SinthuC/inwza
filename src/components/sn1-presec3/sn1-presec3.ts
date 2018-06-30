import { Component } from '@angular/core';
import { Events,AlertController } from 'ionic-angular';

/**
 * Generated class for the Sn1Presec3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn1-presec3',
  templateUrl: 'sn1-presec3.html'
})
export class Sn1Presec3Component {

  text: string;
  buildingHead: string
  buildingDetail: string
  constructor(private events: Events,private alertCtrl: AlertController) {
    console.log('Hello Sn1Presec3Component Component');
    this.text = 'Hello World';
    this.buildingHead = 'ครัวเรือนที่ 1';
    this.buildingDetail ='บ้านเลขที่ 199/3';
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'ผลการเข้าพบ',
      inputs: [
        {
          type: 'radio',
          label: 'มีผู้ให้ข้อมูลให้ความร่วมมือ',
          value: 'value1',
        },
        {
          type: 'radio',
          label: 'มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ',
          value: 'value2',
        },
        {
          type: 'radio',
          label: 'ไม่มี/ไม่พบผู้ให้ข้อมูล',
          value: 'value3',
        },
        {
          type: 'radio',
          label: 'บ้าน/อาคาร ว่างหรือร้าง',
          value: 'value4',
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            
          }
        }
      ]
    });

  
    alert.present();
  }

  editBuilding(){
    this.events.publish("editBuildingSummit");
  }
}