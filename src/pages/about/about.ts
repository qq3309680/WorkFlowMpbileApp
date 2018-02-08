import { Component,ViewChild } from '@angular/core';
import { NavController ,Nav} from 'ionic-angular';
import{HomePage} from "../home/home";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  windowHeight=document.body.clientHeight;
  windowWidth=document.body.clientWidth;
  constructor(public navCtrl: NavController) {
console.dir(this.windowHeight);
    console.dir(this.windowWidth);
  }

}
