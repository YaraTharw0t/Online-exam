import { Adaptor } from '../interfaces/adaptor';
import { Injectable } from '@angular/core';
import { Auth, AuthResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthapiadaptService implements Adaptor {

  constructor() { }




  //data:auth====>  interface  all data from api 
adapt(data:Auth):AuthResponse{
  // : authresponse ====> interface  for adapt 

  return{
    message:data.message,
    token:data.token,
    email:data.user.email
  }

}


}
