import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';

@Injectable({
  providedIn: 'root'
})
export class AuthapiAdapService implements Adaptor {

  constructor() { }

  adapt(data:any){
    return {
      message:  data.message,
      token:data.token,
      email:data.user.email
    }

  }
}
