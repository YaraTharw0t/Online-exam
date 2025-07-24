import { AuthapiAdapService } from './adaptor/authapi.adaptor';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthEndPoind } from './enums/AuthEndPoind';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _httpClient = inject(HttpClient);
  _authapiAdapService = inject(AuthapiAdapService);

  // login(data:any):Observable<any> {
  //   return this._httpClient.post(AuthEndPoind.LOGIN,data).pipe(Map(res=>this._authapiAdapService.adapt(res)))
  // }
}
