import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

//http服务
@Injectable()
export class HttpService{

  constructor(private http:Http){

  }
//普通返回Observable的get的请求
  public httpGet(url:string){
    return this.http.get(url);
  }

  public httpPost(url:string,params:any){

  }
}
