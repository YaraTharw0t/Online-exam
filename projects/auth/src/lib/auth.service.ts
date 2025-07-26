import { inject, Injectable } from '@angular/core';
import { BASE_URL } from './baseurl';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthapiadaptService } from './adaptor/authapi.adaptor';
import { AuthEndPoind } from './enums/authendpoind';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 _baseurl = inject(BASE_URL)
 _httpclient= inject(HttpClient)

  _authapiadaptService  = inject(AuthapiadaptService)



Login(data:any):Observable<any>{
  return   this._httpclient.post(this._baseurl+AuthEndPoind,data).pipe(map(res=>this._authapiadaptService.adapt(res)),
catchError(err=>of(err))
)
}

}
