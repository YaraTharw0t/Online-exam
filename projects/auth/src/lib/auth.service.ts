import { inject, Injectable } from '@angular/core';
import { BASE_URL } from './baseurl';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthapiadaptService } from './adaptor/authapi.adaptor';
import { AuthEndPoind } from './enums/authendpoind';
import { autthapi } from './base/authapi';
import { Auth, AuthResponse, forgetform, forgetpass, LoginForm, registerForm, ResetCode, ResetCodeform, setpass, setpassform, comelogout } from './interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements autthapi{

 _baseurl = inject(BASE_URL)
 _httpclient= inject(HttpClient)

  _authapiadaptService  = inject(AuthapiadaptService)




  // GetToken(){

  //   localStorage.setItem('token',res.token)
    
  // }

//:loginform ==> interface data go to api 
//<authresponse> ===> interface for  data form adapt 
//<auth> ====> interface come from api 
Login(data:LoginForm):Observable<AuthResponse>{
  return  this._httpclient.post<Auth>(this._baseurl+ AuthEndPoind.LOGIN,data).pipe(map(res=>this._authapiadaptService.adapt(res)),
catchError(err=>of(err))
)
}

signup(data:registerForm):Observable<AuthResponse>{

  return this._httpclient.post<Auth>(this._baseurl+ AuthEndPoind.SIGNUP,data).pipe(map(res=>this._authapiadaptService.adapt(res)),
  catchError(err =>of(err))



)
}
 ForgetPassword(data:forgetform): Observable<forgetpass> {

    return this._httpclient.post<forgetpass>(this._baseurl+AuthEndPoind.FORGETPASSWORD,data).pipe(map(res=>res))
}
 resetcode(data: ResetCodeform): Observable<ResetCode> {
    return this._httpclient.post<ResetCode>(this._baseurl+AuthEndPoind.RESETCODE,data).pipe(map(res=>res))
}
 setpass(data:setpassform): Observable<setpass> {
  return this._httpclient.put<setpass>(this._baseurl+AuthEndPoind.RESETPASSWORD,data).pipe(map(res=>res))
    
}

 logout(): Observable<comelogout> {

  return this._httpclient.get<comelogout>(this._baseurl+AuthEndPoind.LOGOUT).pipe(map(res=>res))
    
}






}

