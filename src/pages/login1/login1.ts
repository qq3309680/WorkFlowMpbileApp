import {Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validator} from "@angular/forms";
import {userModelDataProvider} from "../../providers/data/userModelData";
import {TabsPage} from "../tabs/tabs";
import {HttpService} from "../../services/httpService";
import {Storage} from "@ionic/storage";
import {Http,Headers} from "@angular/http";

@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {
  form:FormGroup;
  returnMessage:string;
  userInfo:any;
  loginFail:boolean=false;
  loading:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,@Inject(FormBuilder) fb:FormBuilder,public userModelService:userModelDataProvider,public http:Http,public httpService:HttpService,private storage:Storage) {
    this.form=fb.group({Account:"",Password:""});
  }

  ionViewDidLoad() {
    //console.dir(this.userModelService.getUserInfo());
  }
  submitForm(){
    this.loading=true;
    let accountInfo=this.form.value;
    var headers=new Headers({ 'Content-Type': 'application/json' });
    // this.http.post("http://bpmdev.haid.com.cn:8010/Portal/WebServices/EffortService.asmx/GetAppUserInfo",JSON.stringify({Account:"016314",Password:"888888"}),{headers:headers}).subscribe((res)=>{
    //   console.dir(res);
    //   console.dir(JSON.parse(JSON.parse(res["_body"]).d));
    // });
    this.http.get("/assets/data/userData.json",{headers:headers}).subscribe((res)=>{

      console.dir(res);
      console.dir(JSON.parse(res["_body"]));
      this.userInfo=JSON.parse(res["_body"]);
      alert(this.userInfo.name);
      // if(accountInfo.Account==this.userInfo.accountNumber){
      //   if(accountInfo.Password==this.userInfo.password){
      //     this.returnMessage="成功";
      //     this.storage.set("userInfo",this.userInfo);
      //     this.navCtrl.push(TabsPage,{"userInfo":this.userInfo});
      //   }else{
      //     this.loginFail=true;
      //     this.returnMessage="账号密码错误.";
      //   }
      // }else{
      //   this.loginFail=true;
      //   this.returnMessage="账号密码错误.";
      // }
    },(err)=>{
      console.dir("获取数据出错.");
      console.dir(err);
      this.returnMessage="获取数据出错.";
      this.loading=false;
    },()=>{
      this.loading=false;
    });


  }
}
