import { InputTextModule } from 'primeng/inputtext';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinner } from 'primeng/progressspinner';
import { AuthService } from 'auth';
import { Password_Pattern} from '../../../core/constants/regex.constants';
import { ErrMsgComponent } from '../../../shared/err-msg/err-msg.component';
import { Subscription } from 'rxjs';











@Component({
  selector: 'app-login',
  imports: [RouterLink,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule,PasswordModule,ProgressSpinner,ErrMsgComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  

    LoginForm:FormGroup =new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.pattern(Password_Pattern)])
    })

 _authService= inject(AuthService)
 _router= inject(Router)
     isloading:boolean=false

     private loginsubscription : Subscription | undefined

      OnSubmitlog(){
   this.isloading=true

     this.loginsubscription  = this._authService.Login(this.LoginForm.value).subscribe({
          next:(res)=>{
            console.log(res)
            if(res.message=="success"){
              localStorage.setItem('_token',res.token)
              this._router.navigate(['/blanklayout/dashboard'])
   this.isloading=false

            }

          }
        })

      }



      ngOnDestroy(): void {
       if(this.loginsubscription){
        this.loginsubscription.unsubscribe()
       }
        
      }
}
