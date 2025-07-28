import { Adaptor } from '../interfaces/adaptor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthapiadaptService implements Adaptor {

  constructor() { }

adapt(data:any){

  return{
    message:data.message,
    token:data.Token,
    email:data.user.email
  }

}


}
