import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  processList:any[];
  constructor(public navCtrl: NavController,public menu:MenuController) {
    this.processList=[{title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2},
      {title:"请假流程",count:2}
    ];
  }

}
