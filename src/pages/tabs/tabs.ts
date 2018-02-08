import { Component,ViewChild } from '@angular/core';
import { NavController,MenuController,Tabs } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {LoginPage} from "../login/login";
import {Login1Page} from "../login1/login1";
import {MyAccountPage} from "../my-account/my-account";
import {Storage} from "@ionic/storage";
import {AppGlobal} from "../../GlobalData/AppGlobal";
import {UserModel} from "../../models/user-model";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef:Tabs;
  tabList:Array<{tabRoot:any,tabTitle:String,tabIcon:String}>;
  title:string="待办";
  constructor(public navCtrl: NavController,public menu:MenuController,public storage:Storage) {
    this.storage.get("userInfo").then((val)=>{
      //console.dir(val);
      AppGlobal.getInstance().currentUserInfo=val;
      //console.dir( AppGlobal.getInstance());
      if(AppGlobal.getInstance().currentUserInfo!=null){
        alert(AppGlobal.getInstance().currentUserInfo.name);
      }else{
        this.navCtrl.push(Login1Page);
      }
    });

    this.tabList=[{tabRoot:HomePage,tabTitle:"待办",tabIcon:"ios-open-outline"},
      {tabRoot:AboutPage,tabTitle:"其它系统",tabIcon:"ios-people-outline"},
      {tabRoot:ContactPage,tabTitle:"通知",tabIcon:"ios-paper-outline"},
      {tabRoot:MyAccountPage,tabTitle:"我",tabIcon:"ios-contact-outline"}
      // {tabRoot:ContactPage,tabTitle:"发起",tabIcon:"ios-photos-outline"}
    ];

  }
//获取Cookie
  getCookie(name)
  {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
    if(arr=document.cookie.match(reg)){
      return  decodeURI(arr[2]);
    }
    else{
      return null;
    }
  }
  //当进入页面时触发
  ionViewDidEnter(){
    let mainTabs = this.tabRef;
    // mainTabs.select(1);
  }

  getTitle():void{
    console.dir(this.tabRef.getSelected().tabTitle);
    this.title=this.tabRef.getSelected().tabTitle;
  }
}
