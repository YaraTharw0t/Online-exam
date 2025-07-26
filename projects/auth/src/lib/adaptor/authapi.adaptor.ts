import { Adaptor } from '../interfaces/adaptor';
import { Token } from './../../../../../node_modules/lightningcss/node/ast.d';
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
