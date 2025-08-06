import { Observable } from "rxjs";
import { AuthResponse, forgetform, forgetpass, LoginForm, registerForm } from "../interfaces/auth";

export abstract class autthapi{
  abstract Login(data:LoginForm):Observable<AuthResponse>;
 abstract signup(data:registerForm):Observable<AuthResponse>;
 abstract ForgetPassword(data:forgetform):Observable<forgetpass>;

}