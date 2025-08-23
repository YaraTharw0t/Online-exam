import { Observable } from "rxjs";
import { AuthResponse, comelogout, forgetform, forgetpass, LoginForm, registerForm, ResetCode, ResetCodeform, setpass, setpassform } from "../interfaces/auth";

export abstract class autthapi{
  abstract Login(data:LoginForm):Observable<AuthResponse>;
 abstract signup(data:registerForm):Observable<AuthResponse>;
 abstract ForgetPassword(data:forgetform):Observable<forgetpass>;
 abstract resetcode(data:ResetCodeform):Observable<ResetCode>;
 abstract setpass(data:setpassform):Observable<setpass>;
 abstract logout():Observable<comelogout>;

}