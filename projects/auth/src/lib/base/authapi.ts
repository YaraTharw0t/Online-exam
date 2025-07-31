import { Observable } from "rxjs";

export abstract class autthapi{
  abstract Login(data:any):Observable<any>;
 abstract signup(data:any):Observable<any>;
//  abstract ForgetPassword(data:any):Observable<any>;

}